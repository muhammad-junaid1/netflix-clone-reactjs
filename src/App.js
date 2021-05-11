import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import calls from "./apiCalls.js";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import GenrePage from "./components/GenrePage";
import TrendingMovies from "./components/TrendingMovies";
import PopularMovies from "./components/PopularMovies";
import RatedMovies from "./components/RatedMovies";
import SingleMovie from "./components/SingleMovie";
import Error404 from "./components/Error404";
import SearchPage from "./components/SearchPage";
import Footer from "./components/Footer";

const App = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allGenres = await calls.fetchGenres();
        setGenres(allGenres.genres);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Nav genres={genres} />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/genre/:genreId" component={GenrePage} />
        <Route path="/trending" component={TrendingMovies} />
        <Route path="/popular" component={PopularMovies} />
        <Route path="/rated" component={RatedMovies} />
        <Route path="/movie/:movieId" component={SingleMovie} />
        <Route path="/search" component={SearchPage} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
