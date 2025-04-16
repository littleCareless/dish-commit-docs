const fs = require("fs");
const path = require("path");
const https = require("https");

const CHANGELOG_URL =
  "https://raw.githubusercontent.com/littleCareless/dish-ai-commit/main/CHANGELOG.zh-CN.md";
const OUTPUT_PATH = path.join(__dirname, "../docs/guide/changelog.md");

console.log("开始拉取CHANGELOG文件...");

https
  .get(CHANGELOG_URL, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      fs.writeFileSync(OUTPUT_PATH, data);
      console.log(`CHANGELOG文件已成功更新到: ${OUTPUT_PATH}`);
    });
  })
  .on("error", (err) => {
    console.error("获取CHANGELOG时出错:", err.message);
    process.exit(1);
  });
