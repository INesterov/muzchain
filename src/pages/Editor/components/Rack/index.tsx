import React from 'react';
import Konva from 'konva';
import { Stage, Layer } from 'react-konva';
import { useStore } from 'effector-react';
import { rackConfigsStore, updateRackPosition } from 'store/rackConfigs';
import { drawBackgroundGrid } from './helpers/drawBackgroundGrid';
import { CanvasContainer } from './styled';

const CANVAS_CONTAINER = 'canvasContainer';

export function Rack(): JSX.Element {
  const rackConfigs = useStore(rackConfigsStore);

  const handleCanvasDragMove = React.useCallback(
    (konvaEvent: Konva.KonvaEventObject<MouseEvent>): void => {
      if (konvaEvent.currentTarget === konvaEvent.target) {
        drawBackgroundGrid(konvaEvent.currentTarget.getStage());
      }
    },
    [],
  );

  const handleCanvasDragEnd = React.useCallback(
    (konvaEvent: Konva.KonvaEventObject<MouseEvent>): void => {
      if (!konvaEvent.target.attrs.pointId) {
        const stage = konvaEvent.currentTarget.getStage();
        const { x, y } = stage?.attrs;
  
        updateRackPosition({ x, y });
      }
    },
    [updateRackPosition],
  );

  return (
    <>
      <CanvasContainer id={CANVAS_CONTAINER} />
      <Stage
        name="canvas"
        container="canvasContainer"
        x={rackConfigs.position.x}
        y={rackConfigs.position.y}
        onDragMove={handleCanvasDragMove}
        draggable={true}
        onDragEnd={handleCanvasDragEnd}
        width={window.innerWidth - 260}
        height={window.innerHeight - 73}
      >
        <Layer></Layer>
      </Stage>
    </>
  );
}
