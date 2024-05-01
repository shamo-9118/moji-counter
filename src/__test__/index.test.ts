import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import { useCountCharacter } from '../hooks/useCountCharacter';

it('レンダリングされた時は0が表示出力', () => {
  const { result } = renderHook(() => useCountCharacter());

  expect(result.current).toBe(0);
});

it('レンダリングされた時は0が表示出力', () => {
  const { result } = renderHook(() => useCountCharacter());

  expect(result.current).toBe(0);
});
