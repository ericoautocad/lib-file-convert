
const CsvToBase64String = require('./converter/CsvToBase64String');

module.exports = ({
    build: (data, options) => {
        const allowedFormats = ['base64', 'file'];
        const allowedTypes = ['csv', 'xlsx'];
        const { type, format } = options;

        if( !allowedFormats.includes(format) ) {
            throw new Error('Invalid format of file');
        }

        if( !allowedTypes.includes(type) ) {
            throw new Error('Invalid type of file');
        }

        return CsvToBase64String().buildFile(data, options);
    }
});
