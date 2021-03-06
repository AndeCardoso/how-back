import * as S from './styled'

const Image = ({ type, path }) => {
    switch (type) {
        case 'Illustration':
            return <S.Illustration src={path} />
        case 'Logo':
            return <S.Logo src={path} />
        case 'FooterLogo':
            return <S.FooterLogo src={path} />
        default:
            return null;
    }
}

export default Image;