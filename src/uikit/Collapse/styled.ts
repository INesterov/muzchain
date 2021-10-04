import styled from 'styled-components';
import { SpacingGap, Color } from '../constants';

export const CollapseWrap = styled.div`
  border-bottom: 1px solid ${Color.DEVIDER};
`;

export const CollapseTitle = styled.p`
  font-weight: 100;
`;

export const CollapseHeader = styled.div`
  padding: ${SpacingGap.S4} ${SpacingGap.S3};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CollapseContent = styled.div`
  background: ${Color.FORM};
`;
