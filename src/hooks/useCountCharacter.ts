import { useState } from 'react';
import { countSegmentedTargetCharacter } from '../utils/countSegmentedTargetCharacter';

export const useCountCharacter = (targetCharacter: string): number => {
  const [targetCharacterCount, setTargetCharacterCount] = useState<number>(0);

  setTargetCharacterCount(countSegmentedTargetCharacter(targetCharacter));

  return targetCharacterCount;
};
