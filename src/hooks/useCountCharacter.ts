import { useState } from 'react';

import type { UseCountCharacter } from '../types/UseCountCharacter';

export const useCountCharacter = (
  targetCharacter?: string,
): UseCountCharacter => {
  const [targetCharacterCount, setTargetCharacterCount] = useState<number>(0);

  const countSegmentedTargetCharacter = (
    targetCharacter?: string,
  ): number | undefined => {
    if (!targetCharacter) return;

    // 改行コード・空白・マルチバイト文字を１文字としてカウント
    const segmenter = new Intl.Segmenter();
    const segmentedTargetCharacter = Array.from(
      segmenter.segment(targetCharacter),
    );

    setTargetCharacterCount([...segmentedTargetCharacter].length);
  };

  return { targetCharacterCount, countSegmentedTargetCharacter };
};
