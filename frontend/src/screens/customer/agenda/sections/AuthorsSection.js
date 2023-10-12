import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Author from '../../../../components/Author';
import Row from 'react-bootstrap/Row';

const authors = [
  {
    id: 1,
    name: 'Amaia Ariztegui',
    image: '/images/authors/amaia.jpg',
  },
  {
    id: 2,
    name: 'Dr. Arianna Bonato',
    image: '/images/authors/amaia.jpg',
  },
  {
    id: 3,
    name: 'Bárbara Munar',
    image: '/images/authors/amaia.jpg',
  },
  {
    id: 4,
    name: 'Dra. Carol Strate',
    image: '/images/authors/amaia.jpg',
  },
  {
    id: 5,
    name: 'Dra. Miriam Al Adib Mendiri',
    image: '/images/authors/amaia.jpg',
  },
  {
    id: 6,
    name: 'Eva Alba',
    image: '/images/authors/amaia.jpg',
  },
];

const AuthorsSection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 993 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 992, min: 769 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 577 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 576, min: 351 },
      items: 2,
    },
    smmobile: {
      breakpoint: { max: 350, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="authors section">
      <Container fluid="lg">
        <Row className="mb-4 text-center">
          <h1 className="title title-md-section">Autoras</h1>
          <p className="paragraph">
            Algunos de los textos Vívete que encontrarás pertenecen a estas
            mujeres
          </p>
        </Row>
        <Carousel responsive={responsive}>
          {authors.map((author) => (
            <div key={author.id}>
              <Author {...author} />
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default AuthorsSection;
