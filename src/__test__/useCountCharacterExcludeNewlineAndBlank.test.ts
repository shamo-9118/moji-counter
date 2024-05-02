import { renderHook } from '@testing-library/react';

it('初期は0を表示', () => {
  const { result } = renderHook(() => {
    useCountCharacterExcludeNewlineAndBlank('');
  });
  expect(result.current.excludeNewLineCodeAndBlankCharacterCount).toBe(0);
});

it('文字のみカウント', () => {
  const { result } = renderHook(() => {
    useCountCharacterExcludeNewlineAndBlank('丸 🥺\n');
  });
  expect(result.current.excludeNewLineCodeAndBlankCharacterCount).toBe(2);
});
