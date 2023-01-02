const { host, application } = require("../setting.js");

// Application
const Nodeactyl = require("nodeactyl");
const Application = new Nodeactyl.NodeactylApplication(
  host,
  application.api_key
);

exports.application = Application;
exports.Nodeactyl = Nodeactyl;