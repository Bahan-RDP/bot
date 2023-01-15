const { host, application } = require("../options/setting");

// Application
const Nodeactyl = require("nodeactyl");
const Application = new Nodeactyl.NodeactylApplication(
  host,
  application.api_key
);

exports.Application = Application;
exports.Nodeactyl = Nodeactyl;