import { useEffect, useState } from 'react';
import { convertArraySeparatedNewlineCharacters } from '../utils/convertArraySeparatedNewlineCharacters';

export const useCountLine = (
  targetCharacter: string,
): { targetLineCount: number } => {
  const [targetLineCount, setTargetLineCount] = useState<number>(0);

  useEffect(() => {
    setTargetLineCount(
      [...convertArraySeparatedNewlineCharacters(targetCharacter)].length,
    );
  }, [targetCharacter]);

  return { targetLineCount };
};
