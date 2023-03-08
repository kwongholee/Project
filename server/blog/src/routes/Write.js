import {FloatingLabel, Form} from 'react-bootstrap';

function Write() {
  return(
    <div>
      <h3 className='mt-5'>여기는 글쓰기 창임!</h3>
      <FloatingLabel className='container mt-5' controlId="floatingTextarea2" label="Comments">
        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
      </FloatingLabel>
    </div>
  );
}

export default Write;