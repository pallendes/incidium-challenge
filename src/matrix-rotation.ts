export const converToMatrix = (arr: number[]) => {
  const cols = Math.sqrt(arr.length);
  const newArr = [];

  while (arr.length) {
    newArr.push(arr.splice(0, cols));
  }

  return newArr;
};

export const rotateMatrix = (m: number[][]): number[][] => {
  const N = m.length;
  const rotatedM = Array.from(Array(N), () => new Array(N));

  for (let i = 0; i < N / 2; i++) {
    for (let j = i; j < N - i - 1; j++) {
      rotatedM[i][j] = m[i][j + 1];
      rotatedM[N - j - 1][i] = m[N - j - 2][i];
      rotatedM[j][N - 1 - i] = m[j + 1][N - 1 - i];
      rotatedM[N - i - 1][N - 1 - j] = m[N - i - 1][N - j - 2];
    }
  }

  if (N % 2 !== 0) {
    const center = (N - 1) / 2;
    rotatedM[center][center] = m[center][center];
  }

  return rotatedM;
};
