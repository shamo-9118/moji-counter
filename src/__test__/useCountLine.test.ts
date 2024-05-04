import { renderHook } from '@testing-library/react';
import { useCountLine } from '../hooks';

describe('改行コードを省いて文字数を数える処理のテスト', () => {
  it('初期は0を表示', () => {
    const { result } = renderHook(() => useCountLine(''));

    expect(result.current.excludeNewLineCharacterCount).toBe(0);
  });

  it('文字のある行数をカウント', () => {
    const { result } = renderHook(() =>
      useCountLine('丸本はよく\n丸木と\n間違えられます🥺'),
    );

    expect(result.current.excludeNewLineCharacterCount).toBe(3);
  });

  it('文字のない行はカウントしない', () => {
    const { result } = renderHook(() =>
      useCountLine('丸本はよく\n丸木と\n間違えられます🥺\n'),
    );

    expect(result.current.excludeNewLineCharacterCount).toBe(3);
  });
});
