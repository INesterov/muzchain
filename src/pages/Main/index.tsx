import React from 'react';

// Components
import { Header } from './components/Header';

// Styled
import { PageContainer } from './styled';

export function Main(): JSX.Element {
  return (
    <PageContainer>
      <Header />
    </PageContainer>
  );
}
