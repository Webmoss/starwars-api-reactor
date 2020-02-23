import { filmActionTypes } from './action'

const filmInitialState = {
  films: {}  
}

export default (state = filmInitialState, action) => {
  switch (action.type) {
    case filmActionTypes.FILMS:
      return Object.assign({}, state, {
        films: state.films
      })
    default:
      return state
  }
}
