import React from "react";
import styled from "styled-components";

interface Props {
  value: string;
  onChange: (searchQuery: string) => void;
}

function SearchBox({ value, onChange }: Props) {
  return (
    <Container>
      <i id="search" className="fa-solid fa-magnifying-glass" />
      <SearchInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
      />
      <i
        id="clear"
        className="fa-solid fa-xmark"
        onClick={() => onChange("")}
      ></i>
    </Container>
  );
}

export default SearchBox;

const Container = styled.div`
  position: relative;
  width: 200px;
  grid-column: 4;

  & i#search {
    position: absolute;
    top: 9px;
    left: 9px;
  }
  & i#clear {
    position: absolute;
    top: 8px;
    right: 14px;
    font-size: 20px;
    :hover {
      cursor: pointer;
    }
  }
`;

const SearchInput = styled.input`
  color: #fff;
  height: 32px;
  outline: none;
  padding-left: 32px;
  border-radius: 8px;
  border-color: #fff;
  background-color: transparent;
`;
