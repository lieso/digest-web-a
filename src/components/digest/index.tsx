/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

import { Digest, Entries } from '@/types/digest';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Entry = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.a`
  font-size: 18px;
`;

interface DigestProps {
  digest: any;
}

export const DigestApp: React.FC<DigestProps> = ({ digest }: any) => {
  console.log(JSON.stringify(digest, null, 2));

  const entries = digest.digest.entries;
  console.log('entries', entries);

  if (!entries) {
    return (
      <Container>
        <p>Digest not found.</p>
      </Container>
    );
  }

  return (
    <Container>
      {entries.map((entry, index) => (
        <Entry key={index}>
          <Title>
            {entry.article_title}
          </Title>
        </Entry>
      ))}
    </Container>
  );
};

export default DigestApp;
