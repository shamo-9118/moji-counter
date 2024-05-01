import '@testing-library/jest-dom'

it('マルチバイトの文字も空白も改行コードも１文字としてカウントする', () => {
  const targetCharacter = '丸本はよく丸木と 間違えられます🥺\n';
  const expectedTargetCharacterCount = 18;

  // lengthはコードユニットを数えるためダメらしい、、、
  const _targetCharacterCount = targetCharacter.length

  // 配列にしてlengthにするのもダメなよう、、
  const __targetCharacterCount = targetCharacter.split('').length

  const segmenter = new Intl.Segmenter("ja", {granularity: "grapheme"});
  const targetCharacterCount = Array.from(segmenter.segment(targetCharacter))

  expect([...targetCharacterCount].length).toBe(expectedTargetCharacterCount)
})