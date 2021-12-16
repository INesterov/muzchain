import React from 'react';
import { closeModal } from 'store/modal';
import { Sidepanel } from 'uikit';

export function OscSettings(): JSX.Element {
  return (
    <Sidepanel title='OSC' onClose={closeModal}>
      <h1>Osc Settings comming soon...</h1>
    </Sidepanel>
  );
}
