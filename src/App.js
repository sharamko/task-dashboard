import { Container } from './App.styled';
import Main from './components/Main';
import SideMenu from './components/SideMenu';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <>
      <Container>
        <SideMenu />
        <Main></Main>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default App;
