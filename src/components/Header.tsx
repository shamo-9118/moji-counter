import { Container, Title } from '@mantine/core';

export const Header = () => {
  return (
    <Container style={{ width: '100%' }}>
      <Title order={1} style={{ fontWeight: '200' }}>
        Moji_Counter
      </Title>
    </Container>
  );
};
