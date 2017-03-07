import NewTodoActions from './NewTodoActions';

const initialState = { text: "" };

export function newTodoReducer(state = initialState, action) {
  switch(action.type) {
    case NewTodoActions.creatingNewTodo:
      return Object.assign({}, state, {
        text: ""
      });
    case NewTodoActions.newTodoTextChanged:
      return Object.assign({}, state, {
        text: action.text
      });
    default:
      return state;
  }
}