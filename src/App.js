
import './App.css';
import Header from './component/header/Header';
import Sidebarleft from './component/Sidebarleft/Sidebarleft';
import Container from './Container/Container';
import Groups from './Groups/Groups';


function App() {
  return (
    <>
    <Header/>
    <Container>
   
      <Sidebarleft/>
    </Container>
    <Groups/>
    </>
  )
}

export default App;
