import React from 'react';

interface DigestProps {
  digest: any;
}

export const Digest: React.FC<DigestProps> = ({ digest }) => {
  return (
    <div style={{ color: 'blue', fontSize: '20px' }}>
      digest works!

      {JSON.stringify(digest)}
    </div>
  );
};

export default Digest;

