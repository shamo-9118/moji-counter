import '@testing-library/jest-dom'

it('文字数をカウントする', () => {
  const targetCharacter = '丸本はよく丸木と間違えられます🥺';
  const expectedTargetCharacterCount = 16;

  // lengthはコードユニットを数えるためダメらしい、、、
  const _targetCharacterCount = targetCharacter.length

  // 配列にしてlengthにするのもダメなよう、、
  const __targetCharacterCount = targetCharacter.split('').length

  expect(targetCharacterCount).toBe(expectedTargetCharacterCount)
})