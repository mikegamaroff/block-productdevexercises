// state
export const state = () => ({
  todos: [
    ,/* 
    {
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
    } */
  ],
});

//getters
export const getters = {};

//actions
export const actions = {};

//mutations
export const mutations = {
  ADD_TODO(state, todo) {
    state.todos = [{ content: todo, done: false }, ...state.todos];
  },
  REMOVE_TODO(state, todo) {
    state.todos.splice(state.todos.indexOf(task), 1);
  },
  TOGGLE_TODO(state, todo) {
    todo.done = !todo.done;
  },
};
