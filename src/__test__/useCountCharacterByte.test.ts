import { renderHook } from '@testing-library/react';
import { useCountCharacterByte } from '../hooks';

test('', () => {
  const { result } = renderHook(() => useCountCharacterByte(''));

  expect(result.current.encodedCharBytes).toBe(0);
});
