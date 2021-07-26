import React from 'react';
import Input from 'components/Input';
import { Wrapper, Form, Paragraph, Button } from 'styles/auth.styles';
import Header from 'components/Header';

function Signup() {
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <>
      <Header />
      <Wrapper>
        <h1>Sign Up</h1>
        <Paragraph>Have an Account?</Paragraph>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Username" onChange={handleChange} />
          <Input type="text" onChange={handleChange} placeholder="Email" />
          <Input
            type="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <Button type="submit">Sign In</Button>
        </Form>
      </Wrapper>
    </>
  );
}

export default Signup;
