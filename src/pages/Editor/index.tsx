import React from 'react';
import { Header } from './components/Header';
import { EditorWrap } from './styled';

export function Editor(): JSX.Element {
  return (
    <EditorWrap>
      <Header />
    </EditorWrap>
  );
}
