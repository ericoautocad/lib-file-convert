const { expect } = require('chai');

const { getColumnLabels } = require('src/core/builder/spreadsheet/GeneratorlabelsColumnsFile');

describe('Test Unit :: Builder :: File :: Spreadshet :: GeneratorlabelsColumnsFile', () => {

    context('when is called getColumnLabels', () => {
        it('should return an array of labels when the data parameter is an array of objects', () => {

            const expectedResult = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'];
            data = [
                {
                    'Column 1': 'Value 1',
                    'Column 2': 'Value 2',
                    'Column 3': 'Value 3',
                    'Column 4': 'Value 4',
                    'Column 5': 'Value 5',
                }
            ];

            const labels = getColumnLabels(data);
            expect(labels).to.be.deep.equal(expectedResult);

        });

        it('should return an array of labels when the data parameter is an object', () => {

            const expectedResult = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'];
            data = {
                'Column 1': 'Value 1',
                'Column 2': 'Value 2',
                'Column 3': 'Value 3',
                'Column 4': 'Value 4',
                'Column 5': 'Value 5',
            };

            const labels = getColumnLabels(data);
            expect(labels).to.be.deep.equal(expectedResult);

        });
    });
});
