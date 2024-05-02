import { useState } from 'react';
import { dividSegmentTargetCharacter } from '../utils/dividSegmentTargetCharacter';

export const useCountCharacter = (targetCharacter: string): number => {
  const [targetCharacterCount, setTargetCharacterCount] = useState<number>(0);

  setTargetCharacterCount(
    [...dividSegmentTargetCharacter(targetCharacter)].length,
  );

  return targetCharacterCount;
};
