
import './App.css';
import Header from './component/header/Header';
import Feed from './component/feed/Feed';
import Sidebarleft from './component/Sidebarleft/Sidebarleft';
import Container from './Container/Container';


function App() {
  return (
    <>
    <Header/>
    <Container>
   
      <Sidebarleft/> 
    </Container>
    </>
  )
}

export default App;
