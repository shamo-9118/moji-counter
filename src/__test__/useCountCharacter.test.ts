import { renderHook } from '@testing-library/react';
import { useCountCharacter } from '../hooks/useCountCharacter';

it('useCountCharacterの初期動作テスト', () => {
  const { result } = renderHook(() => useCountCharacter(''));

  expect(result.current.targetCharacterCount).toBe(0);
});

it('useCountCharacterの文字数検証時のテスト', () => {
  const { result } = renderHook(() => useCountCharacter('丸 🥺\n'));

  expect(result.current.targetCharacterCount).toBe(4);
});
