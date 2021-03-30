const CleanCSS = require("clean-css");
const fs = require("fs");

fs.mkdir("./dist/css", { recursive: true }, (e) => {
  console.log(e);
});
const output = new CleanCSS({
  level: {
    2: { all: false, removeDuplicateFontRules: true }
  }
}).minify(["public/css/index.css"]);
fs.writeFile("./dist/css/index.min.css", output.styles, (err) => {
  if (err) return console.log(err);
  console.log(`Finished minifying CSS in ${output.stats.timeSpent}s`);
});
fs.writeFile("./public/css/index.min.css", output.styles, (err) => {
  if (err) return console.log(err);
  console.log(`Finished minifying CSS in ${output.stats.timeSpent}s`);
});
