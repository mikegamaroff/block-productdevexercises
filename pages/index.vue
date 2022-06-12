<template>
  <div id="app">
    <header>
      <HeaderBar />
    </header>
    <div>

      <div class="container">
        <div class="leftNav">Left Nav</div>
        <div class="main">
          <div>
            <div class="field-container">
              <input type="text" data-test="new-todo" v-model="newTodo" placeholder="Add a new todo"
                @keypress.enter="addTodo" />
            </div>
            <div class="widget-container">
              {{ $store.state.todos }}
              <ToDos v-bind:todos="$store.state.todos" v-on:complete-todo="completeTodo" v-on:del-todo="deleteTodo" />
            </div>
          </div>
          <div class="widget-container">
            <Calculator />
          </div>

        </div>
      </div>


    </div>
    <footer>Footer</footer>
  </div>
</template>

<script type="module">
import Calculator from "../components/Calculator";
import ToDos from "../components/ToDos";
import HeaderBar from "../src/stories/HeaderBar";
import '../css/animation.css';
/* import { mapState, mapGetters, mapActions, mapMutations } from "vuex"; */
export default {
  name: "App",
  components: {
    ToDos,
    Calculator,
    HeaderBar
  },
  /*   computed: mapState(todos), */
  data() {
    return {
      title: "The Block - NFT Charts: Transactions, Users and Trading Volumes",
      newTodo: "",

      todos: [],
      i: 0,
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
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
  background-color: #f3f3f3;
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

.leftNav {
  min-width: 200px;
  width: 20vw;
}
</style>
