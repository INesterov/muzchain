import styled from 'styled-components';
import { ModuleType } from 'types/Module.types';
import { Color, SpacingGap } from 'uikit/constants';
import { getColorModule } from 'helpers/getColorModule';

export const ModuleIcon = styled.div`
  border: 1px solid ${Color.CLEAR};
  display: flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: ${SpacingGap.S2};
`;

type ModuleProps = {
  type: ModuleType;
}

export const ModuleWrap = styled.div<ModuleProps>`
  display: flex;
  flex-direction: column;
  width: 68px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    ${ModuleIcon} {
      border: 1px solid ${({ type }) => getColorModule(type)};

      > svg {
        fill: ${({ type }) => getColorModule(type)}
      }
    }
  }
`;

export const ModuleTitle = styled.p`
  font-size: 14px;
  font-weight: 100;
`;
