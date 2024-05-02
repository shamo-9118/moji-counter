import '@testing-library/jest-dom';
import { countSegmentedTargetCharacter } from '../utils/countSegmentedTargetCharacter';

describe('文字数カウント処理のテスト', () => {
  it('レンダリングされた時は0が表示出力', () => {
    expect(countSegmentedTargetCharacter('')).toBe(0);
  });

  it('改行コード・スペース・マルチバイトの文字なんでも１文字としてカウント', () => {
    expect(
      countSegmentedTargetCharacter('丸本はよく丸 木と間違えられます🥺\n'),
    ).toBe(18);
  });
});
