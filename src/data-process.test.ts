import { processData } from './data-process';
import * as FileHandler from './file-handler';

describe('data-process.ts', () => {
  const readFile = jest.spyOn(FileHandler, 'readFile');
  const parseToCSV = jest.spyOn(FileHandler, 'parseToCSV');

  it('should process the expected data', async () => {
    readFile.mockResolvedValue([
      { id: 1, json: '[1, 2, 4, 5]' },
      { id: 2, json: '[1, 2]' },
    ]);

    await processData('input-file-name.csv');

    expect(parseToCSV).toHaveBeenCalledTimes(1);
    expect(parseToCSV).toHaveBeenCalledWith([
      { id: 1, is_valid: true, json: '[2,5,1,4]' },
      { id: 2, is_valid: false, json: '[]' },
    ]);
  });
});
