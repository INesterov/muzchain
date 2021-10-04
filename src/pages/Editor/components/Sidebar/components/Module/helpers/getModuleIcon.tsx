import React from 'react';
import { VscPulse } from 'react-icons/vsc';
import { ModuleName } from 'types/Module.types';

export const getModuleIcon = (name: ModuleName): JSX.Element => {
  switch (name) {
    case ModuleName.OSC: {
      return (
        <VscPulse size={36} />
      );
    }

    default: {
      return (
        <VscPulse />
      );
    }
  }
};
