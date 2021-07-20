import React from "react";

// Components
import MovieNavbar from "../Components/Navbar/movieNavbar.component";

const MovieLayout = (props) => {
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default MovieLayout;
