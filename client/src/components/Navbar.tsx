import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Logo src="netflix-logo.png" />
      <Nav>
        <ul>
          <li>Home</li>
          <li>Series</li>
          <li>Movies</li>
        </ul>
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
  & ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  & li {
    list-style-type: none;
    color: #fff;
  }
`;
