import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, List, Title } from './Header.style';

function Header() {
  return (
    <>
      <Wrapper>
        <Title>conduit</Title>
        <nav>
          <List>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/signin">
                Sign in
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/signup">
                Sign up
              </NavLink>
            </li>
          </List>
        </nav>
      </Wrapper>
    </>
  );
}

export default Header;
