import { processData } from './data-process';

(async () => {
  const inputFilePath = process.argv[2];

  if (!inputFilePath) {
    console.error('No input file provided');
    process.exit(1);
  }

  if (!inputFilePath.endsWith('.csv')) {
    console.error('Please provide a valid csv file');
    process.exit(1);
  }

  await processData(inputFilePath);
})().catch((e) => console.error(e));
