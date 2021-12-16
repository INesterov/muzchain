import React from 'react';
import { openModal } from 'store/modal';
import {  setActiveModule } from 'store/modules';
import { ModalsType } from 'constants/modals';
import { Module as TModule } from 'types/Module.types';
import { Module } from '../Module';

type Props = {
  module: TModule;
  toggleInput: (id: string, isEnable: any) => void;
}

export function OscModule(props: Props):JSX.Element {
  const { module, toggleInput } = props;
  const { position, isEnabled, type,  name} = module;
  
  const openSettings = React.useCallback(
    () => {
      openModal(ModalsType.OSC_SETTINGS);
      setActiveModule(module.id);
    },
    [],
  );

  return (
    <Module
      id={module.id}
      position={position}
      isEbabled={isEnabled}
      iconPath="M11.8 9L10 3H9L7.158 9.64 5.99 4.69h-.97L3.85 9H1v.99h3.23l.49-.37.74-2.7L6.59 12h1.03l1.87-7.04 1.46 4.68.48.36H15V9h-3.2z"
      type={type}
      name={name}
      toggleInput={toggleInput}
      openSettings={openSettings}
    />
  );
}
