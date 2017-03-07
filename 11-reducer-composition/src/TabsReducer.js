import TabsActions from './TabsActions';

const initialState = { activeTab: "all" };

export function tabsReducer(state = initialState, action) {
  switch(action.type) {
    case TabsActions.tabSwitched:
      return Object.assign({}, state, {
        activeTab: action.tab
      });
    default:
      return state;
  }
}