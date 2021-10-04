import React, { Children } from 'react';
import { VscChevronRight, VscChevronDown } from 'react-icons/vsc';
import { Color } from '../constants';
import {
  CollapseTitle,
  CollapseWrap,
  CollapseHeader,
  CollapseContent,
} from './styled';

type Props = {
  children: JSX.Element;
  title: string;
}

export function Collapse(props: Props): JSX.Element {
  const [ isOpen, setIsOpen ] = React.useState(false);
  const { title, children } = props;

  return (
    <CollapseWrap>
      <CollapseHeader onClick={() => setIsOpen((state) => !state)}>
        <CollapseTitle>{title}</CollapseTitle>
        {isOpen ? (
          <VscChevronDown fill={Color.CLEAR} size={18} />
        ) : (
          <VscChevronRight fill={Color.CLEAR} size={18} />
        )}
      </CollapseHeader>
      {isOpen && (
        <CollapseContent>
          {children}
        </CollapseContent>
      )}
    </CollapseWrap>
  );
}
