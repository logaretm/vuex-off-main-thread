/* eslint-disable */
const WorkerPlugin = require("worker-plugin");

module.exports = {
  chainWebpack: config => {
    config.plugin("worker").use(WorkerPlugin);
  }
};
