import React from 'react';
import { IVector2 } from 'types/Rack.types';
import { useSavedHandler } from './useSavedHandler';

type TFunc = (event: MouseEvent) => void;

export function useMousePosition(): IVector2 {
  const [position, setPosition] = React.useState<IVector2>({ x: 0, y: 0 });
  const savedHandleMouseMove = useSavedHandler<TFunc>(
    (event: MouseEvent): void => {
      setPosition({ x: event.clientX, y: event.clientY });
    },
  );

  React.useEffect((): (() => void) => {
    const handler = savedHandleMouseMove.current;
    
    if (handler) {
      document.addEventListener('mousemove', handler);
    }

    return (): void => {
      if (handler) {
        document.removeEventListener('mousemove', handler);
      }
    };
  }, [savedHandleMouseMove]);

  return position;
}
