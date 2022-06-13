<template>
  <div id="app">
    <header>
      <HeaderBar path="../../assets/logo.svg" />
    </header>
    <div>
      <div class="container">
        <div class="leftNav">
          <Signature />
        </div>
        <div class="main">


          <ToDos />



          <Calculator />

        </div>
      </div>
    </div>
    <footer> <img class="logo" src="../assets/logo_white.svg" alt="logo" /></footer>
  </div>
</template>

<script type="module">
import Calculator from "../components/Calculator";
import ToDos from "../components/ToDos";
import Signature from "../components/Signature";
import HeaderBar from "../components/HeaderBar";
import "../css/global.css";
/* import { mapState, mapGetters, mapActions, mapMutations } from "vuex"; */
export default {
  name: "App",
  components: {
    ToDos,
    Calculator,
    HeaderBar,
    Signature
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
</style>
