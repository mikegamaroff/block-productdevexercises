<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <input type="checkbox" v-bind:checked="todo.completed" v-on:change="markComplete">
    <p>{{todo.title}}</p>
    <button @click="$emit('del-todo', todo.id)" class="del">X</button>
  </div>
</template>

<script>

export default {
name: "TodoItem",
props: ["todo"],
 data() {
         return {
            todo_item: this.todo
         }
      },
methods: {
    markComplete() {
      this.todo_item.completed = !this.todo_item.completed;
    }
}
}
</script>

<style scope>
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