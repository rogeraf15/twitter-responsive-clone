import styled, {css} from "styled-components";
import { ArrowLeft, Home,  Search, Email, Notifications} from '../../styles/icons';


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* para definir o tamanho minimo da largura, se a tela(100%) for menor que 601px, ele pegara o tamanho da tela, mas se ele for maior ficara no limite que é 601px. */
  width: min(601px, 100%);

  /* responsividade para dispositivos com mais de 500px de largura */
  @media (min-width: 500px){
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  /* para ficar em cima de tudo */
  z-index: 2;
  /* preso no topo */
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  /* jogar o texto para esquerda */
  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  >button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover{
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  >strong {
    font-size: 19px;
  }

  >span {
    font-size: 19px;
    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  /* apartir de 500px */
  @media (min-width: 500px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);

  &:hover, &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`${iconCSS}`;
export const SearchIcon = styled(Search)`${iconCSS}`;
export const BellIcon = styled(Notifications)`${iconCSS}`;
export const EmailIcon = styled(Email)`${iconCSS}`;
