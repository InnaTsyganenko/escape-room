import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { getPickedId } from 'store/quests-operations/selectors';
import { getQuestById } from 'store/quests-data/selectors';
import { fetchQuestById } from 'store/api-actions';
import { getLevel, defineQuestType } from 'const';
import { showAlert } from 'utils';
import LoadingScreen from 'components/loading-screen/loading-screen';

const DetailedQuest = () => {
  const dispatch = useDispatch();

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const pickedId = useSelector(getPickedId);

  const handleBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  useEffect(() => {
    dispatch(fetchQuestById(pickedId))
      .then(() => {
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [dispatch, pickedId])

  const quest = useSelector(getQuestById);

  if (error) {
    return <MainLayout>{showAlert('darkorange', `Something wrong, ${error}`)}</MainLayout>;
  } else if (!isLoaded) {
    return <LoadingScreen />;
  } else {
  return (
    <MainLayout>
      <S.Main key={quest.id}>
          <S.PageImage
          src={`../${quest.coverImg}`}
          alt={`Квест ${quest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{defineQuestType[quest.type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{quest.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{quest.peopleCount[0]}–{quest.peopleCount[1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{getLevel[quest.level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{quest.description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={handleBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  )};
};

export default DetailedQuest;
