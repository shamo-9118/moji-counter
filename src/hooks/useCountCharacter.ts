import { useEffect, useState } from 'react';
import { dividSegmentTargetCharacter } from '../utils/dividSegmentTargetCharacter';

export const useCountCharacter = (
  targetCharacter: string,
): { targetCharacterCount: number } => {
  const [targetCharacterCount, setTargetCharacterCount] = useState<number>(0);

  useEffect(() => {
    setTargetCharacterCount(
      [...dividSegmentTargetCharacter(targetCharacter)].length,
    );
  }, [targetCharacter]);

  return { targetCharacterCount };
};
