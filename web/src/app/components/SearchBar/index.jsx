import React from "react";

//antd
import { Input } from "antd";

//styled component
import styled from "styled-components";

const { Search } = Input;

const SearchBar = ({ onChange, value }) => {
  return (
    <Wrapper>
      <Search
        autoComplete="off"
        placeholder="input search text"
        style={{ width: 300 }}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px;
  text-align: right;
`;

export default SearchBar;
