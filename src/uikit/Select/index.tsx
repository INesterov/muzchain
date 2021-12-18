import React from 'react';
import RSelect, { Props } from 'react-select';
import { SelectContainer } from './styled';

export function Select(props: Props): JSX.Element {
  return (
    <SelectContainer>
      <RSelect { ...props } />
    </SelectContainer>
  );
}
