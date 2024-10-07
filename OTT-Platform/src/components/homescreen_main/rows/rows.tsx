import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import instance from '../myaxios';

// Custom arrow components for the slider
function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'gray',
        borderRadius: '50%',
        right: '10px',
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'gray',
        borderRadius: '50%',
        left: '10px',
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

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
        const response = await instance.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  // Slider settings with custom arrows
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Custom next arrow button
    prevArrow: <PrevArrow />, // Custom previous arrow button
    lazyLoad: 'ondemand' as 'ondemand', // Explicitly set the lazyLoad type
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div style={{ margin: '20px' }}>
      <h2 style={{ color: 'white', padding: '30px' }}>{title}</h2>

      <div className="row__container">
        {movies.length > 0 ? (
          <Slider {...settings}>
            {movies.map((movie) => (
              <div key={movie.id} style={{ padding: '10px' }}>
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
        ) : (
          <div style={{ color: 'white' }}>Loading movies...</div>
        )}
      </div>

      {/* View More link */}
      <Link to={`/view-more/${title}`}>
        <p style={{ color: 'white', padding: '10px', cursor: 'pointer' }}>View More</p>
      </Link>
    </div>
  );
};

export default Row;
