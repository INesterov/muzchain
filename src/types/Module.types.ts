export enum ModuleType {
  INPUT = 'input',
  OUTPUT = 'output',
}

export enum ModuleName {
  OSC = 'osc',
}

export type Module = {
  type: ModuleType;
  name: ModuleName;
}
