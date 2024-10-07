import React, { useEffect, useState } from 'react';
import myaxios from '../myaxios';
import Myrequest from '../request';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './banner.css';

function Banner() {
  // State to store information about the currently displayed movie
  const [movie, setMovie] = useState({
    backdrop_path: '',
    original_name: '',
    title: '',
    overview: '',
  });

  // Fetch a random Netflix original movie when the component mounts
  useEffect(() => {
    async function fetchData() {
      const request = await myaxios.get(Myrequest.fetchNetflixOriginals);

      // Get a random index to select a movie from the results
      const randomIndex = Math.floor(Math.random() * request.data.results.length - 1);

      // Update the state with the selected movie
      setMovie(request.data.results[randomIndex]);
    }

    fetchData();
  }, []);

  console.log(movie);

  // Determine the movie name to display (original_name for TV shows, title for movies)
  let movieName = movie.original_name !== undefined ? movie.original_name : movie.title;

  return (
    <div
      className='banner'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        color: 'white',
        backgroundSize: 'cover',
        width: '100%',
        height: '758px',
      }}
    >
      {/* Movie Name */}
      <div className='banner-name' style={{ paddingLeft: '30px', paddingTop: '20px', width: '40%' }}>
        <h1 style={{ color: 'white', fontSize: '40px', paddingTop: '200px', paddingLeft: '20px' }}>{movieName}</h1>
      </div>

      {/* Play and MyList buttons */}
      <div className='banner-button' style={{ paddingLeft: '50px', paddingTop: '40px' }}>
        <button className='Buttn'>Play</button>
        <button className='Buttn'>MyList</button>
      </div>

      {/* Movie Overview */}
      <div className='banner-description' style={{ width: '30%', paddingLeft: '40px', paddingTop: '30px' }}>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default Banner;
