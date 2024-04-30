import { Inter } from "next/font/google";

import { Textarea, Container, SimpleGrid, Table, Text } from '@mantine/core'
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const [countTargetCharacter, setCountTargetCharacter] = useState<string>('')

  const handleUserInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCountTargetCharacter(event.target.value)
  }

  return (
    <main>
      <Container>
        <SimpleGrid cols={2}>
          <Textarea onChange={(event)=> {handleUserInput(event)}}/>
          <Table highlightOnHover>
            <Table.Tbody>
              <Table.Tr>
                <Table.Th>文字数</Table.Th>
                <Table.Td>
                  100
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Th>文字数（改行なし）</Table.Th>
                <Table.Td>
                  100
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Th>文字数（改行なし、空白）</Table.Th>
                <Table.Td>
                  100
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Th>バイト数（UTF-8）</Table.Th>
                <Table.Td>
                  100
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Th>バイト数（UTF-16）</Table.Th>
                <Table.Td>
                  100
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Th>バイト数（Shift-JIS）</Table.Th>
                <Table.Td>
                  100
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Th>バイト数（EUC-JP）</Table.Th>
                <Table.Td>
                  100
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Th>行数</Table.Th>
                <Table.Td>
                  100
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </SimpleGrid>
      </Container>
    </main>
  );
}
