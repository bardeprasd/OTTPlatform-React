// ViewMore.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ViewMore: React.FC = () => {
  // Access the row title from the URL parameters
  const { title } = useParams<{ title: string }>();

  return (
    <div>
      <h2 style={{ color: 'white', padding: '30px' }}>{title} - View More</h2>
      {/* Add more details or fetch additional data based on the row title */}
    </div>
  );
};

export default ViewMore;
