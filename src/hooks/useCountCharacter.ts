import { useState } from 'react';

export const useCountCharacter = (targetCharacter?: string): number => {
  const [targetCharacterCount, setTargetCharacterCount] = useState<number>(0);

  if (!targetCharacter) return targetCharacterCount;

  const segmenter = new Intl.Segmenter();
  const segmentedTargetCharacter = Array.from(
    segmenter.segment(targetCharacter),
  );
  setTargetCharacterCount([...segmentedTargetCharacter].length);

  return targetCharacterCount;
};
