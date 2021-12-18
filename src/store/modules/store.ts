import { createStore, createApi } from 'effector';
import { Module } from 'types/Module.types';
import { IVector2 } from 'types/Rack.types';
import { Modules } from './modules.types';

export const modulesStore = createStore<Modules>({
  entities: {},
  activeModuleId: undefined,
});

type UpdateModulePosition = {
  id: string;
  position: IVector2;
}

export const {
  addModule,
  updateModulePosition,
  toggleModule,
  setActiveModule,
  resetActiveModule,
  updateModuleSettings,
} = createApi(modulesStore, {
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
  updateModuleSettings: (state: Modules, settings: Module['settings']) => {
    return {
      ...state,
      entities: {
        ...state.entities,
        [state.activeModuleId as string]: {
          ...state.entities[state.activeModuleId as string],
          settings,
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
  setActiveModule: (state: Modules, moduleId: string): Modules => {
    return {
      ...state,
      activeModuleId: moduleId,
    };
  },
  resetActiveModule: (state: Modules): Modules => {
    return {
      ...state,
      activeModuleId: undefined,
    };
  },
});
