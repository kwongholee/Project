import { Container } from "react-bootstrap";
import bg from '../img/introduce2.png';

function Introduce() {
  return(
    <div>
      <div className='main-bg m-auto' style={{backgroundImage: 'url(' + bg + ')'}}></div>
    </div>
  );
}

export default Introduce;