import TabsActions from './TabsActions';
import NewTodoActions from './NewTodoActions';

const initialState = { activeTab: "all" };

export function tabsReducer(state = initialState, action) {
  switch(action.type) {
    case TabsActions.tabSwitched:
      return Object.assign({}, state, {
        activeTab: action.tab
      });
    case NewTodoActions.creatingNewTodo:
      return Object.assign({}, state, {
        overlay: "block",
        activeTab: "all"
      });
    case NewTodoActions.newTodoCreated: {
      return Object.assign({}, state, {
        overlay: "none"
      });
    }
    default:
      return state;
  }
}