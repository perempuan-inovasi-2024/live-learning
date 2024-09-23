import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import logo from "../assets/react.svg"

function SkillCard({ title, desc }) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SkillCard;
