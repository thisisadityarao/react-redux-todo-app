import React from 'react';
import styled from "styled-components/macro";

const Wrapper = styled.div`
  width: 100%;
  max-width: 768px;
  min-width: 360px;
  margin: 0 auto;
`;

const Header = styled.header`
  width: 100%;
  background: pink;

  & h1 {
    text-align: center;
    margin: 0;
    padding: 1rem 0.5rem;
  }
`;

function App() {
  return (
    <Wrapper>
      <Header>
        <h1>React Redux To-Do App</h1>
      </Header>
    </Wrapper>
  );
}

export default App;
