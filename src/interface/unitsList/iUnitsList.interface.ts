import { IAnimationBattle } from  './iAnimationBattle.interface';
import { IFields } from './IFields.interface';
import { IBaseStats } from './iBaseStats.interface';
import { IChainsEvolves } from './IChainsEvolves.interface';

export interface IUnitsList {
  id: number;
  name: string;
  level: string;
  numUnit: number;
  gender: Object;
  element: Object;
  color: string;
  evolveFamily: string;
  unit: Object;
  animationBattle: Array<IAnimationBattle>;
  fields: Array<IFields>;
  favoris: boolean;
  baseStat: Array<IBaseStats> ;
  chainsEvolves: Array<IChainsEvolves>; 
}