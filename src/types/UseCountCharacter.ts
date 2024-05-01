export type UseCountCharacter = {
  targetCharacterCount: number;
  countSegmentedTargetCharacter: (
    targetCharacter?: string,
  ) => number | undefined;
};
