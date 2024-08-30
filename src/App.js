
import './App.css';
import Header from './component/header/Header';
import Sidebarleft from './component/Sidebarleft/Sidebarleft';
import Container from './Container/Container';
import Settings from './component/Settings/Settings';


function App() {
  return (
    <>
    <Header/>
    <Container>
      <Sidebarleft/> 
      <Settings/> 
    </Container>
    </>
  )
}

export default App;
