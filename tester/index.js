const { default: initTest } = require("./dist/app");
const { defineResume } = require("./dist/functions/logLib/writeLogResume");

module.exports = {
  initTest,
  defineResume,
};
