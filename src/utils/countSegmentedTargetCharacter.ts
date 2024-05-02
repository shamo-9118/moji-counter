export const countSegmentedTargetCharacter = (
  targetCharacter: string,
): number => {
  // 改行コード・空白・マルチバイト文字を１文字としてカウント
  const segmenter = new Intl.Segmenter();
  const segmentedTargetCharacter = Array.from(
    segmenter.segment(targetCharacter),
  );

  return segmentedTargetCharacter.length;
};
