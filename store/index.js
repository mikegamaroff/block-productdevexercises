// state
export const state = () => ({
  todos: [
    /*   {
      id: 1,
      title: "Todo One",
      completed: true,
    },
    {
      id: 2,
      title: "Todo Two",
      completed: false,
    },
    {
      id: 3,
      title: "Todo Three",
      completed: false,
    }, */
  ],
});

//getters
export const getters = {};

//actions
export const actions = {};

//mutations
export const mutations = {
  ADD_TODO(state, todo) {
    state.todos = [todo, ...state.todos];
  },
  REMOVE_TODO(state, id) {
    const deletedState = state.todos.filter((todo) => todo.id !== id);
    state.todos = deletedState;
  },
  COMPLETE_TODO(state, todoitem) {
    //  const completedItem = state.todos.filter((todo) => todo.id === todoitem.id);
    todoitem.completed = !todoitem.completed;
  },
};
