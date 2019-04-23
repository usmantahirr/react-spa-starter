import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

const DualColumnTemplate = ({ children }) => (
  <Container>
    <Row>
      <Col md={6}>{children.col1}</Col>
      <Col md={6}>{children.col2}</Col>
    </Row>
  </Container>
);

DualColumnTemplate.propTypes = {
  children: PropTypes.shape({
    col1: PropTypes.node,
    col2: PropTypes.node,
  }).isRequired,
};

export default DualColumnTemplate;
