import TodoActions from './TodoActions';

const initialState = { text: "" };
export function reducer(state = initialState, action) {
  switch(action.type) {
    case TodoActions.newTodoCreated:
      return { text: "" };
    case TodoActions.newTodoTextChanged:
      return { text: action.text };
    default:
      return state;
  }
}
