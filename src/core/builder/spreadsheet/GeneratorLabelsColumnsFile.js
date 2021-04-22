module.exports = {
    getColumnLabels: (data) => {
        const rowObject = Array.isArray(data) ? data[0] : data;

        return Object.keys(rowObject);
    }
};
