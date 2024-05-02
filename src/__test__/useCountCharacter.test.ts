import { renderHook } from '@testing-library/react';
import { useCountCharacter } from '../hooks/useCountCharacter';

describe('全文字数をカウントする処理のテストj ', () => {
  it('初期は0を表示', () => {
    const { result } = renderHook(() => useCountCharacter(''));

    expect(result.current.targetCharacterCount).toBe(0);
  });

  it('全文字数をカウント', () => {
    const { result } = renderHook(() => useCountCharacter('丸 🥺\n'));

    expect(result.current.targetCharacterCount).toBe(4);
  });
});
