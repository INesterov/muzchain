import React from 'react';
import Wad from 'web-audio-daw';
import { useStore } from 'effector-react';
import { closeModal } from 'store/modal';
import { resetActiveModule, modulesStore } from 'store/modules';
import { Sidepanel } from 'uikit';
import { Analyser } from 'features/Analyser';
import { SourceSelect } from './components/SourceSelect';
import { Volume } from './components/Volume';
import { Panning } from './components/Panning';
import { Pitch } from './components/Pitch';
import { Detune } from './components/Detune';
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
        <SourceSelect />
      </SettingsBlock>
      <SettingsBlock>
        <Volume />
      </SettingsBlock>
      <SettingsBlock>
        <Panning />
      </SettingsBlock>
      <SettingsBlock>
        <Pitch />
      </SettingsBlock>
      <SettingsBlock>
        <Detune />
      </SettingsBlock>
    </Sidepanel>
  );
}
