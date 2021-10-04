import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Rack } from './components/Rack';
import { EditorWrap, Content } from './styled';

export function Editor(): JSX.Element {
  return (
    <EditorWrap>
      <Header />
      <Content>
        <Sidebar />
        <Rack />
      </Content>
    </EditorWrap>
  );
}
