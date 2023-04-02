import { processData } from './data-process';
import * as FileHandler from './file-handler';

describe('data-process.ts', () => {
  let readFileSpy: jest.SpyInstance;
  let parseToCSVSpy: jest.SpyInstance;

  beforeEach(() => {
    readFileSpy = jest.spyOn(FileHandler, 'readFile');
    parseToCSVSpy = jest.spyOn(FileHandler, 'parseToCSV');

    parseToCSVSpy.mockResolvedValue(null);
  });

  it('should process the expected data', async () => {
    readFileSpy.mockResolvedValue([
      { id: 1, json: '[1, 2, 4, 5]' },
      { id: 2, json: '[1, 2]' },
    ]);

    await processData('input-file-name.csv');

    expect(parseToCSVSpy).toHaveBeenCalledTimes(1);
    expect(parseToCSVSpy).toHaveBeenCalledWith([
      { id: 1, is_valid: true, json: '[2,5,1,4]' },
      { id: 2, is_valid: false, json: '[]' },
    ]);
  });

  it('should not process tables with different number of rows and columns', async () => {
    readFileSpy.mockResolvedValue([{ id: 1, json: '[1, 2, 3, 4, 5]' }]);

    await processData('input-file-name.csv');

    expect(parseToCSVSpy).toHaveBeenCalledTimes(1);
    expect(parseToCSVSpy).toHaveBeenCalledWith([
      { id: 1, is_valid: false, json: '[]' },
    ]);
  });
});
