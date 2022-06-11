<template>
  <div>
    <div
      class="todo-item"
      v-bind:class="{ 'is-complete': todo_item.completed }"
    >
      <input
        type="checkbox"
        v-bind:checked="todo_item.completed"
        v-on:change="$emit('complete-todo', todo_item)"
      />
      <p>{{ todo_item.title }}</p>
      <button @click="$emit('del-todo', todo_item)" class="del">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  components: {},
  data() {
    return {
      todo_item: this.todo,
    };
  },
  methods: {
    /*  markComplete() {
      this.todo_item.completed = !this.todo_item.completed;
    }, */
  },
};
</script>

<style scoped>
.todo-item {
  background: rgb(220, 220, 220);
  padding: 4px;
  border-radius: 10px;
  margin: 10px;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background-color: blueviolet;
  color: white;
  font-weight: bolder;
}
</style>
