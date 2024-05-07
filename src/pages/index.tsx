import {
  useCountCharacter,
  useCountCharacterExcludeNewLine,
  useCountCharacterExcludeNewLineAndBlank,
  useCountLine,
} from '@/hooks';

import { Textarea, Container, SimpleGrid, Table } from '@mantine/core';
import { useState } from 'react';

export default function Home() {
  const [targetCharacter, setTargetCharacter] = useState<string>('');

  const handleUserInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTargetCharacter(event.target.value);
  };

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
    <main>
      <Container>
        <SimpleGrid cols={2}>
          <Textarea
            onChange={(event) => {
              handleUserInput(event);
            }}
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
                <Table.Td>100</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Th>バイト数（UTF-16）</Table.Th>
                <Table.Td>100</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Th>バイト数（Shift-JIS）</Table.Th>
                <Table.Td>100</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Th>バイト数（EUC-JP）</Table.Th>
                <Table.Td>100</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Th>行数</Table.Th>
                <Table.Td>{countLine}</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </SimpleGrid>
      </Container>
    </main>
  );
}
