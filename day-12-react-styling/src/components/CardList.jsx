import Row from 'react-bootstrap/Row';
import SkillCard from './SkillCard';

function CardList() {
  let skills = [
    {title: "JS", desc: "lorem ipsum"},
    {title: "CSS", desc: "lorem ipsum"},
    {title: "React", desc: "lorem ipsum"},
    {title: "Database", desc: "lorem ipsum"},
    {title: "Express", desc: "lorem ipsum"},
  ]

  return (
    <Row xs={1} md={5} className="g-4">
      {skills.map((item, index) => (
        <SkillCard key={index} title={item.title} desc={item.desc} />
      ))}
    </Row>
  );
}

export default CardList;