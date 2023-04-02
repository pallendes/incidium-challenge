import { converToMatrix, rotateMatrix } from './matrix-rotation';

describe('Matrix rotation', () => {
  it('should rotate the elements in the given 3x3 matrix', () => {
    expect(
      rotateMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toStrictEqual([
      [2, 3, 6],
      [1, 5, 9],
      [4, 7, 8],
    ]);
  });

  it('should rotate the elements in the given 4x4 matrix', () => {
    expect(
      rotateMatrix([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ])
    ).toStrictEqual([
      [2, 3, 4, 8],
      [1, 7, 11, 12],
      [5, 6, 10, 16],
      [9, 13, 14, 15],
    ]);
  });

  it('should rotate the elements in the given 2x2 string matrix', () => {
    expect(
      rotateMatrix([
        ['1', '2'],
        ['3', '4'],
      ])
    ).toStrictEqual([
      ['2', '4'],
      ['1', '3'],
    ]);
  });

  it('should return the same array in the given 1x1 matrix', () => {
    expect(rotateMatrix([[1]])).toStrictEqual([[1]]);
  });

  it('should conver the given array to a 3x3 matrix', () => {
    expect(converToMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });

  it('should conver the given array to a 2x2 matrix', () => {
    expect(converToMatrix([1, 2, 3, 4])).toStrictEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
