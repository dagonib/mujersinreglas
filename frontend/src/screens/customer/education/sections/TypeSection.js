import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { listProposals } from '../../../../actions/proposalActions';

// React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Funcions
import { filterItems } from '../../../../maths/Functions';

// Componente
import Proposal from '../../../../components/Proposal';

const TypeSection = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('Charla');
  const [btns, setBtns] = useState([
    { id: 1, type: 'Charla', color: '#f5f0ed' },
    { id: 2, type: 'Taller', color: '#f5f0ed' },
    { id: 3, type: 'Ciclo', color: '#f5f0ed' },
    { id: 4, type: 'Cápsula', color: '#f5f0ed' },
  ]);

  // Global data: talks
  const proposalList = useSelector((state) => state.proposalList);
  const { loading, error, proposals } = proposalList;

  useEffect(() => {
    dispatch(listProposals());
  }, [dispatch]);

  useEffect(() => {
    handleClick('Charla', 1);
  }, []);

  const handleClick = (type, id) => {
    setType(type);
    setBtns((prevBtns) =>
      prevBtns.map((btn) => {
        if (btn.id === id) {
          return { ...btn, color: '#d4c6bd' };
        } else {
          return { ...btn, color: '#f5f0ed' };
        }
      })
    );
  };

  const proposalsFilter = proposals && filterItems(proposals, type);

  return (
    <section className="type section">
      <Container fluid="sm">
        <Row className="type__row">
          {btns.map((btn) => (
            <button
              key={btn.id}
              className="main-btn"
              style={{ backgroundColor: btn.color }}
              onClick={() => handleClick(btn.type, btn.id)}
            >
              {btn.type === 'Taller'
                ? `${btn.type}es`
                : btn.type === 'Charla'
                ? `${btn.type}s`
                : `${btn.type}`}
            </button>
          ))}
        </Row>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {proposalsFilter?.map((proposal) => (
          <Proposal key={proposal._id} {...proposal} />
        ))}
      </Container>
    </section>
  );
};

export default TypeSection;
