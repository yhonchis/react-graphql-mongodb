import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 72px;
  background: #fff;
  border-bottom: 1px solid #dddddd;
  color: #545454;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const Menu = styled.ul`
  margin-right: auto;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  list-style: none;
  margin: 0;
`;

const Item = styled.li`
  padding: 0 1rem;
  color: #000000;
  font-size: 0.85rem;
  font-weight: 300;
  cursor: pointer;
  & a {
    transition: all 0.3s;
  }
  & a:hover {
    color: #035ce6;
  }
`;

const Navbar = ({ logo }) => {
  return (
    <Nav>
      <Img src={logo} alt="Messages Lists" />
      <Menu>
        <Item>
          <Link to="/">Messages</Link>
        </Item>
        <Item>
          <Link to="/new-message">Add Messages</Link>
        </Item>
      </Menu>
    </Nav>
  );
};

export default Navbar;
