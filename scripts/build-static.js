const copy = require("copy");

copy(
  ["./public/*.js", "./public/*.json", "./public/kitsu.png"],
  "dist",
  function (err, files) {
    if (err) {
      throw err;
    } else {
      console.log(`copied: ${JSON.stringify(files.length)}`);
    }
  }
);

copy(["./public/fonts/*"], "dist/fonts", (err, files) => {
  if (err) {
    throw err;
  } else {
    console.log(`copied fonts`);
  }
});
