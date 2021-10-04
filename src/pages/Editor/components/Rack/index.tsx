import React from 'react';
import { Stage, Layer } from 'react-konva';
import { RackWrap } from './styled';

export function Rack(): JSX.Element {
  return (
    <RackWrap>
      <Stage width={window.innerWidth - 260} height={window.innerHeight - 73}>
        <Layer></Layer>
      </Stage>
    </RackWrap>
  );
}
