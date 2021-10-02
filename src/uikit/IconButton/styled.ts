import styled from 'styled-components';
import { SpacingGap } from '../constants';

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  outline: transparent;
  padding: ${SpacingGap.S2};
  display: flex;
  align-items: center;
  cursor: pointer;
`;
