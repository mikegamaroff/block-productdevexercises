<template>
  <header>
    <div class="wrapper">
      <div>
        <img class="logo" src="../../assets/logo.svg" alt="logo" />

      </div>

      <Counter />

    </div>
  </header>
</template>

<script>
import './header.css';
import MyButton from './Button.vue';
import Counter from "./Counter";
export default {
  name: 'HeaderBar',

  components: { MyButton, Counter },

  props: {
    user: {
      type: Object,
    },
  },

  methods: {

  },
};
</script>
<style>
.logo {
  height: 40px;

}
</style>