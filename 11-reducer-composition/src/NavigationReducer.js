import TodoActions from './TodoActions';

const initialState = { activeTab: "all" };

export function reducer(state = initialState, action) {
  switch(action.type) {
    case TodoActions.tabSwitched:
    return {
      activeTab: action.tab
    };
    default:
      return state;
  }
}
