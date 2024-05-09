import { renderHook } from '@testing-library/react';
import { useCountCharacterByte } from '../hooks';

describe('文字数のバイトを計算する処理のテスト', () => {
  test('初期表示', () => {
    const { result } = renderHook(() => useCountCharacterByte(''));

    expect(result.current.encodedCharBytes).toBe(0);
  });

  test('半角英字', () => {
    const { result } = renderHook(() => useCountCharacterByte('ee'));

    expect(result.current.encodedCharBytes).toBe(2);
  });

  test('全角英字', () => {
    const { result } = renderHook(() => useCountCharacterByte('ｌｌｌ'));

    expect(result.current.encodedCharBytes).toBe(9);
  });

  test('日本語', () => {
    const { result } = renderHook(() => useCountCharacterByte('丸本将真'));

    expect(result.current.encodedCharBytes).toBe(12);
  });

  test('特殊文字', () => {
    const { result } = renderHook(() => useCountCharacterByte('🤩🏠👪'));

    expect(result.current.encodedCharBytes).toBe(12);
  });

  test('いろんな文字混合', () => {
    const { result } = renderHook(() =>
      useCountCharacterByte('🤩まる丸maru M\n'),
    );

    expect(result.current.encodedCharBytes).toBe(20);
  });
});
