import React from 'react';
import Button from 'react-bootstrap/Button';

const ActionButtonAlt = ({ text, link, type }) => {
  return (
    <Button href={link} className={type} target="_blank">
      {text}
    </Button>
  );
};

export default ActionButtonAlt;
