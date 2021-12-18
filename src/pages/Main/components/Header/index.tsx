import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { startPlaying, stopPlaying } from 'store/editor/slice';

// Types
import { RootState } from 'store';

// Components
import { VscDebugStart, VscDebugStop, VscAdd } from 'react-icons/vsc';
import { IconButton } from 'uikit';
import { Logo } from './components/Logo';

// Styled
import { HeaderContainer, Toolbar } from './styled';

export function Header(): JSX.Element {
  const isPlaying = useSelector((state: RootState) => state.editor.isPlaying);
  const dispatch = useDispatch();

  const handleOnStart = React.useCallback(() => {
    dispatch(startPlaying());
  }, []);

  const handleOnStop = React.useCallback(() => {
    dispatch(stopPlaying());
  }, []);

  return (
    <HeaderContainer>
      <Logo />
      <Toolbar>
        <IconButton>
          <VscAdd size={24} />
        </IconButton>
        <IconButton>
          {isPlaying ? (
            <VscDebugStop onClick={handleOnStop} size={24} />
          ) : (
            <VscDebugStart onClick={handleOnStart} size={24} />
          )}
        </IconButton>
      </Toolbar>
    </HeaderContainer>
  );
}
