import React from 'react';
import { VscClose } from 'react-icons/vsc';
import { IconButton, H3 } from 'uikit';
import { Color } from 'uikit/constants';
import { SidepanelContainer, Header, Content } from './styled';

type Props = {
  title: string;
  onClose: () => void;
  children: JSX.Element;
}

export function Sidepanel(props: Props): JSX.Element {
  const {
    title,
    children,
    onClose,
  } = props;

  return (
    <SidepanelContainer>
      <Header>
        <H3>{title}</H3>
        <IconButton onClick={onClose}>
          <VscClose color={Color.CLEAR} size={16} />
        </IconButton>
      </Header>
      <Content>{children}</Content>
    </SidepanelContainer>
  );
}
