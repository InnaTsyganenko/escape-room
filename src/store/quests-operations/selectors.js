import {NameSpace} from '../root-reducer';

export const getQuestType = (state) => state[NameSpace.QUESTS].type;

export const getPickedId = (state) => state[NameSpace.QUESTS].pickedId;

export const getFiltredQuests = (state) => state[NameSpace.DATA].quests
  .filter((quest) => quest.type === state[NameSpace.QUESTS].type);

