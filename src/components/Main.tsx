import {
  useCountCharacter,
  useCountCharacterExcludeNewLine,
  useCountCharacterExcludeNewLineAndBlank,
  useCountLine,
  useCountCharacterByte,
} from '../hooks';

import { insertComma } from '@/utils';

import {
  Container,
  FocusTrap,
  Textarea,
  Table,
  SimpleGrid,
} from '@mantine/core';
import { useState } from 'react';

export const Main = () => {
  const [targetCharacter, setTargetCharacter] = useState<string>('');

  const handleUserInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTargetCharacter(event.target.value);
  };

  const countCharacterByte =
    useCountCharacterByte(targetCharacter).encodedCharBytes;

  const countCharacter =
    useCountCharacter(targetCharacter).targetCharacterCount;

  const countCharacterExcludeNewLine =
    useCountCharacterExcludeNewLine(
      targetCharacter,
    ).excludeNewLineCharacterCount;

  const countCharacterExcludeNewLineAndBlank =
    useCountCharacterExcludeNewLineAndBlank(
      targetCharacter,
    ).excludeNewLineAndBlankCharacterCount;

  const countLine = useCountLine(targetCharacter).targetLineCount;
  return (
    <Container>
      <SimpleGrid cols={2}>
        <FocusTrap>
          <Textarea
            placeholder='こちらにカウントしたい文字を入れてください'
            onChange={(event) => {
              handleUserInput(event);
            }}
            rows={14}
          />
        </FocusTrap>
        <Table highlightOnHover>
          <Table.Tbody>
            <Table.Tr>
              <Table.Th>文字数</Table.Th>
              <Table.Td style={{ textAlign: 'end' }}>
                {countCharacter.toLocaleString()}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>文字数（改行なし）</Table.Th>
              <Table.Td style={{ textAlign: 'end' }}>
                {countCharacterExcludeNewLine.toLocaleString()}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>文字数（改行なし・空白なし）</Table.Th>
              <Table.Td style={{ textAlign: 'end' }}>
                {countCharacterExcludeNewLineAndBlank.toLocaleString()}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>バイト数（UTF-8）</Table.Th>
              <Table.Td style={{ textAlign: 'end' }}>
                {countCharacterByte.toLocaleString()}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>行数</Table.Th>
              <Table.Td style={{ textAlign: 'end' }}>
                {countLine.toLocaleString()}
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </SimpleGrid>
    </Container>
  );
};
