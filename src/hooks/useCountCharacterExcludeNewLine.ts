import { dividSegmentTargetCharacter } from '../utils';
import { useEffect, useState } from 'react';

export const useCountCharacterExcludeNewLine = (targetCharacter: string) => {
  const [excludeNewLineCharacterCount, setExcludeNewLineCharacterCount] =
    useState<number>(0);

  useEffect(() => {
    const excludedNewLineSegmentedTargetCharacterList = [
      ...dividSegmentTargetCharacter(targetCharacter),
    ].filter((data) => data.segment !== '\n');

    setExcludeNewLineCharacterCount(
      excludedNewLineSegmentedTargetCharacterList.length,
    );
  }, [targetCharacter]);

  return { excludeNewLineCharacterCount };
};
