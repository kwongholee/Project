import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import bg from '../img/introduce1.png';
import reactImage from '../img/react.png';
import nodeImage from '../img/Node-js.png';

function Introduce() {
  var navigate = useNavigate();

  return(
    <div>
      <div>
        <h3 className="mt-5"><strong>로그인한 사람 닉네임(로그인 안 되어있으면 user로 표기)</strong>, hello~!! ^^</h3>
        <div className='mt-5 main-bg m-auto' style={{backgroundImage: 'url(' + bg + ')'}}></div>
        <p><i>➱이거는 내 시그니처 핑구 사진 ㅎ</i></p>
        <h4 className="mt-5">여기는 이광호가 만든 블로그에 대한 소개페이지임!</h4>
        <h5>👏👏(이모티콘 누르면 박수 소리남)👏👏</h5>
        <p style={{marginTop:'200px'}}>목차는 이렇게임</p>
        <div className="container">
          <ol>
            <li>왜 이 페이지를 만들게 됐는가?</li>
            <li>이 페이지에는 어떤 기능들이 있는가?</li>
            <li>내 멋대로 적은 소개말</li>
          </ol>
        </div>
      </div>

      <div style={{marginTop:'400px'}}>
        <h5 className="mt-5"><strong>1. 이 페이지를 <ins>왜 만들게 됐는지</ins> 설명해드리겠음!</strong></h5>
        <p>(여기는 왼쪽 정렬 + 오른쪽 사진)</p>
        <p>일단 시작은 이거임</p>
        <h5>방학 때 <strong>할 게 없어도 너무 없었음</strong> + <strong>자기 계발 시간</strong>이 필요했음</h5>
        <p>'아니 대체 할 게 얼마나 없으면 공부를 하냐?' 이런 질문을 하도 마니 하길래 잠시 내 상황 설명 좀 하겠음</p>
        <p>본인 2023/01/10 ~ 2023/01/13 기간에 4일 동안 고등학교 동창들이랑 일본 여행을 가야 했음 <a href="https://www.instagram.com/p/CnV-uf7vU_nNguYhaFrAsmURAZ83Yp7gxd1Mt00/?hl=ko">(인스타링크)</a></p>
        <p>일본 갈 짐 챙기고 오랜만에 본가도 가있을 겸해서 1월 초부터 설 연휴 때까지 대구 내려가있어야 했음 대략 3주 정도?</p>
        <p>근데 문제가 생김</p>
        <h3>본가에 <ins>데스크탑이 없음!!</ins> 있는 거라고는 내 스마트폰이랑 노트북 밖에 없음...</h3>
        <p>알 사람들은 알겠지만 난 폰으로 겜을 잘 안하고 sns를 하긴 하지만 그것만 붙잡고 있을 수는 없었음</p>
        <p>그래서 생각난게 <strong><ins>공부</ins></strong>임</p>
      </div>

      <div style={{marginTop:'200px'}}>
        <p>(여기는 오른쪽 정렬 + 왼쪽 사진)</p>
        <p>사실 작년부터 웹 공부를 하긴 했지만 큰 발전이 없었음</p>
        <p>아는 것도 크게 없고 공부하긴 했지만 머리에 남는게 얼마 없었음</p>
        <p>프로젝트도 해보고, 스터디도 들어보고 등등... 해봤지만 큰 효과가 없었음</p>
        <p>그래서 원인을 분석해봤음 내 결론은 다음과 같음</p>
        <h4>마음가짐의 부족!</h4>
        <p>알 사람들은 알지만 내가 마음 먹으면 계획짜고 실행에 옮기는 건 크게 어렵지가 않음</p>
        <p>근데 핑계란 핑계는 다 대고 공부하기 싫어서 피하기 급급했음</p>
        <p>그래서 이번에 정말 크게 한 번 마음 먹고 <strong>공부를 하기로 결정했음!</strong></p>
      </div>
      
      <div style={{marginTop:'200px'}}>
        <p>(여기는 왼쪽 정렬 + 오른쪽 사진)</p>
        <p>사실 이전부터 풀스택에 관심이 있던건 아니였음</p>
        <p>그냥 보면서 '우와..'하는 정도고 풀스택하는 건 복잡하고 어려운거 아니까 고민됐음</p>
        <p>근데 막상 1-2에 티지에서 <strong><ins>리액트</ins></strong> 강의 하는 거 들어보니까 재밌는 거임!</p>
        <p>그래서 프론트에도 관심을 가지게 됐음(원래 노드하면서 백엔드에는 관심이 있었고 ㅇㅅㅇ)</p>
        <h5>그래서 결론은? <strong>난 현재 <ins>풀스택</ins>을 지원하고 있다~~</strong></h5>
      </div>

      <div style={{marginTop:'200px'}}>
        <h3>서론이 좀 길긴했는데 여튼! 이 페이지는 내 <strong>공부용 + 실습용 + 포트폴리오용</strong>으로 제작한 페이지다 이말인거지~~</h3>
      </div>

      <div style={{marginTop:'400px'}}>
        <h5><strong>2. 이 페이지에는 <ins>어떤 기능</ins>들이 있는지 얘기해드리겠음</strong></h5>
        <p>이 페이지에는 매우 많은 기능들이 있음</p>
        <p>오죽하면 기능이 너무 많아서 프론트만 구현하는데도 개오래 걸렸음...</p>
        <p>근데 이걸 한 페이지 안에 담기에는 내용이 ㄹㅇ 너무 많음</p>
        <p>그래서 밑에 주요 기능들에 대한 목록이 있음</p>
        <p>기능 이름을 클릭하면 해당 기능을 설명해주는 페이지로 넘어갈 거임 ㅇㅋ? 그럼 소개는 여기서 끝!</p>
      </div>

      <div style={{marginTop:'200px'}}>
        <h4>기능 리스트</h4>
        <ul className="container">
          <li><a href="/introduce/profile">개인프로필 페이지</a></li>
          <li><a href="/introduce/write">글작성 및 게시판 페이지</a></li>
          <li><a href="/introduce/feed">게시물(피드) 페이지</a></li>
        </ul>
      </div>

      <div style={{marginTop:'400px'}}>
        <h5><strong>3. 내 멋대로 적는 <ins>이광호 블로그의 소개말</ins></strong></h5>
        <del>아니 소개글 왤케 길어졌지 원래는 임펙트 있게 '딱'하고 끝낼려고 했는데...</del>
        <p>어떰 내 첫 풀스택 체험으로 만든 페이지?</p>
        <p>솔직히 큰 기대 안하고 만들었던 페이지이기는 한데 생각보다 잘 만들어서 나도 놀람 ㅎㅎ</p>
        <p>이번에는 React랑 Node.js 사용했지만 다른 언어들도 체험해보고 내 포트폴리오를 채워보겠음!</p>
        <div>
          <img style={{display: 'block'}} src={reactImage} className="sideImage" id="reactImage"></img>
          <img style={{display: 'block'}} src={nodeImage} className="sideImage" id="nodeImage"></img>
        </div>
        <p>오류가 많을 수도 있음 미리 사과함 죄송..</p>
        <p>⇩ 내가 짠 코드를 보고싶다면? ⇩</p>
        <a href="https://github.com/kwongholee/Project/tree/master/server">이번에 짠 코드 오픈!</a>
      </div>
    </div>
  );
}

export default Introduce;