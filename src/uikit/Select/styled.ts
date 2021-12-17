import styled from 'styled-components';
import { Color } from '../constants';

export const SelectContainer = styled.div`
  & div > .select__control {
    background: transparent;
    border: 1px solid ${Color.PRIMARY};
    outline: transparent!important;
    cursor: pointer;
  }

  & div > .select__single-value {
    color: ${Color.PRIMARY};
  }

  & div > .select__indicator-separator {
    background-color: ${Color.PRIMARY};
  }

  & div > .select__indicator {
    color: ${Color.PRIMARY};
  }

  & div > .select__menu {
    background-color: ${Color.MAIN};
    border: 1px solid ${Color.FORM};
  }

  & div > .select__option {
    & .--is-selected {
      background-color: ${Color.SECONDARY};
    }
    &:hover {
      background-color: ${Color.SECONDARY};
    }
  }

  & div > .select__option--is-selected {
    background-color: ${Color.SECONDARY};
  }
`;
