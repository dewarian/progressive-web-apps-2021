const copy = require("copy");

copy(["./dist/offline.html"], "public", (err, files) => {
  if (err) {
    throw err;
  } else {
    console.log(`copied offline.html`);
  }
});
