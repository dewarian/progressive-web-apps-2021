const express = require("express");
const { getData } = require("./src/modules/handling-data");
const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", "src/views");

// Custom path for static files
app.use("/static", express.static("src/static"));

/**
 * Ugly global scope variables. Build step would be to refactor these in a block scope
 */
const baseUrl = "https://kitsu.io/api/edge/anime";
const year = 2021;
const season = "winter";
const pageLimit = "10";
const offSet = "page[offset]=";
const url = `${baseUrl}?filter[seasonYear]=${year}&[season]=${season}&page[limit]=${pageLimit}&${offSet}20`;

/**
 * Routers
 * "/" Returns homepage with data from the API
 */
app.get("/", async (req, res) => {
  const dataset = await getData(url);
  console.log(dataset.data);
  res.render("home", {
    pageTitle: "Kitsu Anime",
    shows: dataset
  });
});

/**
 * ":id" Returns information of a specific show
 */
app.get("/detail/:id", async (req, res) => {
  const dataset = await getData(url);
  res.render("detail", {
    pageTitle: dataset.title,
    info: dataset
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
