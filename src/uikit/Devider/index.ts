import styled from 'styled-components';
import { Color, SpacingGap } from '../constants';

export const Devider = styled.span`
  min-height: 36px;
  width: 1px;
  background: ${Color.CLEAR};
  margin: 0 ${SpacingGap.S2};
`;
