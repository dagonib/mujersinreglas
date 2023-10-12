import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';
import { Comentary } from '../../../../components/Comentary';
import Row from 'react-bootstrap/Row';

const comentaries = [
  {
    text: 'Esta agenda es tan valiosa que no solo la quiero para mí, sino también para recomendarla a mis pacientes, especialmente aquellas que atraviesan la etapa del climaterio y la menopausia.',
    author: 'Dra. Anaheim Jordan',
  },
  {
    text: 'La agenda específica para mujeres en la etapa de la menopausia me resulta muy novedosa e inspiradora.',
    author: 'Dra. MaGloria GuruKarm Borras-Boneu',
  },
  {
    text: 'La agenda que han creado me resulta interesante y muy positiva, pues se enfoca en aspectos esenciales para las mujeres en la etapa de la menopausia, proporcionando valiosos recursos para su bienestar y una mejor calidad de vida.',
    author: 'Dra. Carme Valls-Llobet',
  },
  {
    text: '¡Me ha encantado esta novedosa agenda para las mujeres en climaterio! La recomendaré en una publicación con sugerencias de recursos y lecturas para regalar en Navidad.',
    author: 'Dra. Míriam Al Adib Mendiri',
  },
  {
    text: 'La primavera me brindó la oportunidad de conocer a Carolina y su creación.  A través de su agenda, descubrí lo que mi cuerpo llevaba tiempo gritándome desde el silencio.',
    author: 'Dra. Mónica Molner',
  },
  {
    text: 'A medida que se acerca el final del año, quiero agradecer la creación de la agenda Mujer Sin Reglas que me ha ido genial. La recomiendo sin dudarlo.',
    author: 'Dra. Emma Esteve',
  },
];

const DoctorsSaySection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="doctorsSay section">
      <Container fluid="lg">
        <Row className="mb-4">
          <h1 className="title title-md-section">Las doctoras opinan</h1>
        </Row>
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

export default DoctorsSaySection;
