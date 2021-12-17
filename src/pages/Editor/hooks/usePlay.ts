import React from 'react';
import Wad from 'web-audio-daw';
import { ModuleType } from 'types/Module.types';
import { useStoreMap } from 'effector-react';
import { modulesStore } from 'store/modules';

declare global {
  interface Window {
    inputs?: any;
  }
}

window.inputs = {} as Record<string, Wad>;

export const usePlay = () => {
  const [ isPlayed, setPlayed ] = React.useState(false);
  const inputsRef = React.useRef<Record<string, Wad>>({});
  const modulesList = useStoreMap(
    modulesStore,
    (state) => Object.values(state.entities),
  );
  const inputsModules =  modulesList.filter((module) => module.type === ModuleType.INPUT);

  React.useEffect(
    () => {
      inputsModules.forEach((input) => {
        if (!inputsRef.current[input.id]) {
          inputsRef.current[input.id] = new Wad({
            source : input.settings.source,
          });

          window['inputs'] = inputsRef.current;
        }
      });
    },
    [modulesList],
  );

  React.useEffect(
    () => {
      if (isPlayed) {
        inputsModules.forEach((input) => {
          if (input.isEnabled) {
            window['inputs'][input.id].play({ loop: true, pitch : 'A4', label : 'A4' });
          }
        });
      } else {
        inputsModules.forEach((input) => {
          window['inputs'][input.id].stop();
        });
      }
    },
    [inputsRef.current, isPlayed],
  );

  const play = React.useCallback(
    () => {
      setPlayed(true);
    },
    [],
  );

  const stop = React.useCallback(
    () => {
      setPlayed(false);
    },
    [],
  );

  const toggleInput = React.useCallback(
    (id: string, isEnable) => {
      if (!isPlayed) return;

      if (isEnable) {
        inputsRef.current[id].play({ loop: true, pitch: 'A5', label: 'A5' });
      } else {
        inputsRef.current[id].stop();
      }
    },
    [inputsRef.current, isPlayed],
  );

  return {
    isPlayed,
    play,
    toggleInput,
    stop,
  };
};
