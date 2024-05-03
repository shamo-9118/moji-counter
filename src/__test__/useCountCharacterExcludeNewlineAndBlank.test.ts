import { renderHook } from '@testing-library/react';
import { useCountCharacterExcludeNewlineAndBlank } from '../hooks';

describe('空白と空行を除いて文字数をカウント', () => {
  it('初期は0を表示', () => {
    const { result } = renderHook(() =>
      useCountCharacterExcludeNewlineAndBlank(''),
    );

    expect(result.current.excludeNewLineAndBlankCharacterCount).toBe(0);
  });

  it('文字のみカウント', () => {
    const { result } = renderHook(() =>
      useCountCharacterExcludeNewlineAndBlank('丸 🥺\n'),
    );

    expect(result.current.excludeNewLineAndBlankCharacterCount).toBe(2);
  });
});
