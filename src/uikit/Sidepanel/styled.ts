import styled from 'styled-components';
import { Color, SpacingGap } from '../constants';

export const SidepanelContainer = styled.aside`
  position: fixed;
  right: 0;
  top: 72px;
  width: 320px;
  background: ${Color.MAIN};
  height: calc(100vh - 73px);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${SpacingGap.S4};
  border-bottom: 1px solid #505660;
`;

export const Content = styled.div`
  padding: ${SpacingGap.S4};
`;

