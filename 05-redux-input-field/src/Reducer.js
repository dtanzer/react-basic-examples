export function reducer(state, action) {
  console.log(action);
  switch(action.type) {
    case 'TO_GREET_CHANGED':
      return {
        welcome: {
          toGreet: action.newToGreet,
          greeting: action.newToGreet ? "Hello " + action.newToGreet : ""
        }
      }
    default:
      return state;
  }
}