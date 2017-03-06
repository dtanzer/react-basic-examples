import TodoActions from './TodoActions';

export function reducer(state, action) {
  switch(action.type) {
    case TodoActions.newTodoCreated:
      return state;
    default:
      return state;
  }
}