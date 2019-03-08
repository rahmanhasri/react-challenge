const defaultState = {
  isLogin: false,
  userId: null,
  //user favorites maybe?
  //random poke maybe?
}

export default function(state = defaultState, action) {
  const { type } = action;

  switch(type) {
    case 'SET_LOGIN':
      return { ...state, isLogin: action.login, userId: action.userId }
    default:
      return state
  }
}
