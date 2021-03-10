import express from "express";
import getData from "handling-data";
const app = express();
const port = 8080;

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

app.get("/", async (req, res) => {
  const dataset = await getData(
    `${baseUrl}?filter${seasonYearFilter}${year}&${seasonFilter}${season}&${pageLimit}&${offSet}${offset}`
  );
  res.render("home", {
    title: "home"
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
