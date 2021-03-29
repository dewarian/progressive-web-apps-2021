const copy = require("copy");

copy(
  [
    "./public/*.js",
    "./public/*.json",
    "./public/kitsu.png",
    ".public/fonts/SpaceMono-Regular.ttf"
  ],
  "dist",
  function (err, files) {
    if (err) {
      throw err;
    } else {
      console.log(`copied: ${JSON.stringify(files.length)}`);
    }
  }
);
