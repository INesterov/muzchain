import React from 'react';
import { Logo } from 'components/Logo';
import { VscTriangleRight } from 'react-icons/vsc';
import {
  Text,
  Devider,
  IconButton,
} from 'uikit';
import { Color } from 'uikit/constants';
import { HeaderWrap, GeneralTools } from './styled';

export function Header(): JSX.Element {
  return (
    <HeaderWrap>
      <Logo />
      <GeneralTools>
        <Text>00 : 10 : 17</Text>
        <Devider />
        <Text>125.00 BPM</Text>
        <IconButton>
          <VscTriangleRight size={24} color={Color.PRIMARY} />
        </IconButton>
      </GeneralTools>
    </HeaderWrap>
  );
}
