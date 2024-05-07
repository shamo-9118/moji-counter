export const removeEmptyInEndOfArray = (
  splitedCharaceterListByNewLine: string[],
) => {
  let endOfIndex = splitedCharaceterListByNewLine.length - 1;
  while (endOfIndex >= 0 && splitedCharaceterListByNewLine[endOfIndex] === '') {
    endOfIndex--;
    console.log(endOfIndex);
  }

  return splitedCharaceterListByNewLine.slice(0, endOfIndex + 1);
};
