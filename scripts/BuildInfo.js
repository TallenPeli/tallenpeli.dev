const fs = require("fs");
const { execSync } = require("child_process");

const buildInfo = {
  version: process.env.npm_package_version,
  commit: execSync("git rev-parse HEAD").toString().trim(),
  commitShort: execSync("git rev-parse --short HEAD").toString().trim(),
  branch: execSync("git rev-parse --abbrev-ref HEAD").toString().trim(),
  buildTime: new Date().toISOString(),
};

fs.writeFileSync("src/build-info.json", JSON.stringify(buildInfo, null, 2));
