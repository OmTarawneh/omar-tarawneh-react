import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Input from 'components/Input';
import { Wrapper, Form, Button, Paragraph } from 'components/Auth/auth.styles';

function Auth() {
  const location = useLocation();
  const history = useHistory();
  const [title, setTitle] = useState('Sign in');
  const [question, setQuestion] = useState('Need an Account?');
  const { pathname: path } = location;

  const handleChange = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    if (path === '/login') history.push('/signup');
    else history.push('/login');
  };
  useEffect(() => {
    if (path === '/signup') {
      setTitle('Sign Up');
      setQuestion('Have an Account?');
    } else {
      setTitle('Sign In');
      setQuestion('Need an Account?');
    }
  }, [path]);
  return (
    <Wrapper>
      <h1>{title}</h1>
      <Paragraph onClick={handleClick}>{question}</Paragraph>
      <Form onSubmit={handleSubmit}>
        {path === '/signup' ? (
          <Input placeholder="Username" onChange={handleChange} />
        ) : (
          <></>
        )}
        <Input type="text" onChange={handleChange} placeholder="Email" />
        <Input type="password" onChange={handleChange} placeholder="Password" />
        <Button type="submit">Sign In</Button>
      </Form>
    </Wrapper>
  );
}

export default Auth;
