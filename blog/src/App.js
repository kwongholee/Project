import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { Routes } from 'react-router-dom';

import Introduce from './routes/Introduce';
import Profile from './routes/Profile';
import Write from './routes/Write';
import Login from './routes/Login';
import Signup from './routes/Signup';
import List from './routes/List';
import Feed from './routes/Feed';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Kwongho's Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/introduce">소개</Nav.Link>
            <Nav.Link href="/list">게시판</Nav.Link>
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
      </Routes>
    </div>
  );
}

export default App;
