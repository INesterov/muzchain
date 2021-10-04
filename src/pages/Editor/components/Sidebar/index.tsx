import React from 'react';
import { Collapse } from 'uikit';
import { useStore } from 'effector-react';
import { dragAndDropStore, dragStart, dragEnd, useAutoCleanDragAndDrop } from 'store/dragAndDrop';
import { DragAndDrop } from 'store/dragAndDrop/dragAndDrop.types';
import { ModuleType, ModuleName } from 'types/Module.types';
import { Module } from './components/Module';
import { DraggableModule } from './components/DraggableModule';
import {
  SidebarWrap,
  ModulesGroup,
} from './styled';

export function Sidebar(): JSX.Element {
  const dragAndDrop = useStore(dragAndDropStore);

  useAutoCleanDragAndDrop(
    dragAndDrop.isDragging,
    dragEnd,
  );

  const onDragStart = React.useCallback(
    (module: DragAndDrop['draggableModule']) => {
      dragStart(module);
    },
    [],
  );

  return (
    <SidebarWrap>
      {dragAndDrop.isDragging && dragAndDrop.draggableModule && (
        <DraggableModule
          name={dragAndDrop.draggableModule.name}
          type={dragAndDrop.draggableModule.type}
        />
      )}
      <Collapse title="Inputs">
        <ModulesGroup>
          <Module
            title="Oscillator"
            type={ModuleType.INPUT}
            name={ModuleName.OSC}
            onDragStart={onDragStart}
          />
        </ModulesGroup>
      </Collapse>
      <Collapse title="Outputs"><h1></h1></Collapse>
    </SidebarWrap>
  );
}
