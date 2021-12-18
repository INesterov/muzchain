import styled from 'styled-components';
import { SpacingGap, Color } from '../constants';

export const StyledButton = styled.button`
  padding: ${SpacingGap.S2};
  background: transparent;
  border: none;
  outline: aliceblue;
  align-items: center;
  display: flex;
  cursor: pointer;

  & > svg {
    fill: ${Color.PRIMARY};
  }

  &:hover {
    & > svg {
      fill: ${Color.PRIMARY_HOVER};
    }
  }

  &:active {
    & > svg {
      fill: ${Color.PRIMARY_ACTIVE};
    }
  }
`;
