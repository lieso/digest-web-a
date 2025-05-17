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
  font-size: 18px;
`;

interface DigestProps {
  digest: any;
}

const findArrayInObject = (obj: any, keyToFind: string): any[] | null => {
  if (!obj || typeof obj !== 'object') return null;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key === keyToFind && Array.isArray(obj[key])) {
        return obj[key];
      } else if (typeof obj[key] === 'object') {
        const result = findArrayInObject(obj[key], keyToFind);
        if (result) return result;
      }
    }
  }
  return null;
};

export const Digest: React.FC<DigestProps> = ({ digest }: any) => {
  console.log(JSON.stringify(digest, null, 2));

  let entries = findArrayInObject(digest, 'entries');

  if (!entries) {
    entries = findArrayInObject(digest, 'news_submission');
  }

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

export default Digest;
