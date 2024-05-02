import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react';

import { useCountCharacter } from '../hooks/useCountCharacter';

describe('文字数カウント処理のテスト', () => {
  it('レンダリングされた時は0が表示出力', () => {
    const { result } = renderHook(() => useCountCharacter());

    expect(result.current.targetCharacterCount).toBe(0);
  });

  it('改行コード・スペース・マルチバイトの文字なんでも１文字としてカウント', () => {
    const targetCharacter = '丸本はよく丸 木と間違えられます🥺\n';

    const { result } = renderHook(() => useCountCharacter());

    act(() => {
      result.current.countSegmentedTargetCharacter(targetCharacter);
    });

    expect(result.current.targetCharacterCount).toBe(18);
  });
});
