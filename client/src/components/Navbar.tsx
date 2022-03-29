import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Logo src="netflix-logo.png" />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/series">Series</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  height: 80px;
  display: flex;
`;

const Logo = styled.img`
  height: 40px;
  width: 200px;
  margin: 16px 0px;
`;

const Nav = styled.nav`
  margin-left: 40px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  & a {
    text-decoration: none;
    list-style-type: none;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
