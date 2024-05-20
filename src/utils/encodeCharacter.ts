export const encodeCharacter = (character: string) => {
  const encoder = new TextEncoder();
  const encodedCharList = encoder.encode(character);

  return encodedCharList;
};
