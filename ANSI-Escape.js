;(function (global) {

	// http://wiki.bash-hackers.org/scripting/terminalcodes
	// https://misc.flogisoft.com/bash/tip_colors_and_formatting#colors
	const ANSI = {
		0: {color: "lightgrey", "background-color": "black", "font-weight": "initial", "text-decoration": "initial", opacity: 1},
		1: {"font-weight": "bold"},
		2: {}, //DIM
		4: {"text-decoration": "underline"},
		5: {}, //BLINK
		7: {}, //REVERSE (swap fg & bg)
		8: {opacity: "0"},

		21:	{"font-weight": "initial"}, //Reset bold/bright
		22:	{}, //Reset dim
		24:	{"text-decoration": "initial"}, //Reset underlined
		25:	{}, //Reset blink
		27:	{}, //Reset reverse
		28:	{opacity: 1},


		30: {color: "black;"},
		31: {color: "red;"},
		32: {color: "green;"},
		33: {color: "#c5c527;"}, //yellow
		34: {color: "blue;"},
		35: {color: "darkmagenta;"}, //magenta
		36: {color: "darkcyan;"}, //cyan
		37: {color: "lightgrey;"},
		39: {color: "lightgrey;"},
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
		49: {"background-color": "black"},
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

	const regex = /\x1B\x5b([0-9;]+m)/gu;

	function ansiToHTML(s, defaultFG, defaultBG){
		if(defaultBG){
			ANSI[0]["background-color"] = defaultBG;
			ANSI[49]["background-color"] = defaultBG;
		}
		if(defaultFG){
			ANSI[0]["color"] = defaultFG;
			ANSI[39]["color"] = defaultFG;
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
								const style = ANSI[vi];
								if(style){
									last = {...last, ...style}
									return objToCSS(ANSI[vi]);
								} else {
									console.err("unknown ansi code:" + vi);
									return "";
								}
							}).join(" ")}">`;
				}
			}

			const v = `<span style="${objToCSS(last)}">`+s.replace(regex, repl)+Array(count+1).join("</span>");
			return v;
		}

		return s.split("\n").map((s)=>{
			return line(s);
		}).join("\n");
	}

	if ('module' in global) {
		module.exports = ansiToHTML;	
	}
	
	global.ansiToHTML = ansiToHTML;

})(this);