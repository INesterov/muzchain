import styled from 'styled-components';
import { Color } from 'uikit/constants';
import CanvasGridImg from './assets/canvas_grid.svg';

export const RackWrap = styled.div`
  flex: 1;
  background-color: ${Color.GHOST};
  cursor: pointer;
  background-image: url(${CanvasGridImg});
  background-size: 25px;
  background-repeat: repeat;
  background-position: 0 0;
`;
