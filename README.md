# ANSI-Escape.js

A Javascript library to render text with ANSI escape sequences using HTML and CSS.

To force a command to use escape sequences (even without an interactive shell) use, depending on your OS:

- `script -q /dev/null ls -alG` or
- `script -qec "ls -alG" /dev/null`

    (to save the output to a file: replace `/dev/null` with a filename)

## Usage

```javascript
/* >>> Function signature:
 *  `defaultFG` and `defaultBG` change the default fore- and background-color.
 *  Set `color` and `background-color` of the element your putting this into
 *  yourself.
 *
 *  `parseInteractive` removes artifacts caused by the interactive
 *  rewriting of the terminal window by some applications.
 */
function ansiToHTML(input, defaultFG="lighgrey", defaultBG="black", parseInteractive=true){
    return parsedHTMLCode;
}

const cmdOutput = "... some text with escape sequences";
const parsedOutput = ansiToHTML(cmdOutput);
document.querySelector("code > pre").innerHTML = parsedOutput;
```

## Supported features

- **color**: 8/16 mode
- **style**: bold/underlined/hidden
- corresponding reset codes

Not (yet) supported:

- **color**: 88/256 mode
- **style**: blink/dim/reversed
- (unsupported codes are also logged to the console)

For detailed information see the `ANSI_Styles` object in [ANSI-Escape.js](ANSI-Escape.js).


![Example output from test.js](img.png "Example output from test.js")