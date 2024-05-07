import { removeEmptyInEndOfArray } from '../utils';

describe('配列末尾の空文字のみ削除する', () => {
  test('配列の末尾の空文字削除', () => {
    expect(removeEmptyInEndOfArray(['a', '', 'b', '', '', ''])).toEqual([
      'a',
      '',
      'b',
    ]);
  });

  test('配列の末尾に空文字がなければ配列操作しない', () => {
    expect(removeEmptyInEndOfArray(['a', '', 'b'])).toEqual(['a', '', 'b']);
  });
});
