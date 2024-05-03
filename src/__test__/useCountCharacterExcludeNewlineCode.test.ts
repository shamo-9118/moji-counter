import { renderHook } from '@testing-library/react';
import { useCountCharacterExcludeNewlineCode } from '../hooks';

describe('改行コードを省いて文字数を数える処理のテスト', () => {
  it('初期は0を表示', () => {
    const { result } = renderHook(() =>
      useCountCharacterExcludeNewlineCode(''),
    );

    expect(result.current.excludeNewLineCodeCharacterCount).toBe(0);
  });

  it('改行コードを省いて文字数をカウント', () => {
    const { result } = renderHook(() =>
      useCountCharacterExcludeNewlineCode('丸 🥺\n'),
    );

    expect(result.current.excludeNewLineCodeCharacterCount).toBe(3);
  });
});
