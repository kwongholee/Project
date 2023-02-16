import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signup() {
  var navigate = useNavigate();

  return(
    <div>
      <Container className="mt-5">
        <Form>
          <Form.Group as={Row} className="mb-3 mt-5" controlId="formPlaintextEmail">
            <Form.Label column sm="2">너님 이름</Form.Label>
            <Col sm="10">
            <Form.Control type="text" placeholder="Name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-5" controlId="formPlaintextEmail">
            <Form.Label column sm="2">너님이 사용할 닉네임</Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Nickname" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-5" controlId="formPlaintextPassword">
            <Form.Label column sm="2">너님 비밀번호</Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-5" controlId="formPlaintextEmail">
            <Form.Label column sm="2">너님이 사용할 닉네임</Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Nickname" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label column sm="2">너님 소개하는 글 3줄 요약</Form.Label>
            <Col sm="10">
              <Form.Control as="textarea" rows={3} placeholder="3줄 요약 좀" />
            </Col>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3 mt-5">
            <Form.Control type="file" />
            <Form.Label>너님 프로필 사진(설정 안하면 기본 사진임)</Form.Label>
          </Form.Group>

          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3 mt-5">
              <Form.Check 
                type={type}
                id={`default-${type}`}
                label={'님들 회원가입하는 거에 동의하면 체크박스 누르고 버튼 ㄱㄱ'}
              />
            </div>
          ))}

          <Button variant="success" className="mt-2" onClick={() => {navigate('/profile/:id')}}>회원가입 완료</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Signup;