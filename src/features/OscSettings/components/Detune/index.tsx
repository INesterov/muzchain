import React from 'react';
import Wad from 'web-audio-daw';
import { useStore } from 'effector-react';
import { modulesStore, updateModuleSettings } from 'store/modules';
import { Slider } from 'uikit';


export function Detune(): JSX.Element {
  const moduleState = useStore(modulesStore);
  const activeModuleId = moduleState.activeModuleId as string;
  const input = window.inputs[activeModuleId] as Wad;
  const module = moduleState.entities[activeModuleId];
  const settings = module?.settings ?? {};

  const updateDetune = React.useCallback(
    (newValue: number) => {
      const newSettings = { ...settings, detune: newValue };

      input?.setDetune(newValue);

      updateModuleSettings(newSettings);
    },
    [input, settings],
  );

  return (
    <Slider
      min={0}
      max={1000}
      step={10}
      value={settings?.detune}
      onChange={updateDetune}
      label='Detune'
    />
  );
}
