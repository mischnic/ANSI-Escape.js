function ansiToHTML(s, defaultFG, defaultBG, parseInteractive=true){
	// http://wiki.bash-hackers.org/scripting/terminalcodes
	// https://misc.flogisoft.com/bash/tip_colors_and_formatting#colors
	const ANSI_Styles = {
		0: {color: "lightgrey", "background-color": "black", "font-weight": "initial", "text-decoration": "initial", opacity: 1},
		1: {"font-weight": "bold"},
		2: {"opacity": "0.8"}, //DIM
		4: {"text-decoration": "underline"}, //underlined
		5: {}, //BLINK
		7: {}, //REVERSE (swap fg & bg)
		8: {opacity: "0"}, // hidden

		21:	{"font-weight": "initial"}, //Reset bold/bright
		22:	{opacity: 1}, //Reset dim
		24:	{"text-decoration": "initial"}, //Reset underlined
		25:	{}, //Reset blink
		27:	{}, //Reset reverse
		28:	{opacity: 1}, //Reset hidden


		30: {color: "black;"},
		31: {color: "red;"},
		32: {color: "green;"},
		33: {color: "#c5c527;"}, //yellow
		34: {color: "blue;"},
		35: {color: "darkmagenta;"}, //magenta
		36: {color: "darkcyan;"}, //cyan
		37: {color: "lightgrey;"},
		39: {color: "lightgrey;"}, //initial
		90: {color: "#555;"}, //darkgrey
		91:	{color: "orangered;"},
		92:	{color: "lime;"},
		93:	{color: "yellow;"}, //lightyellow
		94:	{color: "steelblue;"}, //lightblue
		95:	{color: "magenta;"}, //lightmagenta
		96:	{color: "cyan;"}, //lightcyan
		97:	{color: "white;"},

		40: {"background-color": "black"},
		41: {"background-color": "red"},
		42: {"background-color": "green"},
		43: {"background-color": "#c5c527"}, //yellow
		44: {"background-color": "blue"},
		45: {"background-color": "darkmagenta"}, //magenta
		46: {"background-color": "darkcyan"}, //cyan
		47: {"background-color": "lightgrey"},
		49: {"background-color": "black"}, //initial
		100: {"background-color": "#555"}, //darkgrey
		101: {"background-color": "orangered"},
		102: {"background-color": "lime"},
		103: {"background-color": "yellow"}, //lightyellow
		104: {"background-color": "steelblue"}, //lightblue
		105: {"background-color": "magenta"}, //lightmagenta
		106: {"background-color": "cyan"}, //lightcyan
		107: {"background-color": "white"}
	}

	function objToCSS(o, del1 = ": ", del2 = ";"){
		const key = Object.keys(o)
		return Object.keys(o)
			.map((k)=> [k, o[k]].join(del1))
			.join(del2) + (o.length > 0 ? del2 : "");
	}

	const regex = /\x1B\x5b([0-9;]+m|[0-9][KG])/gu;

	if(defaultBG){
		ANSI_Styles[0]["background-color"] = defaultBG;
		ANSI_Styles[49]["background-color"] = defaultBG;
	}
	if(defaultFG){
		ANSI_Styles[0]["color"] = defaultFG;
		ANSI_Styles[39]["color"] = defaultFG;
	}

	let last = {};

	function line(s){
		let count = 1;

		function repl(match, p1, offset, string){
			if(p1.endsWith("m")){
				count++;
				return `<span style="${p1.slice(0, -1).split(";")
						.map((v)=>{
							const vi = parseInt(v);
							const style = ANSI_Styles[vi];
							if(style){
								last = {...last, ...style}
								if(vi === 39){
									delete last["color"];
								}
								if(vi === 49){
									delete last["background-color"];
								}

								return objToCSS(ANSI_Styles[vi]);
							} else {
								console.err("unknown ansi code:" + vi);
								return "";
							}
						}).join(" ")}">`;
			} else{
				return "";
			}
		}

		const v = `<span style="${objToCSS(last)}">`+s.replace(regex, repl)+Array(count+1).join("</span>");
		return v;
	}

	// http://www.rapidtables.com/code/text/ascii-table.htm
	// http://wiki.bash-hackers.org/scripting/terminalcodes
	let output = parseInteractive ? s.replace(/\r\n/g, "\n").replace(/\r +\r/g, "") : s;

	return output.split("\n").map((s)=>{
			return line(s);
		}).join("\n");
}

window.ansiToHTML = ansiToHTML;