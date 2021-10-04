import React from 'react';
import Wad from 'web-audio-daw';
import { ModuleType } from 'types/Module.types';
import { useStoreMap } from 'effector-react';
import { modulesStore } from 'store/modules';

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
          inputsRef.current[input.id] = new Wad({source : 'sawtooth'});
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
            inputsRef.current[input.id].play({ loop: true });
          }
        });
      } else {
        inputsModules.forEach((input) => {
          inputsRef.current[input.id].stop();
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
      debugger;
      if (!isPlayed) return;

      if (isEnable) {
        inputsRef.current[id].play({ loop: true });
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
