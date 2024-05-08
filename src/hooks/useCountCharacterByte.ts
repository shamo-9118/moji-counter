import { useEffect, useState } from 'react';

export const useCountCharacterByte = (targetCharacter: string) => {
  const [encodedCharBytes, setEncodedCharBytes] = useState<number>(0);

  useEffect(() => {
    const encoder = new TextEncoder();
    console.log(encoder);

    const encodedCharList = encoder.encode(targetCharacter);
    setEncodedCharBytes(encodedCharList.length);
  }, [targetCharacter]);

  return { encodedCharBytes };
};
