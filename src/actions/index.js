import * as types from './types';

export function fetchMovies(){
  const movies = [{id: 1, title: 'A River Runs Through It'}]
  return {
    type: types.FETCH_MOVIES,
    payload: movies
  }
}

let counter = 1;
export function addMovie(movie){
  movie.id = ++counter;
  return {
    type: types.ADD_MOVIE,
    payload: movie
  }
}
