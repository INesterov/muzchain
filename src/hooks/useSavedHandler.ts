import React from 'react';

type Handler = (event: MouseEvent) => void;
export function useSavedHandler<F = Handler>(handler: F): React.RefObject<F> {
  const savedHandler = React.useRef(handler);

  React.useEffect((): void => {
    savedHandler.current = handler;
  }, [handler]);

  return savedHandler;
}
