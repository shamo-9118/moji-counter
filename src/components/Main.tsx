import {
  useCountCharacter,
  useCountCharacterExcludeNewLine,
  useCountCharacterExcludeNewLineAndBlank,
  useCountLine,
  useCountCharacterByte,
} from '../hooks';

import { Textarea, Container, SimpleGrid, Table } from '@mantine/core';
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
        <Textarea
          onChange={(event) => {
            handleUserInput(event);
          }}
          rows={14}
        />
        <Table highlightOnHover>
          <Table.Tbody>
            <Table.Tr>
              <Table.Th>文字数</Table.Th>
              <Table.Td>{countCharacter}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>文字数（改行なし）</Table.Th>
              <Table.Td>{countCharacterExcludeNewLine}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>文字数（改行なし、空白）</Table.Th>
              <Table.Td>{countCharacterExcludeNewLineAndBlank}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>バイト数（UTF-8）</Table.Th>
              <Table.Td>{countCharacterByte}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>行数</Table.Th>
              <Table.Td>{countLine}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </SimpleGrid>
    </Container>
  );
};
