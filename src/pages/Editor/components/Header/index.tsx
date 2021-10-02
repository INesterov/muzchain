import React from 'react';
import { Logo } from 'components/Logo';
import { HeaderWrap } from './styled';

export function Header(): JSX.Element {
  return (
    <HeaderWrap>
      <Logo />
    </HeaderWrap>
  );
}
