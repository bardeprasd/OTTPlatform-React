// MovieDetailView.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

interface MovieDetailViewProps {
  // Props, if any
}

const MovieDetailView: React.FC<MovieDetailViewProps> = () => {
  // Access movie ID from the URL
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Movie Detail View for ID: {id}</h2>
      {/* Add more details based on the movie ID */}
    </div>
  );
};

export default MovieDetailView;
