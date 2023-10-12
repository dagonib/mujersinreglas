import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UseGuideScreen = () => {
  return (
    <section className="information">
      <Container fluid="lg">
        <Row className="information__header">
          <a href="/agenda" className="information__header--btn main-btn">
            Volver
          </a>
          <h1 className="information__header--title">Guía de Uso</h1>
        </Row>
        <Row className="information__content">
          <Col className="information__content--item">
            <p className="information__content--text mb-1">
              En la agenda encontrarás varios espacios que invitan a la
              escritura y al dibujo. Te los explico…
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">Portada</h4>
            <p className="information__content--text mb-1">
              En primer lugar, tienes la ilustración de la portada sin color por
              si quieres tener tu momento creativo y colorearla a tu gusto. ¡Me
              encantará que compartas conmigo tu creación!
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">Semana vista</h4>
            <p className="information__content--text mb-1">
              Cada comienzo de semana tienes un espacio:{' '}
              <span>"Para esta semana" </span>
              donde apuntar brevemente lo que sabes que tienes que atender sin
              falta. Por ejemplo “Pedir visita con la fisioterapeuta”.
            </p>
            <p className="information__content--text mb-1">
              Verás que cada día de la semana tiene dibujadas{' '}
              <span>tres casillas </span>
              horizontales. En la primera pones la hora, en la segunda el asunto
              y en la tercera el chek o la cruz según si has podido realizar o
              no el asunto que apuntaste. Seguidamente tienes espacio para
              escribir un poco más sobre lo que necesites agendar o recordar de
              ese día.
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">Registro semanal</h4>
            <p className="information__content--text mb-1">
              Te invito a dedicar unos minutos semanales para el registro
              consciente de todos aquellos aspectos que tengan que ver con tu
              bienestar y tu salud. Hacerlo es una poderosa herramienta de
              autoconocimiento y autocuidado. Además, será útil para exponer lo
              que te pasa a tu profesional de la salud en el caso de necesitar
              una consulta por algo que hayas detectado que es inusual o molesto
              en ti.
            </p>
            <p className="information__content--text mb-1">
              Lo primero que encontrarás será la tabla de “Registro semanal”.
              Aquí escribe las sensaciones y manifestaciones de tu cuerpo. Por
              ejemplo, si has tenido calores nocturnos, migraña, etc.
            </p>
            <p className="information__content--text mb-1">
              En la semana vista están los dibujos de la luna correspondiente a
              sus cuatro grandes fases. En el recuadro de registro semanal,
              tienes el espacio para dibujar la luna correspondiente a aquello
              que has sentido o vivido como atípico o recurrente en ti.
            </p>
            <p className="information__content--text mb-1">
              Tienes un espacio para recoger por escrito los “Placeres de esta
              semana”. Pueden ser palabras sueltas o pequeños relatos en los que
              conectes con la gratitud por aquello que hayas vivido esa semana.
            </p>
            <p className="information__content--text mb-1">
              "Sentimiento predominante” te hará reflexionar. Puede que sientas
              rabia, desazón, plenitud o quizás alegría. Todo está bien, no
              busques pensar demasiado. Puedes escribir una palabra o dibujar
              sin juicio.
            </p>
            <p className="information__content--text mb-1">
              Si en algún momento necesitas ayuda terapéutica, porque un
              sentimiento te sobrepasa, cuenta con la ayuda de un profesional de
              la salud.
            </p>
            <p className="information__content--text mb-1">
              El espacio “Notas” es para describir si has tenido alguna
              ocurrencia en forma de proyecto creativo, si tienes alguna
              necesidad pendiente por cubrir, si has comenzado algún hábito
              nuevo, etc.
            </p>
          </Col>

          <Col className="information__content--item">
            <h4 className="information__content--title">Registro mensual</h4>
            <p className="information__content--text mb-1">
              En la última hoja correspondiente al mes en cuestión, encontrarás
              un cuadro donde podrás dejar constancia de los resultados de tu
              autoexploración, tus visitas médicas o terapéuticas, medicación
              y/o suplementos. También apunta tu peso corporal ya que, para
              muchas, esta es una etapa "gatillo" en la que se pueden
              desencadenar trastornos en la conducta alimentaria que haga que
              cojamos algo de peso de más.
            </p>
          </Col>
          <Col className="information__content--item">
            <h4 className="information__content--title">
              Registro anual de tu menstruación (específico para las que aún
              tienen sangrados)
            </h4>
            <p className="information__content--text mb-1">
              Tienes una tabla al final de la agenda donde registrar todos tus
              sangrados del año anterior y del que comienza. Así puedes ver a
              vista rápida cuándo has sangrado y cuándo no. Transcurridos más de
              12 meses sin sangrado alguno, podrás determinar la fecha en la que
              llegó a ti tu menopausia un año atrás.
            </p>
          </Col>

          <Col className="information__content--item">
            <h4 className="information__content--title">Pendientes</h4>
            <p className="information__content--text mb-1">
              Seguro que algunas cosas no las has podido concretar durante el
              año 2024. Nos pasa a todas/os/es y ésto no va de propósitos, va de
              acordarnos (o no) de si queremos atender algún asunto que nos
              quedó rondando por la cabeza. Tienes una tabla donde escribir los
              asuntos: “Rapidito” “Sin prisa pero sin pausa” “Con la calma”.
            </p>
          </Col>

          <Col className="information__content--item">
            <h4 className="information__content--title">Mis reflexiones</h4>
            <p className="information__content--text mb-1">
              La agenda MSR es un punto de partida. Una invitación a prolongar
              tus relatos, tu descripción de los placeres de tu semana o de tus
              emociones predominantes en las páginas de “Mis reflexiones” o en
              una libreta en blanco si lo deseas. Es una herramienta para tomar
              consciencia de qué puedes recoger de ti semana a semana. Sin
              juicios, sin expectativas, sin frustraciones.
            </p>
          </Col>

          <Col className="information__content--item">
            <p className="information__content--text mb-1 m-0">
              Que disfrutes mucho de tu agenda 2024.
            </p>
            <p className="information__content--text mb-1 m-0">Te acompaño</p>
            <p className="information__content--text mb-1 m-0">
              Carolina Ackermann Barreiro
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UseGuideScreen;
