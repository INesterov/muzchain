import React from 'react';

// Styled
import { StyledButton } from './styled';

type Props = {
  children: JSX.Element;
  onClick?: () => void;
}

export function IconButton(props: Props): JSX.Element {
  const { children, onClick } = props;

  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}
