import React from 'react';
import { Module, ModuleName } from 'types/Module.types';
import { OscModule } from '../OscModule';

type Props = {
  modulesList: Module[];
}

export function DrawModules(props: Props): JSX.Element {
  const { modulesList } = props;

  return (
    <>
      {modulesList.map((module) => {
        switch (module.name) {
          case ModuleName.OSC: {
            return (<OscModule key={module.id} module={module} />);
          }
          default: {
            return null;
          }
        }
      })}
    </>
  );
}
