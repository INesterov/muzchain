import styled from 'styled-components';
import { Label } from 'uikit';
import { SpacingGap } from '../constants';

export const KnobWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLabel = styled(Label)`
  margin-top: ${SpacingGap.S2};
`;
