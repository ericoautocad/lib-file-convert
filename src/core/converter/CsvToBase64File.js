const { Parser } = require('json2csv');
const { join } = require('path');
const { getColumnLabels } = require('../builder/spreadsheet/GeneratorLabelsColumnsFile');

module.exports = () => ({
    buildFile: (data, options = {}) => {
        try {
            const fields = options.labels ? options.labels : getColumnLabels(data);
            const { highWaterMark, filePath } = options;
            const transformOpts =  { highWaterMark };
            if(!options.highWaterMark)
                Object.assign(transformOpts, { highWaterMark: 16384 });
            const json2csvParser = new Parser({ fields });

            // let csv = json2csvParser.parse(data, transformOpts);
            json2csvParser.parse(data, transformOpts);
            // csv = '\uFEFF' + csv;

            const absolutePath = join(__dirname, filePath);
            const filename     = new Date().toISOString() + '.csv';
            const fileComplete = join(absolutePath, filename);

            return fileComplete;
        } catch (error) {
            console.log('Ocorreu um erro.');
            throw error;
        }
    }
});
