import { processData } from './data-process';

(async () => {
  const inputFilePath = process.argv[2];

  await processData(inputFilePath);
})().catch((e) => console.error(e));
