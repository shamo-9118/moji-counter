import { removeEmptyInEndOfArray } from './';

export const convertArraySeparatedNewlineCharacters = (
  targetCharacter: string,
): string[] => {
  // 改行コード・空白・マルチバイト文字を１文字としてカウント
  const splitedCharaceterListByNewLine = targetCharacter.split('\n');
  const isEmptyAtEndOfArray =
    splitedCharaceterListByNewLine[
      splitedCharaceterListByNewLine.length - 1
    ] === '';

  if (!isEmptyAtEndOfArray) {
    return splitedCharaceterListByNewLine;
  }

  return removeEmptyInEndOfArray(splitedCharaceterListByNewLine);
};
