import { useCountCharacter } from '../hooks';

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

  const {
    targetCharacterCount,
    encodedCharBytes,
    excludeNewLineCharacterCount,
    excludeNewLineAndBlankCharacterCount,
    targetLineCount,
  } = useCountCharacter(targetCharacter);

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
                {targetCharacterCount.toLocaleString()}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>文字数（改行なし）</Table.Th>
              <Table.Td style={{ textAlign: 'end' }}>
                {excludeNewLineCharacterCount.toLocaleString()}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>文字数（改行なし・空白なし）</Table.Th>
              <Table.Td style={{ textAlign: 'end' }}>
                {excludeNewLineAndBlankCharacterCount.toLocaleString()}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>バイト数（UTF-8）</Table.Th>
              <Table.Td style={{ textAlign: 'end' }}>
                {encodedCharBytes.toLocaleString()}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th>行数</Table.Th>
              <Table.Td style={{ textAlign: 'end' }}>
                {targetLineCount.toLocaleString()}
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </SimpleGrid>
    </Container>
  );
};
