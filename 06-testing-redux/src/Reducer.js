import GreeterActions from './GreeterActions';

export function reducer(state, action) {
  switch(action.type) {
    case GreeterActions.greetingChanged:
      const greeting = action.toGreet ? "Hello "+action.toGreet : "";
      return {
        welcome: {
          toGreet: action.toGreet,
          greeting: greeting
        }
      };
    default:
      return state;
  }
}