import axios from 'axios';

export function getPokemons() {
  return dispatch => {

    dispatch({ type: 'FETCH_POKEMON_LOADING' });
    let randomOffset = '';
    while(randomOffset.length < 3) {
      randomOffset+= Math.floor(Math.random() * 10);
      if(randomOffset > '850') {
        randomOffset = '';
      }
    }
    
    axios({
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${randomOffset}`,
    })
      .then(({ data }) => {
        dispatch({ type: 'FETCH_POKEMON_SUCCESS', payload: data.results })
      })
      .catch(({ response }) => {
        // console.log(response);
        dispatch({ type: 'FETCH_POKEMON_ERROR' })
      });
  }
}