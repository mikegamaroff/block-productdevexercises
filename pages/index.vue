<template>
  <div id="app">
    <div>
      <header>Header</header>
      <div class="container">
        <div class="main">
          <div class="widget-container">
            <ToDos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
          </div>
          <div class="widget-container">Widget two</div>
        </div>
      </div>
      <footer>Footer</footer>
    </div>
  </div>
</template>

<script>
import ToDos from "../components/ToDos";
/* import { mapState, mapGetters, mapActions, mapMutations } from "vuex"; */
export default {
  name: "App",
  components: {
    ToDos,
  },
  /*   computed: mapState(todos), */
  data() {
    return {
      title: "The Block - NFT Charts: Transactions, Users and Trading Volumes",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "Charts tracking the evolution of the non-fungible token (NFT) industry, including trading volumes and number of transactions.",
          name: "The Block - NFT Charts: Transactions, Users and Trading Volumes",
          content:
            "Charts tracking the evolution of the non-fungible token (NFT) industry, including trading volumes and number of transactions." ||
            "",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo() {
      this.$store.commit("ADD_TODO", this.newTodo);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  padding: 50px 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
}
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.widget-container {
}

.blackpanel {
  position: relative;
  background-color: rgba(0, 0, 0, 0.618);
  border-radius: 50px;
  padding: 70px 30px 30px 30px;
  width: auto;
  min-width: 600px;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header img {
  width: 100px;
}
</style>
