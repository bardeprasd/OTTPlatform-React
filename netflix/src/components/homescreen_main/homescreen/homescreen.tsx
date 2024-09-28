// HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import Banner from '../banner/banner';
import Row from '../rows/rows';
import Request from '../request';
import Navbar_Internal from '../navbar/navbar';
import Footer from '../../footer/footer';
import { Routes, Route } from 'react-router-dom';
import ViewMore from '../rows/ViewMore';
// HomeScreen component
const HomeScreen: React.FC = () => {
  // State for search query and user's movie list
  const [searchQuery, setSearchQuery] = useState('');
  const [myList, setMyList] = useState<{ id: number; title: string }[]>([]);

  // Function to handle search query input
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Function to handle adding a movie to the user's list
  const handleAddToMyList = (movieId: number, movieTitle: string) => {
    setMyList((prevList) => [...prevList, { id: movieId, title: movieTitle }]);
  };

  // Log the user's movie list when it changes
  useEffect(() => {
    console.log('My List:', myList);
  }, [myList]);

  // Function to generate the search API URL
  const getSearchUrl = () => {
    return `/search/movie?api_key=${Request.API_KEY}&query=${searchQuery}`;
  };

  return (
    <div>
      {/* Navbar for search functionality */}
      <Navbar_Internal onSearch={handleSearch} />
      
      {/* Banner component for displaying a featured movie */}
      <Banner />

      {/* Rows of movies or search results */}
      <div style={{ backgroundColor: 'black', marginTop: '-50px' }}>
        {searchQuery ? (
          // Display search results if there is a search query
          <Row title="Search Results" fetchUrl={getSearchUrl()} myList={myList} handleAddToMyList={handleAddToMyList} />
        ) : (
          // Display different rows of movies if there is no search query
          <>
            <Row title="Trending Now" fetchUrl={Request.fetchTrending} myList={myList} handleAddToMyList={handleAddToMyList} />
            <Row title="Top Rated" fetchUrl={Request.fetchTopRated} myList={myList} handleAddToMyList={handleAddToMyList} />
            <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} myList={myList} handleAddToMyList={handleAddToMyList} />
            <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies} myList={myList} handleAddToMyList={handleAddToMyList} />
            <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies} myList={myList} handleAddToMyList={handleAddToMyList} />
            <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies} myList={myList} handleAddToMyList={handleAddToMyList} />
            <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries} myList={myList} handleAddToMyList={handleAddToMyList} />
            <Row title="New Releases" fetchUrl={Request.fetchNetflixOriginals} myList={myList} handleAddToMyList={handleAddToMyList} />
          </>
        )}
        <Footer/>
      </div>

      {/* Route for View More page */}
      <Routes>
        <Route path="/view-more/:title" element={<ViewMore />} />
      </Routes>
    </div>
  );
};

export default HomeScreen;
