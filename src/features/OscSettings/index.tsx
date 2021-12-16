import React from 'react';
import Wad from 'web-audio-daw';
import { useStore } from 'effector-react';
import { closeModal } from 'store/modal';
import { resetActiveModule, modulesStore } from 'store/modules';
import { Sidepanel } from 'uikit';
import { Analyser } from 'features/Analyser';

export function OscSettings(): JSX.Element {
  const moduleState = useStore(modulesStore);
  const activeModuleId = moduleState.activeModuleId as string;
  const input = window.inputs[activeModuleId] as Wad;

  const closeSettings = React.useCallback(
    () => {
       closeModal();
       resetActiveModule();
    },
    [],
  );

  return (
    <Sidepanel title='OSC' onClose={closeSettings}>
      <Analyser input={input} />
    </Sidepanel>
  );
}
