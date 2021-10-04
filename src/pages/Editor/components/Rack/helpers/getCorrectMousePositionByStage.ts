import Konva from 'konva';

// Types
import { IVector2 } from 'types/Rack.types';

// Helpers
import { getCorrectPointPosition } from './getCorrectPointPosition';

export function getCorrectMousePositionByStage(stage: Konva.Stage): IVector2 {
  const pointer = stage.getPointerPosition();

  return pointer ? getCorrectPointPosition(stage, pointer) : {
    x: 0,
    y: 0,
  };
}
