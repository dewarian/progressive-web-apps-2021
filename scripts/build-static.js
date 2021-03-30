const copy = require("copy");

copy(["./public/*.js", "./public/*.json"], "dist", function (err, files) {
  if (err) {
    throw err;
  } else {
    console.log(`copied: ${JSON.stringify(files.length)}`);
  }
});

copy(["./public/fonts/*"], "dist/fonts", (err, files) => {
  if (err) {
    throw err;
  } else {
    console.log(`copied fonts`);
  }
});
copy(["./public/img/*"], "dist/img", (err, files) => {
  if (err) {
    throw err;
  } else {
    console.log(`copied images`);
  }
});
copy(["./dist/offline.html"], "public", (err, files) => {
  if (err) {
    throw err;
  } else {
    console.log(`copied offline.html`);
  }
});
