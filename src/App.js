
import './App.css';
import Event from './Event/Event';
import Suggestgrp from './Suggestgrp/Suggestgrp';
import Post from './Post/Post'

import Header from './component/header/Header';
import Sidebarleft from './component/Sidebarleft/Sidebarleft';
import Container from './Container/Container';
import Sidebarright from './component/Sidebarright/Sidebarright';

function App() {
  return (
    <>
    <Header/>
    <Container>
    <Sidebarleft/>
     <Feed/>
     <Sidebarright/>
     <Post/>
    </Container>
    </>
  )
}

export default App;
