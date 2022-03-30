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

export const getLevel = {
  easy: 'простой',
  medium: 'средний',
  hard: 'сложный',
};

export const getType = {
  adventures: 'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  sciFi: 'Sci-Fi',
};

export const APIRoute = {
  QUESTS: '/quests',
  PROMO: '/promo',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments/',
  SIMILAR: '/similar',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const RATINGS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
export const DEFAULT_GENRE = 'All genres';
export const FILMS_RENDER_STEP = 8;
export const MIN_LENGTH_COMMENT = 50;
export const MAX_LENGTH_COMMENT = 400;

