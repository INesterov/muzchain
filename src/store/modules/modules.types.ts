import { Module } from 'types/Module.types';
import { TDictionary } from 'types/Common.types';

export type Modules = {
  entities: TDictionary<Module>;
  activeModuleId?: Module['id'];
}
