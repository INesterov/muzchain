import { nanoid } from 'nanoid';
import { Module } from 'types/Module.types';

type Options = {
  type: Module['type'];
  name: Module['name'];
  position: Module['position'];
}

export const createModule = (options: Options): Module => {
  return {
    id: nanoid(),
    type: options.type,
    name: options.name,
    isEnabled: false,
    position: options.position,
    settings: {
      source: 'sine',
      volume: 50,
      panning: 0,
      pitch: 440,
      detune: 0,
    },
  };
};
