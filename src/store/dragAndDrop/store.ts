import { createStore, createApi } from 'effector';
import { DragAndDrop } from './dragAndDrop.types';

export const dragAndDropStore = createStore<DragAndDrop>({
  draggableModule: undefined,
  isDragging: false,
});

export const { dragStart, dragEnd } = createApi(dragAndDropStore, {
  dragStart: (state, draggableModule: DragAndDrop['draggableModule']) => ({ ...state, draggableModule, isDragging: true }),
  dragEnd: (state) => ({ ...state, draggableModule: undefined, isDragging: false }),
});
