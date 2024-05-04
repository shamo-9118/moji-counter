export const convertArraySeparatedNewlineCharacters = (
  targetCharacter: string,
): string[] => {
  // 改行コード・空白・マルチバイト文字を１文字としてカウント
  const splitedCharaceterListByNewLine = targetCharacter
    .split('\n')
    .filter((splitedCharaceter) => splitedCharaceter !== '');
  return splitedCharaceterListByNewLine;
};
