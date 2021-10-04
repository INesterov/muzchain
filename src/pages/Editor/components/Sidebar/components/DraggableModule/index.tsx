import React from 'react';
import { ModuleName, ModuleType } from 'types/Module.types';
import { useMousePosition } from 'hooks/useMousePosition';
import { Module } from '../Module';
import { DraggableContainer } from './styled';

const DRAG_MOUSE_PADDING = 2;

type Props = {
  name: ModuleName;
  type: ModuleType;
}

export function DraggableModule(props: Props) {
  const { name, type } = props;
  const position = useMousePosition();

  if (position.x === 0 && position.y === 0) {
    return null;
  }

  const style: React.CSSProperties = {
    transform: `translate(${position.x + DRAG_MOUSE_PADDING}px, ${position.y + DRAG_MOUSE_PADDING}px)`,
  };


  return (
    <DraggableContainer style={style}>
      <Module
        name={name}
        type={type}
        isDragging
      />
    </DraggableContainer>
  );
}
