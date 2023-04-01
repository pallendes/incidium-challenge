import { parseToCSV, readFile } from './file-handler';
import { converToMatrix, rotateMatrix } from './matrix-rotation';

export const processData = async (inputFileName: string) => {
  const fileContent = await readFile(inputFileName);

  const processedData: Array<OutputData> = [];

  fileContent.forEach((content) => {
    const matrix = JSON.parse(content.json);
    let rotatedMatrix: Array<number | string> = [];

    const isValid = Math.sqrt(matrix.length) % 1 === 0;

    if (isValid) {
      rotatedMatrix = rotateMatrix(converToMatrix(matrix)).flat();
    }

    processedData.push({
      id: content.id,
      json: JSON.stringify(rotatedMatrix),
      is_valid: isValid,
    });
  });

  parseToCSV(processedData);
};
