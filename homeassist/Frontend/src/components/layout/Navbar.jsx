import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  background-color: var(--secondary-color);
  padding: 1rem 2rem;
  box-shadow: var(--shadow);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: var(--primary-color);
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">HomeAssist</Logo>
        <NavLinks>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/integrations">Integrations</NavLink>
          <NavLink to="/automations">Automations</NavLink>
          <NavLink to="/security">Security</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
