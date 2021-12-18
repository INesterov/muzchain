import React from 'react';
import RClider from 'rc-slider';
import { Label } from 'uikit/Typography';
import 'rc-slider/assets/index.css';
import { SlicerContainer, Footer } from './styled';

type Props = {
  min: number;
  max: number;
  value: number;
  label: string;
  onChange: (value: number) => void;
}

export function Slider(props: Props): JSX.Element {
  const {
    min,
    max,
    value,
    label,
    onChange,
  } = props;

  return (
    <SlicerContainer>
      <RClider
        min={min}
        max={max}
        step={1}
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
