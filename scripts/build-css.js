const CleanCSS = require("clean-css");
const fs = require("fs");

const output = new CleanCSS({
  level: {
    2: { all: false, removeDuplicateFontRules: true }
  }
}).minify(["public/css/index.css"]);
// console.log(output.styles);
fs.writeFile("./dist/index.css", output.styles, (err) => {
  if (err) return console.log(err);
  console.log(`Finished minifying CSS in ${output.stats.timeSpent}s`);
});
