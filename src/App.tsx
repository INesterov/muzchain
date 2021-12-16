import React from 'react';
import { ModalManager } from 'features/ModalManager';
import { Routes } from './routes';

export function App() {
  return (
    <>
      <Routes />
      <ModalManager />
    </>
  );
}
