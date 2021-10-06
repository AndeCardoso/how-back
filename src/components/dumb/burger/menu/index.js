import * as S from './styled';

const Menu = ({ open }) => {

  const close = () => {
    <S.Menu open={false}></S.Menu>
  }

  return (
    <S.Menu open={open}>
      <a href="#home">
        <span role="img" aria-label="about us" onClick={close}></span>
        Home
      </a>
      <a href="#informations">
        <span role="img" aria-label="price" onClick={close}></span>
        Informações
      </a>
    </S.Menu>
  )
}
export default Menu;