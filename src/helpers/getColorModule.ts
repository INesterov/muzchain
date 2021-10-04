import { ModuleType } from 'types/Module.types';
import { Color } from 'uikit/constants';

export const getColorModule = (type: ModuleType): Color => {
  switch (type) {
    case ModuleType.INPUT: {
      return Color.PRIMARY;
    }

    case ModuleType.OUTPUT: {
      return Color.SECONDARY;
    }

    default: {
      return Color.CLEAR;
    }
  }
};
