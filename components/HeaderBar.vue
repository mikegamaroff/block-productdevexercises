<template>

  <div class="header-container">
    <div>
      <img class="logo" src="../assets/logo.svg" alt="logo" />

    </div>

    <Counter label="How good is this test out of 10?" />

  </div>

</template>

<script>

import Counter from "../src/stories/Counter.vue";
export default {
  name: 'HeaderBar',

  components: { Counter },

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

@media (max-width: 800px) {

  .header-container {
    flex-direction: column;
  }
}
</style>