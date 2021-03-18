import {combineReducers} from 'redux'
const movieReducer=()=>{
  return[
    {title:'Avengers:blockpanther',releasedate:'02-11-2008',rating:7.4,},
    {title:'Interstellar',releasedate:'16-11-2013',rating:8,},
    {title:'The Wolf of Wall Street',releasedate:'08-11-2014',rating:7,},
    {title:'Inception',releasedate:'08-10-2015',rating:7.7,},
    {title:'The Matrix',releasedate:'06-11-2017',rating:8.2,},

  ]
}
const selectedMovieReducer=(state=null,action) => {
  switch(action.type)
  {
    case 'MOVIE_SELECTED':
             return action.payload
    default: return state 
  }
}
export default combineReducers({
  movies: movieReducer,
  selectedMovie: selectedMovieReducer
})