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
import { getQuests } from 'store/quests-data/selectors';
import { getFiltredQuests, getQuestType } from 'store/quests-operations/selectors';
import { getIdQuest, getTypeForFilterQuests, resetState } from 'store/action';
import { AppRoute, filters, DEFAULT_TYPE, getLevel, defineQuestType } from 'const';

const QuestsCatalog = () => {
  const [isActiveLink, setIsActiveLink] = useState(filters[0]);

  const onActiveLinkClick = (activeItem) => {
    setIsActiveLink(activeItem);
    if (activeItem === DEFAULT_TYPE) {
      dispatch(resetState());
    } else {
      dispatch(getTypeForFilterQuests(Object.keys(defineQuestType).find(key => defineQuestType[key] === activeItem)));
    }
  };

  const dispatch = useDispatch();

  const quests = useSelector(getQuests);
  const questType = useSelector(getQuestType);
  const filtredQuests = useSelector(getFiltredQuests);

  return (
  <>
    <S.Tabs>
      {filters.map((item) => (
        <S.TabItem key={item}>
          <S.TabBtn
            onClick={() => {
              onActiveLinkClick(item);
            }}
            isActive={isActiveLink === filters.find(value => value === item) ? true : false}
            >
            {item === filters[0] ? <IconAllQuests /> : ''}
            {item === filters[1] ? <IconAdventures /> : ''}
            {item === filters[2] ? <IconHorrors /> : ''}
            {item === filters[3] ? <IconMystic /> : ''}
            {item === filters[4] ? <IconDetective /> : ''}
            {item === filters[5] ? <IconScifi /> : ''}
            <S.TabTitle>{item}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>))}
    </S.Tabs>

    <S.QuestsList>
    {((questType === DEFAULT_TYPE)
        ? quests
        : filtredQuests)
        .map((quest) => (
      <S.QuestItem key={quest.id}>
        <S.QuestItemLink
          onClick={() => {
            dispatch(getIdQuest(quest.id));
          }}
          to={`${AppRoute.QUEST}${quest.id}`}>
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
