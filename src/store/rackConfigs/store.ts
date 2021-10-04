import { createStore, createApi } from 'effector';
import { RackConfig } from './rackConfigs.types';

export const rackConfigsStore = createStore<RackConfig>({
  position: {
    x: 0,
    y: 0,
  },
});

export const { updateRackPosition } = createApi(rackConfigsStore, {
  updateRackPosition: (state, position) => ({ ...state, position }),
});
