<template>
  <div id="app">
    <header>
      <HeaderBar />
    </header>
    <div>
      <div class="container">
        <div class="leftNav">Left Nav</div>
        <div class="main">


          <ToDos />



          <Calculator />

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
/* import { mapState, mapGetters, mapActions, mapMutations } from "vuex"; */
export default {
  name: "App",
  components: {
    ToDos,
    Calculator,
    HeaderBar,
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

  },
};
</script>

<style>
@font-face {
  font-family: "Lota Regular";

  src: url("/fonts/Lato_Regular/LotaGrotesqueAlt3-Regular.woff") format("woff");
  src: url("/fonts/Lato_Regular/LotaGrotesqueAlt3-Regular.woff2") format("woff2");
}

@font-face {
  font-family: "Lota Semibold";

  src: url("/fonts/Lato_Semibold/LotaGrotesqueAlt3-SemiBold.woff") format("woff");
  src: url("/fonts/Lato_Semibold/LotaGrotesqueAlt3-SemiBold.woff2") format("woff2");
}

@font-face {
  font-family: "Lota Bold";

  src: url("/fonts/Lato_Bold/LotaGrotesqueAlt3-Bold.woff") format("woff");
  src: url("/fonts/Lato_Bold/LotaGrotesqueAlt3-Bold.woff2") format("woff2");
}

#app {

  color: #2c3e50;
}

body,
html {
  font-family: "Lota Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 5px;
  margin: none;

}

* {
  margin: 0;
}

* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.container {
  display: flex;
  position: relative;
  align-items: center;

}

.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 120px);
  background-color: #f3f3f3;
  border-radius: 12px;
  padding: 30px;
  gap: 40px;
}




.leftNav {
  min-width: 200px;
  width: 20vw;
}
</style>
