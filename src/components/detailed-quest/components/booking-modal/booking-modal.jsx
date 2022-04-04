import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import {pushOrder} from 'store/api-actions';
import PropTypes from 'prop-types';

const BookingModal = ({ isBookingModalOpened, onBookingModalCloseClick }) => {
  const [state, setState] = useState({
    name: '',
    peopleCount: 0,
    phone: 0,
    isLegal: Boolean(),
  });

  const dispatch = useDispatch();

  const handleInputChange = (evt) => {
    const target = evt.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setState({
      ...state,
      isLegal: value
    });
  }

  useEffect(() => {
    const isEscEvent = (evt) => {
      if (evt.key === ('Escape' || 'Esc')){
        onBookingModalCloseClick();
      }
    }
    window.addEventListener('keydown', isEscEvent)
  return () => window.removeEventListener('keydown', isEscEvent)
},[onBookingModalCloseClick])

  return (
  <S.BlockLayer style={isBookingModalOpened ? {display: 'block'} : {display: 'none'}}>
    <S.Modal>
      <S.ModalCloseBtn onClick={() => onBookingModalCloseClick()}>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        method="post"
        id="booking-form"
        action="#"
        onSubmit={(evt) => {
          evt.preventDefault();
          dispatch(pushOrder(state.name, state.peopleCount, state.phone, state.isLegal));
          onBookingModalCloseClick();
        }}
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            required
            onChange={(event) => state.name = event.target.value}
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            required
            onChange={(event) => state.phone = event.target.value}
            minLength={10}
            maxLength={10}
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            required
            onChange={(event) => state.peopleCount = Number(event.target.value)}
          />
        </S.BookingField>
        <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            required
            checked={state.isLegal}
            onChange={handleInputChange}
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
)};

BookingModal.propTypes = {
  isBookingModalOpened: PropTypes.bool,
  onBookingModalCloseClick: PropTypes.func,
};

export default BookingModal;
