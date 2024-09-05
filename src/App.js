import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

import Post from "./Post/Post";
import Header from "./component/header/Header";
import Feed from "./component/feed/Feed";
import Sidebarleft from "./component/Sidebarleft/Sidebarleft";
import Container from "./Container/Container";
import Sidebarright from "./component/Sidebarright/Sidebarright";
import Login from './login-register/Login';


function App() {
  return (
    <Router>
    <>
      <Header />
      
        
        <Routes>
         <Route path="/login" element={<Login />} />
        </Routes>
      

    </>
    </Router>
  );
}

export default App;
