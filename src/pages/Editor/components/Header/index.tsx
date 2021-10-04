import React from 'react';
import { Logo } from 'components/Logo';
import { VscDebugStart, VscDebugStop } from 'react-icons/vsc';
import {
  IconButton,
} from 'uikit';
import { Color } from 'uikit/constants';
import { HeaderWrap } from './styled';

type Props = {
  play: () => void;
  stop: () => void;
  isPlayed: boolean;
}

export function Header(props: Props): JSX.Element {
  const { play, stop, isPlayed } = props;

  return (
    <HeaderWrap>
      <Logo />
      <IconButton>
        {isPlayed ? (
          <VscDebugStop onClick={stop} size={24} color={Color.STOP} />
        ) : (
          <VscDebugStart onClick={play} size={24} color={Color.PRIMARY} />
        )}
      </IconButton>
    </HeaderWrap>
  );
}
