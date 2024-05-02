import { renderHook } from '@testing-library/react';
import { useCountCharacterExcludeNewlineCode } from '../hooks/useCountCharacterExcludeNewlineCode';

it('改行コードを省いて文字数をカウントする処理の初期状態をテスト', () => {
  const { result } = renderHook(() => useCountCharacterExcludeNewlineCode(''));

  expect(result.current.excludeNewLineCodeCharacterCount).toBe(0);
});

it('改行コードを省いて文字数をカウントする処理', () => {
  const { result } = renderHook(() =>
    useCountCharacterExcludeNewlineCode('丸 🥺\n'),
  );

  expect(result.current.excludeNewLineCodeCharacterCount).toBe(3);
});
