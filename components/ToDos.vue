<template>
  <div class="column-container">
    <div class="caption">Assign Development tasks to Mike when he starts working for us.</div>
    <div class="mainHeader">Assign Mike's tasks:</div>
    <div class="field-container">
      <input type="text" data-test="new-todo" v-model="newTodo" placeholder="Add a new task"
        @keypress.enter="addTodo" />
    </div>
    <div v-if="$store.state.todos" class="todo-container">
      <transition-group tag="div" class="VueOnly todoSet" name="fade" appear>
        <div v-for="todo in $store.state.todos" v-bind:key="todo.id">
          <TodoItem v-bind:todo="todo" v-on:complete-todo="completeTodo" v-on:del-todo="deleteTodo" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "ToDos",



  components: {
    TodoItem,
  },
  data() {
    return {
      newTodo: "",
      todos: [],
      i: 0,
    };
  },
  methods: {
    deleteTodo(todo) {
      this.$store.commit("REMOVE_TODO", todo.id);
    },
    completeTodo(id) {
      this.$store.commit("COMPLETE_TODO", id);
    },
    addTodo() {
      if (this.newTodo) {
        this.$store.commit("ADD_TODO", {
          id: this.i,
          completed: false,
          title: this.newTodo,
        });
        this.newTodo = "";
        this.i++;
      }
    },
  }
};
</script>

<style scoped>
.caption {
  font-style: italic;
  color: gray;
}

.mainHeader {
  font-family: "Lota Bold";
  font-weight: 800;
  font-size: 32px;
}

.column-container {
  height: 100%;
  position: relative;
}

.todo-container {
  top: 170px;
  left: 0;
  position: absolute;
  overflow-y: scroll;
  height: calc(100% - 170px);
  width: 100%;
}

input {

  font-size: max(20px, 1em);
  font-family: inherit;
  padding: 0.5em 1em;
  background-color: #fff;
  border: 2px solid rgb(237, 237, 237);
  border-radius: 6px;
  width: 100%;
  height: 50px;
  margin: 20px 0 30px 0;

}

.todoSet {
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  gap: 12px;

}

input:focus {
  outline: none;
  border: 2px solid rgb(199, 199, 199);
}

.fade-enter-active {
  animation: fade-in 0.2s;
}

.fade-leave-active {
  animation: fade-in 0.2s reverse;
}

@keyframes fade-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
