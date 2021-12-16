import React from 'react';
import { useStore } from 'effector-react';
import { ModalsType } from 'constants/modals';
import { modalStore } from 'store/modal';
import { OscSettings } from '../OscSettings';

export function ModalManager(): JSX.Element {
  const modalConfig = useStore(modalStore);
  const { modalType } = modalConfig;

  switch (modalType) {
    case ModalsType.OSC_SETTINGS: {
      return (
        <OscSettings />
      );
    }

    default: {
      return <></>;
    }
  }
}
