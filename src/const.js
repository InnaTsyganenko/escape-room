export const AppRoute = {
  ROOT: '/',
  QUEST: '/detailed-quest/',
  CONTACTS: '/contacts',
};

export const getMenuItems = () => [
  {
    path: AppRoute.ROOT,
    name: 'Квесты'
  },
  {
    path: '#',
    name: 'Новичкам'
  },
  {
    path: '#',
    name: 'Отзывы'
  },
  {
    path: '#',
    name: 'Акции'
  },
  {
    path: AppRoute.CONTACTS,
    name: 'Контакты'
  },
]

export const getFilters = ['Все квесты', 'Приключения', 'Ужасы', 'Мистика', 'Детектив', 'Sci-fi'];

export const getLevel = {
  easy: 'простой',
  medium: 'средний',
  hard: 'сложный',
};

export const defineQuestType = {
  "adventures": 'Приключения',
  "horror": 'Ужасы',
  "mystic": 'Мистика',
  "detective": 'Детектив',
  "sci-fi": 'Sci-fi',
};

export const APIRoute = {
  QUESTS: '/quests',
  QUEST_BY_ID: '/quests/',
  ORDERS: '/orders',
};

export const DEFAULT_TYPE = 'Все квесты';

