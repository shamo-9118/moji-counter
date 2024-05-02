import { dividSegmentTargetCharacter } from '../utils/dividSegmentTargetCharacter';
import { useEffect, useState } from 'react';

export const useCountCharacterExcludeNewlineCode = (
  targetCharacter: string,
) => {
  const [
    excludeNewLineCodeCharacterCount,
    setExcludeNewLineCodeCharacterCount,
  ] = useState<number>(0);

  useEffect(() => {
    const excludedNewLineCodeSegmentedTargetCharacterList = [
      ...dividSegmentTargetCharacter(targetCharacter),
    ].filter((data) => data.segment !== '\n');

    setExcludeNewLineCodeCharacterCount(
      excludedNewLineCodeSegmentedTargetCharacterList.length,
    );
  }, [targetCharacter]);

  return { excludeNewLineCodeCharacterCount };
};
