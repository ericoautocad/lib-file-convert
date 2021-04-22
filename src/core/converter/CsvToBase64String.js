const { Parser } = require('json2csv');
const { getColumnLabels } = require('../builder/spreadsheet/GeneratorLabelsColumnsFile');

module.exports = () => ({
    buildFile: (data, options = {}) => {
        try {
            const fields = options.labels ? options.labels : getColumnLabels(data);
            const { highWaterMark, withBOM } = options;
            const transformOpts =  { highWaterMark, withBOM };
            if(!options.highWaterMark)
                Object.assign(transformOpts, { highWaterMark: 16384 });
            const json2csvParser = new Parser({ fields });
            const csv = json2csvParser.parse(data, transformOpts);

            return  Buffer.from(csv, 'utf8').toString('base64');
        } catch (error) {
            console.log('Ocorreu um erro.');
            throw error;
        }
    }
});
