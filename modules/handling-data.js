const fetch = require("node-fetch");

/**
 * @title Check module.data
 * @function
 * @description Test function
 * @param {String} test A string to check if the modular approach works properly
 * @return {String} log of test
 */
const datatest = (test) => {
  return console.log(`%c${test}`, "color: #ffcc00; font-weight: bold;");
};
/**
 * @title Retrieve Data from API
 * @function
 * @description Data retrieval. Use getData when retrieving data from an external API.
 * @param {String} url API endpoint to call.
 */
const getData = async (url) => {
  return await fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log(`\x1b[1;31m getData: \x1b[0m${err}`));
};

module.exports = {
  datatest: datatest,
  getData: getData
};
