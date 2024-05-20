import { useEffect, useState } from 'react';
import {
  dividSegmentTargetCharacter,
  convertArraySeparatedNewlineCharacters,
  encodeCharacter,
} from '../utils';

type CountCharacter = {
  targetCharacterCount: number;
  encodedCharBytes: number;
  excludeNewLineCharacterCount: number;
  excludeNewLineAndBlankCharacterCount: number;
  targetLineCount: number;
};

export const useCountCharacter = (targetCharacter: string): CountCharacter => {
  const [targetCharacterCount, setTargetCharacterCount] = useState<number>(0);
  const [encodedCharBytes, setEncodedCharBytes] = useState<number>(0);
  const [excludeNewLineCharacterCount, setExcludeNewLineCharacterCount] =
    useState<number>(0);
  const [
    excludeNewLineAndBlankCharacterCount,
    setExcludeNewLineAndBlankCharacterCount,
  ] = useState<number>(0);
  const [targetLineCount, setTargetLineCount] = useState<number>(0);

  useEffect(() => {
    const dividSegmentedTargetCharacter =
      dividSegmentTargetCharacter(targetCharacter);
    setTargetCharacterCount(dividSegmentedTargetCharacter.length);

    const excludedNewLineSegmentedTargetCharacterList = [
      ...dividSegmentedTargetCharacter,
    ].filter((data) => data.segment !== '\n');
    setExcludeNewLineCharacterCount(
      excludedNewLineSegmentedTargetCharacterList.length,
    );

    const segmentedTextWithNewLineAndWhitespaceRemoved = [
      ...dividSegmentedTargetCharacter,
    ].filter((segmentedText) => {
      return (
        segmentedText.segment !== '\n' &&
        segmentedText.segment !== ' ' &&
        segmentedText.segment !== '\u3000'
      );
    });
    setExcludeNewLineAndBlankCharacterCount(
      segmentedTextWithNewLineAndWhitespaceRemoved.length,
    );

    setEncodedCharBytes(encodeCharacter(targetCharacter).length);

    setTargetLineCount(
      [...convertArraySeparatedNewlineCharacters(targetCharacter)].length,
    );
  }, [targetCharacter]);

  return {
    targetCharacterCount,
    encodedCharBytes,
    excludeNewLineCharacterCount,
    excludeNewLineAndBlankCharacterCount,
    targetLineCount,
  };
};
