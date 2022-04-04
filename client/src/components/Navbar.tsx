import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBox from "./common/SearchBox";

interface Props {
  searchQuery: string;
  onSearch: (searchQuery: string) => void;
}

function Navbar({ searchQuery, onSearch }: Props) {
  return (
    <Container>
      <Logo src="netflix-logo.png" />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/?category=serie">Series</Link>
        <Link to="/?category=movie">Movies</Link>
      </Nav>
      <SearchBox value={searchQuery} onChange={onSearch} />
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  align-items: center;
  height: 14vh;
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
