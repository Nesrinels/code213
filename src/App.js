
// import './App.css';
// import Header from './component/header/Header';
// import Sidebarleft from './component/Sidebarleft/Sidebarleft';
// import Container from './Container/Container';
// import Groups from './Groups/Groups';


// function App() {
//   return (
//     <>
//     <Header/>
//     <Container>
   
//       <Sidebarleft/>
//     </Container>
//     <Groups/>
//     </>
//   )
// }

// export default App;


import './App.css';
import Header from './component/header/Header';
import Sidebarleft from './component/Sidebarleft/Sidebarleft';
import Container from './Container/Container';
import Groups from './Groups/Groups';

function App() {
  return (
    <div className="app">
      <Header />
      <Container>
        <div className="main-content">
          <Sidebarleft />
          <div className="center-content">
            <Groups />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default App;