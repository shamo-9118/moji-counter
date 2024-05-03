import { renderHook } from '@testing-library/react';
import { useCountCharacterExcludeNewLine } from '../hooks';

describe('改行コードを省いて文字数を数える処理のテスト', () => {
  it('初期は0を表示', () => {
    const { result } = renderHook(() => useCountCharacterExcludeNewLine(''));

    expect(result.current.excludeNewLineCharacterCount).toBe(0);
  });

  it('改行コードを省いて文字数をカウント', () => {
    const { result } = renderHook(() =>
      useCountCharacterExcludeNewLine('丸 🥺\n'),
    );

    expect(result.current.excludeNewLineCharacterCount).toBe(3);
  });
});
