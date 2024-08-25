
import './App.css';
import Header from './component/header/Header';
import Feed from './component/feed/Feed';
import Sidebarleft from './component/Sidebarleft/Sidebarleft';
import Container from './Container/Container';
import Sidebarright from './component/Sidebarright/Sidebarright';



function App() {
  return (
    <>
    <Header/>
       
      <Container>
        
      <Sidebarleft/> <Feed/><Sidebarright/>
        
      </Container> 
     
    
    </>
  )
}

export default App;
