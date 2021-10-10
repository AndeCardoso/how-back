import * as S from './styled'

const Card = ({ title, description }) => {
    return (
        <S.Container>
            <S.Text>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
            </S.Text>
        </S.Container>
    )
}

export default Card;