import * as S from './styled';

const Menu = ({ open }) => {

  const close = () => {
    <S.Menu open={false}></S.Menu>
  }

  return (
    <S.Menu open={open}>
      <a href="#home">
        <span role="img" aria-label="about us" onClick={close}></span>
        Inicio
      </a>
      <a href="#informations">
        <span role="img" aria-label="price" onClick={close}></span>
        Informações
      </a>
      <a href="#rules">
        <span role="img" aria-label="price" onClick={close}></span>
        Regras
      </a>
    </S.Menu>
  )
}
export default Menu;