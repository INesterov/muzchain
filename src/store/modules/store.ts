import { createStore, createApi } from 'effector';
import { Module } from 'types/Module.types';
import { IVector2 } from 'types/Rack.types';
import { Modules } from './modules.types';

export const modulesStore = createStore<Modules>({
  entities: {},
});

type UpdateModulePosition = {
  id: string;
  position: IVector2;
}

export const { addModule, updateModulePosition, toggleModule } = createApi(modulesStore, {
  addModule: (state, module: Module) => ({ ...state, entities: { ...state.entities, [module.id]: module }}),
  updateModulePosition: (state: Modules, payload: UpdateModulePosition): Modules => {
    return {
      ...state,
      entities: {
        ...state.entities,
        [payload.id]: {
          ...state.entities[payload.id],
          position: payload.position,
        },
      },
    };
  },
  toggleModule: (state: Modules, moduleId: string): Modules => {
    return {
      ...state,
      entities: {
        ...state.entities,
        [moduleId]: {
          ...state.entities[moduleId],
          isEnabled: !state.entities[moduleId].isEnabled,
        },
      },
    };
  },
});
