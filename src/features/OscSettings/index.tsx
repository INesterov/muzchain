import React from 'react';
import Wad from 'web-audio-daw';
import { useStore } from 'effector-react';
import { closeModal } from 'store/modal';
import { resetActiveModule, modulesStore } from 'store/modules';
import { Sidepanel } from 'uikit';
import { Analyser } from 'features/Analyser';
import { SourceSelect } from './components/SourceSelect';
import { VolumeKnob } from './components/VolumeKnob';
import { PanningKnob } from './components/PanningKnob';
import { SettingsBlock } from './styled';

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
      <SettingsBlock>
        <VolumeKnob />
        <PanningKnob />
      </SettingsBlock>
      <SettingsBlock>
        <SourceSelect />
      </SettingsBlock>
    </Sidepanel>
  );
}
