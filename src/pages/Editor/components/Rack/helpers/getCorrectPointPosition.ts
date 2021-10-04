import Konva from 'konva';
import { IVector2 } from 'types/Rack.types';

export const getCorrectPointPosition = (
  stage: Konva.Stage,
  pointPosition: IVector2,
  scale: IVector2 | void,
): IVector2 => {
  const scaleX = !scale ? stage.scaleX() : scale.x;
  const scaleY = !scale ? stage.scaleY() : scale.y;

  const x = pointPosition.x / scaleX - stage.x() / scaleX;
  const y = pointPosition.y / scaleY - stage.y() / scaleY;

  return { x, y };
};
