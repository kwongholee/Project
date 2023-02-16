import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { Route, Routes, useNavigate } from 'react-router-dom';

import Introduce from './routes/Introduce';
import Profile from './routes/Profile';
import Write from './routes/Write';
import Login from './routes/Login';
import Signup from './routes/Signup';
import List from './routes/List';
import Feed from './routes/Feed';
import Chat from './routes/Chat';

import bg from './img/introduce1.png';

function App() {
  var navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => {navigate('/')}}>Kwongho's Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={() => {navigate('/introduce')}}>소개</Nav.Link>
            <Nav.Link onClick={() => {navigate('/list')}}>게시판</Nav.Link>
            <Nav.Link onClick={() => {navigate('/chat')}}>채팅창</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<></>} />

        <Route path='/feed/?writer=id/?_id:_id' element={<Feed />} />

        <Route path='/introduce' element={<Introduce />} />

        <Route path='/list' element={<List />} />

        <Route path='/login' element={<Login />} />

        <Route path='/profile/:id' element={<Profile />} />

        <Route path='/signup' element={<Signup />} />

        <Route path='/write' element={<Write />} />

        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
