import {NameSpace} from '../root-reducer';

export const getQuests = (state) => state[NameSpace.DATA].quests;
export const getQuestById = (state) => state[NameSpace.DATA].questById;
