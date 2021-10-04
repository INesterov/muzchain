import Konva from 'konva';
import {
  CANVAS_GRID_CELL_HEIGHT,
  CANVAS_GRID_CELL_WIDTH,
  CANVAS_GRIP_ROUNDING_ACCURACY,
} from 'constants/rackConstants';

export const drawBackgroundGrid = (stage: Konva.Stage | null): void => {
  if (stage) {
    const accuracy = CANVAS_GRIP_ROUNDING_ACCURACY;
    const container = stage.container();
    const { x: xScale, y: yScale } = stage.scale();
    const { x: xPosition, y: yPosition } = stage.getPosition();
    const bSizeX = Math.round(CANVAS_GRID_CELL_WIDTH * xScale * accuracy) / accuracy;
    const bSizeY = Math.round(CANVAS_GRID_CELL_HEIGHT * yScale * accuracy) / accuracy;
    const bPositionX = Math.round(xPosition * accuracy) / accuracy;
    const bPositionY = Math.round(yPosition * accuracy) / accuracy;
  
    container.style.backgroundSize = `${bSizeX}px ${bSizeY}px`;
    container.style.backgroundPosition = `${bPositionX}px ${bPositionY}px`;
  }
};
