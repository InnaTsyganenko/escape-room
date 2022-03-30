import {NameSpace} from '../root-reducer';

export const getQuests = (state) => state[NameSpace.DATA].movies;
