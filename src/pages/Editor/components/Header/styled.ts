import styled from 'styled-components';
import { Color, SpacingGap } from 'uikit/constants';
import { HEADER_HEIGHT } from './constants';

export const HeaderWrap = styled.div`
  height: ${HEADER_HEIGHT};
  border-bottom: 1px solid ${Color.DEVIDER};
  display: flex;
  align-items: center;
  padding: 0 ${SpacingGap.S5};
`;
