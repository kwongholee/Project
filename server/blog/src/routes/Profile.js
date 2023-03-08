import { Button } from "react-bootstrap";

function Profile() {
  return(
    <>
      <div style={{display:'block'}} className="mt-5">
        <p style={{display:'inline', marginRight:'20px'}}>회원가입 때 설정한 프로필 사진</p>
        <Button variant="success">변경</Button>
      </div>
      <div style={{display:'block'}} className="mt-5">
        <p style={{display:'inline', marginRight:'20px'}}>회원가입 때 설정한 이름</p>
        <Button variant="success">변경</Button>
      </div>
      <div style={{display:'block'}} className="mt-5">
        <p style={{display:'inline', marginRight:'20px'}}>회원가입 때 설정한 닉네임</p>
        <Button variant="success">변경</Button>
      </div>
      <div style={{display:'block'}} className="mt-5">
        <p style={{display:'inline', marginRight:'20px'}}>회원가입 때 설정한 아이디</p>
        <Button variant="success">변경</Button>
      </div>
      <div style={{display:'block'}} className="mt-5">
        <p style={{display:'inline', marginRight:'20px'}}>회원가입 때 설정한 3줄 요약</p>
        <Button variant="success">변경</Button>
      </div>
    </>
  );
}

export default Profile;