export function reducer(state, action) {
  switch(action.type) {
    case 'GREETING_CHANGED':
      return Object.assign({}, state, {
        welcome: {
          greeting: action.greeting,
          toGreet: action.toGreet
        }
      });
  }
  return state;
}