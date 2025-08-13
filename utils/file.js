const fs = require("fs");
const filepath = require("../database.json");

async function readData() {
  try {
    const data = await fs.readFile(filepath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`Error reading data: ${error.message}`);
  }
}



async function writeData(data) {
  try {
    const jsonData = await fs.writeFile(filepath, JSON.stringify(data, null, 2));
  } catch (error) {
    throw new Error(`Error writing data: ${error.message}`);
  }
}

module.exports = {
    readData,
    writeData
    };
