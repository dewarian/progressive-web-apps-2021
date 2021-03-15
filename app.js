const express = require("express");
const fetch = require("node-fetch");
// const { getData } = require("./src/modules/handling-data");
const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", "src/views");

// Custom path for static files
app.use("/static", express.static("src/static"));
const year = 2021;
const season = "winter";
const offset = 0;
const baseUrl = "https://kitsu.io/api/edge/anime";
const seasonYearFilter = "[seasonYear]=";
const seasonFilter = "[season]=";
const pageLimit = "page[limit]=20";
const offSet = "page[offset]=";
const url = `${baseUrl}?filter${seasonYearFilter}${year}&${seasonFilter}${season}&${pageLimit}&${offSet}${offset}`;

app.get("/", async (req, res) => {
  const dataset = await fetch(`${url}`)
    .then((rs) => rs.json())
    .catch((err) => console.log(err));
  console.log(dataset.data);
  res.render("home", {
    title: "Kitsu Anime",
    shows: dataset.data
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
