import { createStore, createApi } from 'effector';
import {
  ZOOM_DEFAULT,
  ZOOM_MAX_RANGE,
  ZOOM_MIN_RANGE,
  ZOOM_STEP_DELTA,
} from 'constants/rackConstants';
import { RackConfig } from './rackConfigs.types';

export const rackConfigsStore = createStore<RackConfig>({
  position: {
    x: 0,
    y: 0,
  },
  zoom: ZOOM_DEFAULT,
});

export const { updateRackPosition, changeZoom } = createApi(rackConfigsStore, {
  updateRackPosition: (state, position) => ({ ...state, position }),
  changeZoom: (state, delta: number) => {
    const isIncrement = delta > 0 && state.zoom <= ZOOM_MAX_RANGE;
    const isDecrement = delta < 0 && state.zoom >= ZOOM_MIN_RANGE;

    if (isIncrement) {
      const newZoom = state.zoom + Math.abs(delta * ZOOM_STEP_DELTA);

      return { ...state, zoom: newZoom <= ZOOM_MAX_RANGE ? newZoom : ZOOM_MAX_RANGE};
    }

    if (isDecrement) {
      const newZoom = state.zoom - Math.abs(delta * ZOOM_STEP_DELTA);

      return { ...state, zoom: newZoom >= ZOOM_MIN_RANGE ? newZoom : ZOOM_MIN_RANGE};
    }
  },
});
