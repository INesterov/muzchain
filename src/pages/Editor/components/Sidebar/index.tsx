import React from 'react';
import { Collapse } from 'uikit';
import { SidebarWrap} from './styled';

export function Sidebar(): JSX.Element {
  return (
    <SidebarWrap>
      <Collapse title="Inputs"><h1></h1></Collapse>
    </SidebarWrap>
  );
}
