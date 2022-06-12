<template>

  <div class="header-container">
    <div>
      <img class="logo" src="../../assets/logo.svg" alt="logo" />

    </div>

    <Counter />

  </div>

</template>

<script>

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
<style scoped>
.logo {
  height: 40px;
  padding-left: 10px;
}

.header-container {
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding-bottom: 10px;
}
</style>