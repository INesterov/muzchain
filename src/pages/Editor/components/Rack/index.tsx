import React from 'react';
import Konva from 'konva';
import { Stage, Layer } from 'react-konva';
import { useStore, useStoreMap } from 'effector-react';
import { IVector2 } from 'types/Rack.types';
import { rackConfigsStore, updateRackPosition, changeZoom } from 'store/rackConfigs';
import { addModule, modulesStore } from 'store/modules';
import { createModule } from 'store/modules/helpers/createModule';
import { dragAndDropStore } from 'store/dragAndDrop';
import { drawBackgroundGrid } from './helpers/drawBackgroundGrid';
import { getCorrectMousePositionByStage } from './helpers/getCorrectMousePositionByStage';
import { getCorrectPointPosition } from './helpers/getCorrectPointPosition';
import { DrawModules } from './components/DrawModules';
import { CanvasContainer } from './styled';

const CANVAS_CONTAINER = 'canvasContainer';

export function Rack(): JSX.Element {
  const rackConfigs = useStore(rackConfigsStore);
  const dragAndDrop = useStore(dragAndDropStore);
  const modulesList = useStoreMap(
    modulesStore,
    (state) => Object.values(state.entities),
  );

  const handleCanvasMouseUp = React.useCallback(
    (konvaEvent: Konva.KonvaEventObject<MouseEvent>) => {
      const stage = konvaEvent.currentTarget.getStage();

      if (stage && dragAndDrop.isDragging &&  dragAndDrop.draggableModule) {
        const { draggableModule }= dragAndDrop;
        const position = getCorrectMousePositionByStage(stage);
        const module = createModule({ type: draggableModule.type, name: draggableModule.name, position });

        addModule(module);
      }
    },
    [dragAndDrop.isDragging, dragAndDrop.draggableModule],
  );

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

  const handleCanvasWheel = React.useCallback(
    (event: Konva.KonvaEventObject<WheelEvent>): void => {
      const stage = event.currentTarget.getStage() as Konva.Stage;

      event.evt.preventDefault();

      changeZoom(event.evt.deltaY);

      const oldScale = { x: rackConfigs.zoom, y: rackConfigs.zoom };
      const pointPosition = getCorrectPointPosition(
        stage,
        stage.getPointerPosition() as IVector2,
        oldScale,
      );

      const newScale = stage.scale();
      const stageX = stage.getPointerPosition()?.x ?? 0;
      const stageY = stage.getPointerPosition()?.y ?? 0;

      const newPos = {
        x: -(pointPosition.x - stageX / newScale.x) * newScale.x,
        y: -(pointPosition.y - stageY / newScale.y) * newScale.y,
      };

      stage
        .position(newPos)
        .batchDraw();

      drawBackgroundGrid(stage);
    },
    [
      rackConfigs.zoom,
      changeZoom,
      drawBackgroundGrid,
    ],
  );

  return (
    <>
      <CanvasContainer id={CANVAS_CONTAINER} />
      <Stage
        name="canvas"
        container="canvasContainer"
        x={rackConfigs.position.x}
        y={rackConfigs.position.y}
        scaleX={rackConfigs.zoom}
        scaleY={rackConfigs.zoom}
        onDragMove={handleCanvasDragMove}
        onMouseUp={handleCanvasMouseUp}
        draggable={true}
        onDragEnd={handleCanvasDragEnd}
        width={window.innerWidth - 260}
        height={window.innerHeight - 73}
        onWheel={handleCanvasWheel}
      >
        <Layer>
          <DrawModules modulesList={modulesList} />
        </Layer>
      </Stage>
    </>
  );
}
