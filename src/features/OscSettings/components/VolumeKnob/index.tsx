import React from 'react';
import Wad from 'web-audio-daw';
import { useStore } from 'effector-react';
import { modulesStore, updateModuleSettings } from 'store/modules';
import { Knob } from 'uikit';


export function VolumeKnob(): JSX.Element {
  const moduleState = useStore(modulesStore);
  const activeModuleId = moduleState.activeModuleId as string;
  const input = window.inputs[activeModuleId] as Wad;
  const module = moduleState.entities[activeModuleId];
  const settings = module?.settings ?? {};

  const updateVolume = React.useCallback(
    (newValue: number) => {
      const newSettings = { ...settings, volume: newValue };

      input?.setVolume(newValue);

      updateModuleSettings(newSettings);
    },
    [input, settings],
  );

  return (
    <Knob
      value={settings?.volume ?? 0}
      min={0}
      max={100}
      step={1}
      label='Volume'
      onChange={updateVolume}
      />
  );
}
