import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import LanguageSwitcher from '../molecules/languageSwitcher';
import LanguageContext from '../modules/language/context';

const DualColumnTemplate = ({ children }) => (
  <LanguageContext.Consumer>
    {({ language }) => (
      <Container>
        <Row>
          <Col md={4}>
            <LanguageSwitcher />
          </Col>
          <Col md={4}>
            <div data-testid={`title-${language}`}>
              <FormattedMessage id="title" defaultMessage="No Title" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>{children.col1}</Col>
          <Col md={6}>{children.col2}</Col>
        </Row>
      </Container>
    )}
  </LanguageContext.Consumer>
);

DualColumnTemplate.propTypes = {
  children: PropTypes.shape({
    col1: PropTypes.node,
    col2: PropTypes.node,
  }).isRequired,
};

export default DualColumnTemplate;
