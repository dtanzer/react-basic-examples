import { CHANGE_NAME_TYPE } from './Greeter' 

export function reducer(state, action) {
  console.log(state, action)
  switch(action.type) {
    case CHANGE_NAME_TYPE:
      return Object.assign({}, state, {
        welcome: {
          toGreet: action.name,
          greeting: "Hello " + action.name
        } 
      }
      );
  }
  return state;
}