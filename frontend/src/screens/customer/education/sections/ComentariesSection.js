import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import { Comentary } from '../../../../components/Comentary';

const comentaries = [
  {
    text: 'Agradezco enormemente tu generosidad y cariño compartido durante la charla. Disfruté mucho, fue muy enriquecedora. El dossier que nos ofreciste con toda la información sobre el climaterio es un valioso recurso. A pesar de haber leído sobre la menopausia durante años, he adquirido nuevos conocimientos.',
    author: 'Marta',
  },
  {
    text: 'En tu charla, la parte médica me resultó sumamente interesante, ya que tengo un conocimiento limitado sobre cómo afectará mi vida la entrada en menopausia, desde una perspectiva hormonal. Te agradezco sinceramente por compartir tu experiencia y tus conocimientos, muchas gracias.',
    author: 'Irene',
  },
  {
    text: 'Carolina, te agradezco profundamente la charla. En primer lugar, por transmitir este conocimiento de manera tan cariñosa y por ofrecer información tan completa que abarca aspectos sociales, individuales, físicos, emocionales, cotidianos, recetas, ejercicios y muchos otros elementos que nos inspiran a conectarnos con nuestro cuerpo y brindarnos el tiempo y el espacio que necesitamos. Esta experiencia me ha proporcionado nuevos aprendizajes, ha revivido otros, y, sobre todo, me ha llevado a reflexionar sobre cómo disfrutar de esta etapa personalmente y cómo compartir esta perspectiva de forma comunitaria.',
    author: 'Candil',
  },
  {
    text: 'Gracias Carolina por organizar esta charla y transmitir la información tan útil para nuestro autoconocimiento, bienestar y gozo. Y también por hacerlo tan bello. Tus saberes y labor me aportan muchísimo personal y profesionalmente. Ojalá en los centros educativos de primaria y secundaria se faciliten espacios para abordarlo así. Todo se andará.',
    author: 'Eva',
  },
  {
    text: 'Tener conocimiento sobre el climaterio y comprender los cambios que ocurren en este proceso me permite tener una visión más completa de mí misma y de las demás. Desde esta perspectiva, considero que es un valioso complemento para mi trabajo. La charla de Carolina me ha brindado conocimientos sobre esta fase, recursos para el autocuidado, espacio para la reflexión y ha despertado mi interés en continuar investigando sobre el tema. Ha sido un punto de partida significativo para mí. Agradezco tu dedicación en la formación y visibilización.',
    author: 'Soraya',
  },
];

const ComentariesSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="comentaries">
      <Container fluid="sm">
        <Col className="hero-education__alert">
          <p>
            Si no encuentras la propuesta educativa que estabas buscando,
            contacta conmigo: agendaclimaterio@gmail.com
          </p>
        </Col>
        <Col className="comentaries__title">
          <h1>Ellas dicen</h1>
        </Col>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {comentaries.map((comentarie) => (
            <Carousel.Item key={comentarie.author}>
              <Comentary {...comentarie} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default ComentariesSection;
