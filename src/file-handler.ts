import * as csv from 'fast-csv';
import fs from 'fs';
import path from 'path';

export const readFile = (fileName: string): Promise<Array<InputData>> =>
  new Promise((resolve, reject) => {
    const csvFilePath = path.resolve(__dirname, fileName);

    const records: Array<InputData> = [];

    fs.createReadStream(csvFilePath)
      .pipe(csv.parse({ headers: true }))
      .on('error', (e) => reject(e))
      .on('data', (record) => records.push(record))
      .on('end', () => resolve(records));
  });

export const parseToCSV = (data: Array<OutputData>) => {
  const csvStream = csv.format({ headers: true });

  csvStream.pipe(process.stdout).on('end', () => process.exit());

  data.forEach((d) => {
    csvStream.write(d);
  });

  csvStream.end();
};
