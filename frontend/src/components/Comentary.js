import Row from 'react-bootstrap/Row';

export const Comentary = ({ text, author }) => {
  return (
    <Row className="comentary">
      <p className="paragraph">{text}</p>
      <p className="paragraph author">{author}</p>
    </Row>
  );
};
