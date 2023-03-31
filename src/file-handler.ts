import { parse } from 'csv-parse';
import fs from 'fs';
import path from 'path';
import * as csv from 'fast-csv';

export const readFile = (fileName: string): Promise<Array<InputData>> =>
  new Promise((resolve, reject) => {
    const csvFilePath = path.resolve(__dirname, fileName);

    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

    parse(
      fileContent,
      {
        delimiter: ',',
        columns: true,
      },
      (err, records) => {
        if (err) {
          reject(err);
        }

        resolve(records);
      }
    );
  });

export const parseToCSV = (data: Array<OutputData>) => {
  const csvStream = csv.format({ headers: true });

  csvStream.pipe(process.stdout).on('end', () => process.exit());

  console.clear();

  data.forEach((d) => {
    csvStream.write(d);
  });

  csvStream.end();
};
