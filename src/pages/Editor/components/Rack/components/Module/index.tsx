import React from 'react';
import Konva from 'konva';
import { Color } from 'uikit/constants';
import { getColorModule } from 'helpers/getColorModule';
import { Module as TModule, MODULES_WITH_INPUT, MODULES_WITH_OUTPUT } from 'types/Module.types';
import { updateModulePosition, toggleModule } from 'store/modules';
import { Circle, Group, Path } from 'react-konva';

type Props = {
  position: TModule['position'];
  id: string;
  isEbabled: boolean;
  iconPath: string;
  type: TModule['type'];
  name: TModule['name'];
  toggleInput: (id: string, isEnable: any) => void;
}

export function Module(props: Props): JSX.Element {
  const {
    position,
    isEbabled,
    iconPath,
    type,
    name,
    id,
    toggleInput,
  } = props;
  const color = getColorModule(type);

  React.useEffect(
    () => {
      toggleInput(id, isEbabled);
    },
    [id, isEbabled],
  );

  const handleDragEnd = React.useCallback(
    (event: Konva.KonvaEventObject<DragEvent>) => {
      const {
        moduleId,
        x,
        y,
      } = event.currentTarget.getAttrs();

      updateModulePosition({ id: moduleId, position: { x, y } });
    },
    [],
  );

  return (
    <Group
      x={position.x}
      y={position.y}
      moduleId={id}
      draggable
      onDragEnd={handleDragEnd}
      onClick={() => toggleModule(id)}
    >
      <Circle fill={Color.GHOST} stroke={isEbabled ? color : Color.CLEAR} radius={36} />
      <Path
        fill={isEbabled ? color : Color.CLEAR}
        offsetX={8}
        offsetY={8}
        scale={{
          x: 3,
          y: 3,
        }}
        data={iconPath}
      />
      {MODULES_WITH_INPUT.has(name) && (
        <Circle x={-36} fill={Color.GHOST} stroke={isEbabled ? color : Color.CLEAR}radius={6} />
      )}
      {MODULES_WITH_OUTPUT.has(name) && (
        <Circle x={36} fill={Color.GHOST} stroke={isEbabled ? color : Color.CLEAR} radius={6} />
      )}
    </Group>
  );
}
