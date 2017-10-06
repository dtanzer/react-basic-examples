import { reducer } from './TodosReducer';

describe('TodosReducer', () => {
  it('sets todos in state on TODOS_LOADED', () => {
    const prevState = {};
    const action = {
      type: 'TODOS_LOADED',
      todos: ['a', 'b']
    };

    const nextState = reducer(prevState, action);

    expect(nextState.todos).toEqual(action.todos);
  });
});
