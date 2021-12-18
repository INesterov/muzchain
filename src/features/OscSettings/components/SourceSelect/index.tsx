import React from 'react';
import Wad from 'web-audio-daw';
import { useStore } from 'effector-react';
import { modulesStore, updateModuleSettings } from 'store/modules';
import { Select } from 'uikit';
import { Option } from 'types/Common.types';

const options: Option[] = [
  { value: 'sine', label: 'Sine' },
  { value: 'square', label: 'Square' },
  { value: 'triangle', label: 'Triangle' },
  { value: 'noise', label: 'Noise' },
];

export function SourceSelect(): JSX.Element {
  const moduleState = useStore(modulesStore);
  const activeModuleId = moduleState.activeModuleId as string;
  const input = window.inputs[activeModuleId] as Wad;
  const module = moduleState.entities[activeModuleId];
  const settings = module?.settings ?? {};

  const updateSource = React.useCallback(
    (newValue: Option) => {
      debugger;
      const newSettings = { ...settings, source: newValue.value };

      input.soundSource.type = newValue.value;

      updateModuleSettings(newSettings);
    },
    [input, settings],
  );

  return (
    <Select
      options={options}
      classNamePrefix="select"
      value={{
        value: module?.settings?.source,
        label: module?.settings?.source,
      }}
      onChange={updateSource as any}
    />
  );
}
