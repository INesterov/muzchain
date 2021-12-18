import React from 'react';
import Wad from 'web-audio-daw';
import { useStore } from 'effector-react';
import { modulesStore, updateModuleSettings } from 'store/modules';
import { Knob } from 'uikit';


export function PanningKnob(): JSX.Element {
  const moduleState = useStore(modulesStore);
  const activeModuleId = moduleState.activeModuleId as string;
  const input = window.inputs[activeModuleId] as Wad;
  const module = moduleState.entities[activeModuleId];
  const settings = module?.settings ?? {};

  const updatePanning = React.useCallback(
    (newValue: number) => {
      const newSettings = { ...settings, panning: newValue / 1000 };
      // debugger;
      // input.setVolume(newValue);

      updateModuleSettings(newSettings);
    },
    [input, settings],
  );

  return (
    <Knob
      value={settings?.panning ?? 0}
      min={-98}
      max={100}
      step={1}
      label='Panning'
      onChange={updatePanning}
      />
  );
}
