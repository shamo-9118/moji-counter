export const dividSegmentTargetCharacter = (
  targetCharacter: string,
): Intl.SegmentData[] => {
  // 改行コード・空白・マルチバイト文字を１文字としてカウント
  const segmenter = new Intl.Segmenter();

  return Array.from(segmenter.segment(targetCharacter));
};
