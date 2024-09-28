// Row.tsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}   
  
interface RowProps {
  title: string;
  fetchUrl: string;
  myList: { id: number; title: string }[];
  handleAddToMyList: (movieId: number, movieTitle: string) => void;
}

const Row: React.FC<RowProps> = ({ title, fetchUrl, myList, handleAddToMyList }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2 style={{ color: 'white', padding: '30px' }}>{title}</h2>

      <div className="row__container">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={movie.title}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      borderRadius: '7px',
                    }}
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  />
                </Card>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* View More link */}
      <Link to={`/view-more/${title}`}>
        <p style={{ color: 'white', padding: '10px', cursor: 'pointer' }}>View More</p>
      </Link>
    </div>
  );
};

export default Row;
