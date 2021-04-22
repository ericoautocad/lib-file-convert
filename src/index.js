// const CsvToBase64String = require("./core/converter/CsvToBase64String");
module.exports = {
    FileConvert: require('./core/FileConvert')
};

// const buildBase64 = async () => {
//     const FileConvert = require('./core/FileConvert')
//     const fs = require('fs').promises;
//     const { join, resolve } = require('path');
//     const base64String = await fs.readFile(resolve(join(__dirname, 'data/extrato.json')));
//     const data = JSON.parse(base64String);
//     console.log( FileConvert.build(data, {type: 'csv', format: 'base64'}) )
// }
// const { pathname: currentFile } = new URL(import.meta.url);
// const cwd = dirname(currentFile)
// console.log('caminho atual: ', join(__dirname, 'public'))

// CsvToBase64String({ logger: console }).create(JSON.parse(base64String));
// buildBase64();
