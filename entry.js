// document.write("It works.");

require("!style!css!./style.css");
// webpack ./entry.js bundle.js --module-bind 'css=style!css'
// Some environments may require double quotes: –module-bind "css=style!css"
require("./style.css");

document.write(require("./content.js"));