import "./App.css";

import Post from "./Post/Post";
import Header from "./component/header/Header";
import Feed from "./component/feed/Feed";
import Sidebarleft from "./component/Sidebarleft/Sidebarleft";
import Container from "./Container/Container";
import Sidebarright from "./component/Sidebarright/Sidebarright";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Sidebarleft />  
         <div className="container_feed">
          <Feed />
          <Post />
         </div>      
         <div className="container_right">
        <Sidebarright />
        </div> 
      </Container>

    </>
  );
}

export default App;
