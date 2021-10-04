import React from 'react';

export function useAutoCleanDragAndDrop(
  isDragging: boolean,
  dragEnd: () => void,
): void {
  const refHandle = React.useRef<() => void>();

  const handleDragEnd = React.useCallback(
    (): void => {
      if (isDragging) {
        dragEnd();
      }
    },
    [isDragging, dragEnd],
  );

  React.useEffect(
    (): (() => void) => {
      if (isDragging) {
        refHandle.current = handleDragEnd;

        document.body.addEventListener('mouseup', refHandle.current);
        document.body.addEventListener('mouseleave', refHandle.current);
      }

      return (): void => {
        if (refHandle.current) {
          document.body.removeEventListener('mouseup', refHandle.current);
          document.body.removeEventListener('mouseleave', refHandle.current);

          refHandle.current = undefined;
        }
      };
    },
    [isDragging, handleDragEnd],
  );
}
