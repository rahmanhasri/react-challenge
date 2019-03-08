const defaultState = {
  randomPokemon: [],
  loading: false,
  error: null,
}

export default function(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'FETCH_POKEMON_SUCCESS':
      return { ...state, loading: false, randomPokemon: payload }
    case 'FETCH_POKEMON_ERROR':
      return { ...state, loading: false, error: true }
    case 'FETCH_POKEMON_LOADING':
      return { ...state, loading: true }
    default:
      return state
  }
}