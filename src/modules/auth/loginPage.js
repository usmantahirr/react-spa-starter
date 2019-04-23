import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from 'reactstrap';

import DualColumnTemplate from '../../shared/templates/dualColumnTemplate';

const LoginPage = ({ handleSubmit }) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const LoginForm = (
    <Form onSubmit={handleSubmit(formState.email, formState.password)}>
      <Label for="email">Email</Label>
      <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} />
      <Label for="password">Password</Label>
      <Input id="password" name="password" type="password" value={formState.password} onChange={handleChange} />
      <Button color="primary">Login</Button>
    </Form>
  );

  return (
    <DualColumnTemplate>
      {{
        col1: <div>This is half screen</div>,
        col2: LoginForm,
      }}
    </DualColumnTemplate>
  );
};

LoginPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginPage;
