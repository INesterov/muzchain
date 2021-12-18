import React from 'react';
import Wad from 'web-audio-daw';
import { useStore } from 'effector-react';
import { modulesStore, updateModuleSettings } from 'store/modules';
import { Slider } from 'uikit';


export function Volume(): JSX.Element {
  const moduleState = useStore(modulesStore);
  const activeModuleId = moduleState.activeModuleId as string;
  const input = window.inputs[activeModuleId] as Wad;
  const module = moduleState.entities[activeModuleId];
  const settings = module?.settings ?? {};

  const updateVolume = React.useCallback(
    (newValue: number) => {
      const newSettings = { ...settings, volume: newValue };

      input?.setVolume(newValue / 100);

      updateModuleSettings(newSettings);
    },
    [input, settings],
  );

  return (
    <Slider
      min={0}
      max={100}
      value={settings?.volume}
      onChange={updateVolume}
      label='Volume'
    />
  );
}
