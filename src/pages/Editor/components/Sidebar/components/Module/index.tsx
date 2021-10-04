import React from 'react';
import { ModuleType, ModuleName } from 'types/Module.types';
import { DragAndDrop } from 'store/dragAndDrop/dragAndDrop.types';
import { getModuleIcon } from './helpers/getModuleIcon';
import {
  ModuleWrap,
  ModuleTitle,
  ModuleIcon,
} from './styled';

type Props = {
  title?: string;
  type: ModuleType;
  name: ModuleName;
  isDragging?: boolean;
  onDragStart?: (module: DragAndDrop['draggableModule']) => void;
  onDragEnd?: () => void;
}

export function Module(props: Props): JSX.Element {
  const {
    title,
    type,
    name,
    isDragging,
    onDragStart,
  } =  props;

  return (
    <ModuleWrap
      type={type}
      onMouseDown={() => onDragStart && onDragStart({ name, type })}
    >
      <ModuleIcon>
        {getModuleIcon(name)}
      </ModuleIcon>
      {!isDragging && (
        <ModuleTitle>{title}</ModuleTitle>
      )}
    </ModuleWrap>
  );
}
