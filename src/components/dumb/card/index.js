import * as S from './styled'

const Card = ({ title, description, icon }) => {
    return (
        <S.Container>
            <S.Icon>
                {icon}
            </S.Icon>
            <S.Text>
                <S.Description>{description}</S.Description>
            </S.Text>
        </S.Container>
    )
}

export default Card;