import React from 'react';
import { Logo } from 'components/Logo';
import { VscTriangleRight } from 'react-icons/vsc';
import {
  IconButton,
} from 'uikit';
import { Color } from 'uikit/constants';
import { HeaderWrap } from './styled';

export function Header(): JSX.Element {
  return (
    <HeaderWrap>
      <Logo />
      <IconButton>
        <VscTriangleRight size={24} color={Color.PRIMARY} />
      </IconButton>
    </HeaderWrap>
  );
}
