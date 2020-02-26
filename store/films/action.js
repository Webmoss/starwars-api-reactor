export const filmActionTypes = {
  FILMS: 'FILMS',
}

export const loadFilms = () => dispatch => {
  return dispatch( { type: filmActionTypes.FILMS } )
}
