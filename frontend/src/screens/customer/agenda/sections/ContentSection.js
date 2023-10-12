import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContentSection = () => {
  return (
    <section className="content section">
      <Container fluid="lg">
        <Row className="mb-4">
          <h1 className="title title-md-section">
            Qué encontrarás en la agenda
          </h1>
        </Row>
        <Row className="features">
          <Col className="feature">
            <i className="icon bi bi-brightness-alt-high-fill"></i>
            <article className="">
              <span>Bienvenida</span> al cuidado de Núria Beitia Hernández,
              psicóloga, docente, educadora menstrual y sexual.
            </article>
          </Col>
          <Col className="feature">
            <i className="icon bi bi-envelope-paper-heart"></i>
            <article className="">
              <span>Carta de la autora</span>. Este año te escribo sobre
              "Ritualizar la entrada en menopausia".
            </article>
          </Col>
          <Col className="feature">
            <i className="icon bi bi-calendar2-week"></i>
            <article className="">
              <span>Semana vista</span> a dos páginas con recuadros para apuntar
              las horas y asuntos a atender. Indicación de las fases lunares y
              de las fechas conmemorativas relacionadas con mujeres y niñas.
            </article>
          </Col>
          <Col className="feature">
            <i className="icon bi bi-journals"></i>
            <article className="">
              <span>Espacios semanales</span> donde escribir o dibujar a modo de
              diario íntimo.
            </article>
          </Col>
          <Col className="feature">
            <i className="icon bi bi-calendar-heart-fill"></i>
            <article className="">
              <span>Registro semanal</span> donde escribir si has tenido alguna
              sensación física, emocional, psíquica o sexual atípica.
            </article>
          </Col>
          <Col className="feature">
            <i className="icon bi bi-journal-richtext"></i>
            <article className="">
              <span>40 textos literarios "Vívete"</span> con información y
              saberes escritos por mujeres terapeutas, científicas, activistas,
              sanadoras, profesionales de la salud, escritoras…
            </article>
          </Col>
          <Col className="feature">
            <i className="icon bi bi-clipboard2-pulse-fill"></i>
            <article className="">
              <span>Registro mensual</span> donde escribir la información
              relacionada con tus visitas médicas, terapias y autoexploraciones.
            </article>
          </Col>
          <Col className="feature">
            <i className="icon bi bi-moon-stars-fill"></i>
            <article className="">
              <span>"Relatos de luna"</span>. Hermosos relatos de mujeres que
              escriben desde la experiencia y la vivencia menopáusica y el
              climaterio.
            </article>
          </Col>
          <Col className="feature">
            <i className="icon bi bi-card-list"></i>
            <article className="">
              <span>Registro menstrual</span> del 2023-2024 si estás en la etapa
              perimenopáusica.
            </article>
          </Col>
          <Col className="feature">
            <i className="icon bi bi-journal-text"></i>
            <article className="">
              Hojas para la escritura de <span>"Mis reflexiones"</span>.
            </article>
          </Col>
          <Col className="feature">
            <i className="icon bi bi-book"></i>
            <article className="">Listado de libros recomendados.</article>
          </Col>
          <Col className="feature">
            <i className="icon bi bi-journal-plus"></i>
            <article className="">
              ¡Y muchas más utilidades que tú misma desvelarás!
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContentSection;
