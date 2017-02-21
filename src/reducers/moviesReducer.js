import { ADD_MOVIE, FETCH_MOVIES } from '../actions/types.js'

export default (state=[], action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, action.payload];
    case FETCH_MOVIES:
      return action.payload;
    default:
      return state;
  }
}
