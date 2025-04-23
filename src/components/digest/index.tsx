/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Entry = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.a`
  font-size: 24px;
`;

interface DigestProps {
  digest: any;
}

export const Digest: React.FC<DigestProps> = ({ digest }: any) => {
  return (
    <Container>
      { digest.entries.map(digest => (
        <Entry>
          <Title>
            {digest.link_title}
          </Title>
        </Entry>
      ))}
    </Container>
  );
};

export default Digest;

