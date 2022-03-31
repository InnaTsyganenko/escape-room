import { combineReducers } from 'redux';
import { questsData } from './quests-data/quests-data';
import { questsOperations } from './quests-operations/quests-operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const NameSpace = {
  DATA: 'DATA',
  QUESTS: 'QUESTS',
};

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'QUESTS'],
};

const questsPersistConfig = {
  key: 'QUESTS',
  storage,
  whitelist: ['pickedId'],
};

const rootReducer = combineReducers({
  [NameSpace.DATA]: questsData,
  [NameSpace.QUESTS]: persistReducer(questsPersistConfig, questsOperations),
});

export default persistReducer(rootPersistConfig, rootReducer);
