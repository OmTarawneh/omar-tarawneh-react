import React from 'react';
import Input from 'components/Input';
import { Wrapper, Form, Paragraph, Button } from 'styles/auth.styles';
import Header from 'components/Header';

function SignIn() {
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <>
      <Header />
      <Wrapper>
        <h1>Sign In</h1>
        <Paragraph>Need an Account?</Paragraph>
        <Form onSubmit={handleSubmit}>
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

export default SignIn;
