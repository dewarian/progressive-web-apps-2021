const copy = require("copy");

copy("./public/*.js*", "dist", function (err, files) {
  if (err) {
    throw err;
  } else {
    console.log(`copied: ${JSON.stringify(files.length)}`);
  }
});
