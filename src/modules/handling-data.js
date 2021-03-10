/**
 * @title Check module.data
 * @function
 * @description Test function
 * @param {String} test A string to check if the modular approach works properly
 * @return {String} log of test
 */
export const datatest = (test) => {
  return console.log(`%c${test}`, "color: #ffcc00; font-weight: bold;");
};
/**
 * @title Retrieve Data from API
 * @function
 * @description Data retrieval. Use getData when retrieving data from an external API.
 * @param {String} url API endpoint to call.
 */
export const getData = async (url) => {
  return await fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
