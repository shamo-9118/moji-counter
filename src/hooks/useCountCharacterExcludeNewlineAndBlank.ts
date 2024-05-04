import { useEffect, useState } from 'react';
import { dividSegmentTargetCharacter } from '../utils';

export const useCountCharacterExcludeNewLineAndBlank = (
  targetCharacter: string,
): { excludeNewLineAndBlankCharacterCount: number } => {
  const [
    excludeNewLineAndBlankCharacterCount,
    setExcludeNewLineAndBlankCharacterCount,
  ] = useState<number>(0);

  useEffect(() => {
    const segmentedTextWithNewLineAndWhitespaceRemoved =
      dividSegmentTargetCharacter(targetCharacter).filter((segmentedText) => {
        return (
          segmentedText.segment !== '\n' &&
          segmentedText.segment !== ' ' &&
          segmentedText.segment !== '\u3000'
        );
      });
    setExcludeNewLineAndBlankCharacterCount(
      segmentedTextWithNewLineAndWhitespaceRemoved.length,
    );
  }, [targetCharacter]);

  return { excludeNewLineAndBlankCharacterCount };
};
