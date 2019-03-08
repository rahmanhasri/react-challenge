export function logged(value, id) {
  return {
    type: 'SET_LOGIN',
    login: value,
    userId: id || null,
  }
}