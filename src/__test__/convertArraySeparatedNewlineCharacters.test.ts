import '@testing-library/jest-dom';
import { convertArraySeparatedNewlineCharacters } from '../utils';

describe('文字列を改行コード区切りで配列にする', () => {
  it('空白は空配列', () => {
    expect(convertArraySeparatedNewlineCharacters('')).toEqual([]);
  });

  it('改行コードのみは空配列', () => {
    expect(convertArraySeparatedNewlineCharacters('\n')).toEqual([]);
  });

  it('文字列を改行コード区切りで配列作成', () => {
    const expectedList = ['丸本はよく', '丸木と', '間違えられます🥺'];
    expect(
      convertArraySeparatedNewlineCharacters(
        '丸本はよく\n丸木と\n間違えられます🥺',
      ),
    ).toEqual(expectedList);
  });

  it('末尾改行コードの場合は配列に空文字を入れない', () => {
    const expectedList = ['丸本はよく', '丸木と', '間違えられます🥺'];
    expect(
      convertArraySeparatedNewlineCharacters(
        '丸本はよく\n丸木と\n間違えられます🥺\n',
      ),
    ).toEqual(expectedList);
  });
});
