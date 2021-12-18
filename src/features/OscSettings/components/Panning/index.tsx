import React from 'react';
import Wad from 'web-audio-daw';
import { useStore } from 'effector-react';
import { modulesStore, updateModuleSettings } from 'store/modules';
import { Slider } from 'uikit';


export function Panning(): JSX.Element {
  const moduleState = useStore(modulesStore);
  const activeModuleId = moduleState.activeModuleId as string;
  const input = window.inputs[activeModuleId] as Wad;
  const module = moduleState.entities[activeModuleId];
  const settings = module?.settings ?? {};

  const updatePanning = React.useCallback(
    (newValue: number) => {
      const newSettings = { ...settings, panning: newValue };

      input?.setPanning(newValue / 100);

      updateModuleSettings(newSettings);
    },
    [input, settings],
  );

  return (
    <Slider
      min={-100}
      max={100}
      startPoint={0}
      value={settings?.panning}
      onChange={updatePanning}
      label='Panning'
    />
  );
}
