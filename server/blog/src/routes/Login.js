import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  var navigate = useNavigate();
  return(
    <div>
      <Container className="mt-5">
        <Form>
          <Form.Group as={Row} className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Label column sm="2">아이디</Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="아이디를 입력하세요" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-5" controlId="formBasicPassword">
            <Form.Label column sm="2">비밀번호</Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>

      <p className="mt-5">아직 아이디와 비밀번호가 없으시다면? 아래의 버튼을 눌러서 회원가입하세요!</p>
      <h4>30초만 있으면 ㅆㄱㄴ!</h4>
      <Button variant="danger" onClick={() => {navigate('/signup')}}>회원가입</Button>
    </div>
  );
}

export default Login;