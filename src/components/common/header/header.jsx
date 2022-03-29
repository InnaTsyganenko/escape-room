import { useState } from 'react';
import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { AppRoute } from 'const';

const Header = () => {
  const [isActiveLink, setIsActiveLink] = useState(false);

  const getSorts = () => [
    {
      type: AppRoute.ROOT,
      name: 'Квесты'
    },
    {
      type: '#',
      name: 'Новичкам'
    },
    {
      type: '#',
      name: 'Отзывы'
    },
    {
      type: '#',
      name: 'Акции'
    },
    {
      type: AppRoute.CONTACTS,
      name: 'Контакты'
    },
  ]

  const onActiveLinkClick = (activeItem) => {
    setIsActiveLink({activeItem: {
      [activeItem]: true,
    }});
  };

  const onLoadData = () => {
    setIsActiveLink({activeItem: {
      [AppRoute.ROOT]: true,
    }});
  };

  return (
  <S.StyledHeader  onLoad={onLoadData}>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>

        {getSorts().map((link) => (
          <S.LinkItem>
          <S.Link
            onClick={() => onActiveLinkClick(link.name)}
            to={link.type}
            $isActiveLink={isActiveLink ? true : false}>
            {link.name}
          </S.Link>
        </S.LinkItem>))}

          <S.LinkItem>
            <S.Link
              onClick={onActiveLinkClick}
              to={AppRoute.ROOT}
              $isActiveLink={isActiveLink ? true : false}>
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to="#">Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to={AppRoute.CONTACTS}>Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
)};

export default Header;
