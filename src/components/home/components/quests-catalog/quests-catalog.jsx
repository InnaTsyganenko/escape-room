import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { AppRoute, DEFAULT_GENRE, getLevel } from 'const';
import { getQuests } from 'store/movies-data/selectors';
import { getFiltredMovies, getGenre } from 'store/movies-operations/selectors';
import { getIdMovie } from 'store/action';
import browserHistory from 'browser-history';

const QuestsCatalog = () => {
  const getFilters = ['Все квесты', 'Приключения', 'Ужасы', 'Мистика', 'Детектив', 'Sci-fi'];

  const [isActiveLink, setIsActiveLink] = useState(getFilters[0]);
  // console.log(getFilters[0]);

  const onActiveLinkClick = (activeItem) => {
    setIsActiveLink(activeItem);
  };

  const dispatch = useDispatch();

  const quests = useSelector(getQuests);
  const genre = useSelector(getGenre);
  const filtredMovies = useSelector(getFiltredMovies);

  const onFilmCardClick = (id) => browserHistory.push(`${AppRoute.QUEST}${id}`);
  console.log(quests);

  return (
  <>
    <S.Tabs>
      {getFilters.map((item) => (
        <S.TabItem key={item}>
          <S.TabBtn
            onClick={() => onActiveLinkClick(item)}
            isActive={isActiveLink === getFilters.find(value => value === item) ? true : false}>
            {item === getFilters[0] ? <IconAllQuests /> : ''}
            {item === getFilters[1] ? <IconAdventures /> : ''}
            {item === getFilters[2] ? <IconHorrors /> : ''}
            {item === getFilters[3] ? <IconMystic /> : ''}
            {item === getFilters[4] ? <IconDetective /> : ''}
            {item === getFilters[5] ? <IconScifi /> : ''}
            <S.TabTitle>{item}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>))}
    </S.Tabs>

    <S.QuestsList>
    {((genre === DEFAULT_GENRE)
        ? quests
        : filtredMovies)
        .map((quest) => (
      <S.QuestItem key={quest.id}>
        <S.QuestItemLink
          to={`${AppRoute.QUEST}${quest.id}`}
          onClick={() => {
            dispatch(getIdMovie(quest.id));
            onFilmCardClick(quest.id);
          }}>
          <S.Quest>
            <S.QuestImage
              src={quest.previewImg}
              width="344"
              height="232"
              alt={`квест ${quest.title}`}
            />

            <S.QuestContent>
              <S.QuestTitle>{quest.title}</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  {quest.peopleCount[0]}–{quest.peopleCount[1]} чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  {getLevel[quest.level]}
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>))}
    </S.QuestsList>
  </>
)};

export default QuestsCatalog;
