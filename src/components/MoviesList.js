import React from 'react';
import { Link } from 'react-router'

export default (props) => {
  const movies = props.movies.map((movie, index) => (
     <li key={index}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>
    )
  );
  return (
    <div>
      <div className='col-md-4'>
        <ul>
          {movies}
        </ul>
        <Link to="/movies/new">Add a Movie</Link>
      </div>
    </div>
  );
};
