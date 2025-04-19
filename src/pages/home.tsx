/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

import { APP_NAME, routes } from '@/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Logo = styled.h1`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 2rem;
  color: #333;
`;

const SearchInput = styled.input`
  width: 50%;
  max-width: 600px;
  padding: 1rem;
  font-size: 1.5rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0073e6;
  }
`;

export const HomePage: React.FC = () => {
  return (
    <Container>
      <Logo>{APP_NAME}</Logo>
      <SearchInput type="text" placeholder="Search..." />
    </Container>
  );
};

export default HomePage;
