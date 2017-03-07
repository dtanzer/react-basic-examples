const initialState = [
	{ name: "Network", id: "network", active: true },
	{ name: "Plan Journey", id: "plan", active: false }
];
export default function(state=initialState, action) {
	switch(action.type) {
		case 'ON_TAB_CLICKED':
			return state.map((tab) => {
				return Object.assign({}, tab, { active: tab.id === action.tabId});
			});
		default:
			return state;
	}
}
