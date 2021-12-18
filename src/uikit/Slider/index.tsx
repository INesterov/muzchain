import React from 'react';
import RClider from 'rc-slider';
import { Label } from 'uikit/Typography';
import 'rc-slider/assets/index.css';
import { SlicerContainer, Footer } from './styled';

type Props = {
  min: number;
  max: number;
  startPoint?: number;
  value: number;
  label: string;
  step?: number;
  onChange: (value: number) => void;
}

export function Slider(props: Props): JSX.Element {
  const {
    min,
    max,
    value,
    label,
    startPoint = 0,
    step = 1,
    onChange,
  } = props;

  return (
    <SlicerContainer>
      <RClider
        min={min}
        max={max}
        startPoint={startPoint}
        step={step}
        value={value}
        onChange={onChange}
      />
      <Footer>
        <Label>{min}</Label>
        <Label>{label}</Label>
        <Label>{max}</Label>
      </Footer>
    </SlicerContainer>
  );
}
