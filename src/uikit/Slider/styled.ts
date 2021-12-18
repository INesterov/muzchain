import styled from 'styled-components';
import { Color, SpacingGap } from '../constants';

export const SlicerContainer = styled.div`
  width: 100%;

  & div > .rc-slider-rail {
    background-color: ${Color.CLEAR};
  }

  & div > .rc-slider-track {
    background-color: ${Color.PRIMARY};
  }

  & div > .rc-slider-handle {
    border: 1px solid ${Color.PRIMARY};
    background-color: ${Color.CLEAR};
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${SpacingGap.S2};
`;
