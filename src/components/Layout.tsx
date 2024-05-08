import { Header } from './Header';
import { Footer } from './Footer';

import { AppShell, Container, Title } from '@mantine/core';

import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <AppShell header={{ height: 60 }} padding='md'>
      <AppShell.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        <Header />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};
