import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addDecimals } from '../maths/Functions.js';
// Components
import Icon from './Icon';
import ActionButtonAlt from './ActionButtonAlt';
import Button from 'react-bootstrap/esm/Button';
import { useEffect, useState } from 'react';

// Fecha Days
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/es';
dayjs.locale('es');

export const Event = ({
  type,
  name,
  description,
  date,
  timeStart,
  timeEnd,
  place,
  addres,
  price,
  organizer,
  inscription,
  link,
}) => {
  dayjs.extend(updateLocale);
  dayjs.updateLocale('es', {
    month: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    weekdays: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ],
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (!link || /^\s*$/.test(link)) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, []);

  return (
    <Row className="event">
      <Col>
        <h5 className="event__type">{type}</h5>
      </Col>
      <Col className="event__info">
        <h4 className="event__info-name">{name}</h4>
        <p className="paragraph">{description}</p>
      </Col>
      <Col className="event__data">
        <Row>
          <div className="box">
            <Icon icon="bi bi-calendar-range" color="#3d5361" />

            {date === null ? (
              <p className="info">Fecha a determinar </p>
            ) : (
              <p className="info">
                {dayjs(date).format('dddd')}&nbsp;{dayjs(date).format('D')}
                &nbsp;{dayjs(date).format('MMMM')}
                &nbsp;{dayjs(date).format('YYYY')}
              </p>
            )}
          </div>
          <div className="box">
            <Icon icon="bi bi-clock" color="#3d5361" />
            {dayjs(timeStart).get('h') === 0 || timeStart === null ? (
              <p className="info">Hora a determinar</p>
            ) : (
              <p className="info">
                {dayjs(timeStart).format('HH:mm')}h&nbsp;a&nbsp;
                {dayjs(timeEnd).format('HH:mm')}h
              </p>
            )}
          </div>
          <div className="box">
            <Icon icon="bi bi-geo-fill" color="#3d5361" />
            <p className="info">
              {place}
              <br /> {addres}
            </p>
          </div>
          <div className="box">
            <Icon icon="bi bi-credit-card" color="#3d5361" />
            {price === -1 ? (
              <p className="info">A determinar</p>
            ) : price === 0 ? (
              <p className="info">Gratuito</p>
            ) : (
              <p className="info">{addDecimals(price)}€</p>
            )}
          </div>
          <div className="box">
            <Icon icon="bi bi-building" color="#3d5361" />
            <p className="info">{organizer}</p>
          </div>
        </Row>
        {link ? (
          <Button
            href={link}
            className="main-btn"
            target="_blank"
            disabled={isButtonDisabled}
          >
            {inscription}
          </Button>
        ) : (
          <p className="btn-disabled">{inscription}</p>
        )}
      </Col>
    </Row>
  );
};
