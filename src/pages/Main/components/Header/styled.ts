import styled from 'styled-components';
import { SpacingGap, Color } from 'uikit/constants';

export const HeaderContainer = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${SpacingGap.S2};
  border-bottom: 1px solid ${Color.PRIMARY};
`;

export const Toolbar = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-columns: auto auto;
  grid-auto-flow: column;
`;
