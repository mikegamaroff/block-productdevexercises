<template>
  <div v-if="$store.state.todos">
    <transition-group tag="div" class="VueOnly" name="fade" appear>
      <!--     {{ console.log($store.state.todos) }} -->
      <div v-for="todo in $store.state.todos" v-bind:key="todo.id">
        <TodoItem
          v-bind:todo="todo"
          v-on:complete-todo="$emit('complete-todo', todo)"
          v-on:del-todo="$emit('del-todo', todo)"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "ToDos",
  props: ["todos"],
  components: {
    TodoItem,
  },
};
</script>

<style>
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
