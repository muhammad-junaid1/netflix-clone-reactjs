import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Row = ({ heading, movies, seeAllLinkPath }) => {
  return (
    <>
      <div className="movies-row">
        <div className="movies-row-header">
          <h1>{heading}</h1>
          <span>
            <Link to={seeAllLinkPath}>See all</Link>
          </span>
        </div>
        <div className="movies-row-images">
        <Slider
              dots={false}
              arrows={true}
              infinite={true}
              slidesToScroll={1}
              variableWidth={true}
              draggable={false}
              autoPlay={false}
              responsive={[
                {
                  breakpoint: 767,
                  settings: {
                    arrows: false,
                  },
                },
              ]}
            >
          {movies.map((movie) => {
            return (
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  title={movie.title}
                />
              </Link>
            );
          })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Row;
