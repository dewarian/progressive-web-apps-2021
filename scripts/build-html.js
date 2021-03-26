const ejs = require("ejs");
const fs = require("fs");
const fsPromise = fs.promises;
const path = require("path");
const fetch = require("node-fetch");
// ---

generateHomePage();

/**
 *
 */
function generateHomePage() {
  const baseUrl = "https://kitsu.io/api/edge/anime";
  const year = 2021;
  const season = "winter";
  const pageLimit = "20";
  const offSet = "page[offset]=";

  fetch(
    `${baseUrl}?filter[seasonYear]=${year}&[season]=${season}&page[limit]=${pageLimit}&${offSet}40`
  ).then(async (response) => {
    const shows = await response.json();
    const data = {
      pageTitle: "Winter 2021 Shows",
      shows
    };

    const html = renderTemplate("views/home.ejs", data);
    writeFile("./dist", "index.html", html);
  });
}

/**
 * @title RenderTemplate
 * @description render EJS tempalte to html
 * @param {String} templatePath
 * @param {Object} data
 * @return {String} HTML string in file format
 * @tutorial https://github.com/cmda-minor-web/progressive-web-apps-2021/blob/master/examples/node-advanced-static-prerendering-example/scripts/build-html.js
 */
function renderTemplate(templatePath, data) {
  const template = fs.readFileSync(templatePath, "utf8").toString();
  return ejs.render(template, data, {
    views: [
      path.join(__dirname, "../", "views"),
      path.join(__dirname, "../", "views/", "partials")
    ]
  });
}

/**
 * @title writeFile
 * @description write file to a directory
 * @param {String} fileDirectory
 * @param {String} filename
 * @param {Object} fileContents
 * @return {*}
 * @tutorial https://github.com/cmda-minor-web/progressive-web-apps-2021/blob/master/examples/node-advanced-static-prerendering-example/scripts/build-html.js
 */
async function writeFile(fileDirectory, filename, fileContents) {
  await fsPromise.mkdir(fileDirectory, { recursive: true });
  return await fsPromise.writeFile(
    path.join(fileDirectory, filename),
    fileContents
  );
}
