import * as S from './styled'
import Header from '../header'
import Main from '../main';
import Footer from '../footer';

const Layout = () => {
    return (
        <S.Container>
            <Header />
            <Main />
            <Footer />
        </S.Container>
    )
}

export default Layout;