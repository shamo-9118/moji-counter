export const convertArraySeparatedNewlineCharacters = (
  targetCharacter: string,
): string[] => {
  // 改行コード・空白・マルチバイト文字を１文字としてカウント
  const splitedCharaceterListByNewLine = targetCharacter.split('\n');

  const emptyIndexAtEndOfArray = splitedCharaceterListByNewLine.findLastIndex(
    (splitedCharaceterByNewLine) => splitedCharaceterByNewLine !== '',
  );

  if (emptyIndexAtEndOfArray < 0) {
    return [];
  }

  return splitedCharaceterListByNewLine.slice(0, emptyIndexAtEndOfArray + 1);
};
