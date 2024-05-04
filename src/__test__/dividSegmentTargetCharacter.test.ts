import '@testing-library/jest-dom';
import { dividSegmentTargetCharacter } from '../utils';

describe('文字数カウント処理のテスト', () => {
  it('レンダリングされた時は0が表示出力', () => {
    expect(dividSegmentTargetCharacter('')).toEqual([]);
  });

  it('改行コード・スペース・マルチバイトの文字なんでも１文字としてカウント', () => {
    const expectedList = [
      { segment: '丸', index: 0, input: '丸 🥺\n' },
      { segment: ' ', index: 1, input: '丸 🥺\n' },
      { segment: '🥺', index: 2, input: '丸 🥺\n' },
      { segment: '\n', index: 4, input: '丸 🥺\n' },
    ];

    expect(dividSegmentTargetCharacter('丸 🥺\n')).toEqual(expectedList);
  });
});
