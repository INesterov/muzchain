import React from 'react';
import { StyledButton } from './styled';

type Props = {
  children: JSX.Element;
  onClick?: () => void;
}

export function IconButton(props: Props): JSX.Element {
  const { children } = props;

  return (
    <StyledButton>{children}</StyledButton>
  );
}
