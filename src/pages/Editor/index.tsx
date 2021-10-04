import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Rack } from './components/Rack';
import { usePlay } from './hooks/usePlay';
import { EditorWrap, Content } from './styled';

export function Editor(): JSX.Element {
  const {
    play,
    stop,
    toggleInput,
    isPlayed,
  } = usePlay();

  return (
    <EditorWrap>
      <Header play={play} stop={stop} isPlayed={isPlayed} />
      <Content>
        <Sidebar />
        <Rack toggleInput={toggleInput} />
      </Content>
    </EditorWrap>
  );
}
