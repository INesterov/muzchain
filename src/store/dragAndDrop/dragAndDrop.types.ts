import { Module } from 'types/Module.types';

export type DragAndDrop = {
  draggableModule?: {
    name: Module['name'];
    type: Module['type'];
  };
  isDragging: boolean;
}
