import React from 'react';
import { Donut } from 'react-dial-knob';
import { Color } from '../constants';
import { KnobWrap, StyledLabel } from './styled';

type Props = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (angle: number) => void;
}

export function Knob(props: Props): JSX.Element {
  const {
    value,
    label,
    min,
    max,
    onChange,
  } = props;

  return (
    <KnobWrap>
      <Donut
        diameter={48}
        min={min}
        max={max}
        theme={{
          donutColor: Color.PRIMARY,
          bgrColor: Color.GHOST,
          centerFocusedColor: Color.MAIN,
          centerColor: Color.MAIN,
          donutThickness: 4,
        }}
        step={1}
        value={value}
        onValueChange={onChange}
      />
      <StyledLabel>{label}</StyledLabel>
    </KnobWrap>
  );
}
