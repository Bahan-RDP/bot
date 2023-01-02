const { host, application } = require("../setting.js");

// Application
const Nodeactyl = require("nodeactyl");
const Application = new Nodeactyl.NodeactylApplication(
  host,
  application.api_key
);
const eggDetails(nest, egg) {
    const y = await axios({
      url: `${host}/api/application/nests/${nest}/eggs/${egg}`,
      method: "GET",
      followRedirect: true,
      maxRedirects: 5,
      headers: {
        Authorization: "Bearer " + application.api_key,
        "Content-Type": "application/json",
        Accept: "Application/vnd.pterodactyl.v1+json",
      }
    });
    return y.data;
  }

exports.eggDetails = eggDetails
exports.Application = Application;
exports.Nodeactyl = Nodeactyl;