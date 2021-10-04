import { IVector2 } from './Rack.types';

export enum ModuleType {
  INPUT = 'input',
  OUTPUT = 'output',
}

export enum ModuleName {
  OSC = 'osc',
}

export type Module = {
  id: string;
  type: ModuleType;
  name: ModuleName;
  position: IVector2;
  isEnabled: boolean;
}

export const MODULES_WITH_INPUT = new Set<ModuleName>([]);

export const MODULES_WITH_OUTPUT = new Set<ModuleName>([
  ModuleName.OSC,
]);
