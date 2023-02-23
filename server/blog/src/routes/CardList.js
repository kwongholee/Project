import { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CardList() {
  let navigate = useNavigate();
  let [feed, setFeed] = useState([1,2,3]);

  return(
    <div className="container mt-5">
      {
        feed.map((a,i) => {
          return(
            <Card className="mt-5">
              <Card.Img variant="top" src="holder.js/100px160" onClick={() => {navigate('/feed/:postId')}} />
              <Card.Body>
                <Card.Title>Card title {a}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          )
        })
      }
    </div>
  )
}

export default CardList;