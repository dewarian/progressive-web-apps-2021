const express = require("express");
const { getData } = require("./modules/handling-data");
const compression = require("compression");
const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", "views");

// Custom path for static files
app.use(express.static(__dirname + "/public"));
// Compress all responses
app.use(compression({ level: 9 }));

/**
 * Ugly global scope variables. Build step would be to refactor these in a block scope
 */
const baseUrl = "https://kitsu.io/api/edge/anime";
const year = 2021;
const season = "winter";
const pageLimit = "20";
const offSet = "page[offset]=";
const url = `${baseUrl}?filter[seasonYear]=${year}&[season]=${season}&page[limit]=${pageLimit}&${offSet}20`;

/**
 * Routers
 * "/" Returns homepage with data from the API
 */
app.get("/", async (req, res) => {
  const dataset = await getData(url);
  // console.log(dataset.data);
  res.render("home", {
    pageTitle: "Kitsu Anime",
    shows: dataset
  });
});

/**
 * ":id" Returns information of a specific show
 */
app.get("/detail/:id", async (req, res) => {
  const showId = req.params.id;
  const dataset = await getData(`${baseUrl}/${showId}`);
  // console.log(dataset);
  const title =
    dataset.data.attributes.titles.en_jp === undefined
      ? dataset.data.attributes.titles.en_cn
      : dataset.data.attributes.titles.en_en;
  res.render("detail", {
    pageTitle: title,
    info: dataset.data
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
