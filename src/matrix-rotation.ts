export const converToMatrix = (arr: Array<number | string>): MatrixData => {
  const cols = Math.sqrt(arr.length);
  const newArr = [];

  while (arr.length) {
    newArr.push(arr.splice(0, cols));
  }

  return newArr;
};

export const rotateMatrix = (m: MatrixData): MatrixData => {
  const N = m.length;
  const rotatedM = Array.from(Array(N), () => new Array(N));

  for (let i = 0; i < N / 2; i++) {
    for (let j = i; j < N - 1 - i; j++) {
      rotatedM[i][j] = m[i][j + 1];
      rotatedM[N - 1 - j][i] = m[N - 2 - j][i];
      rotatedM[j][N - 1 - i] = m[j + 1][N - 1 - i];
      rotatedM[N - 1 - i][N - 1 - j] = m[N - 1 - i][N - 2 - j];
    }
  }

  // When the matrix size is odd the element in the center will be `undefined`
  // so we fix this manually
  if (N % 2 !== 0) {
    const center = (N - 1) / 2;
    rotatedM[center][center] = m[center][center];
  }

  return rotatedM;
};
