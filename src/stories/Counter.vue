<template>
  <div class="counter-container">
    <div class="counter-message">{{ label }}</div>
    <div class="counter-rate-container">
      <div class="counter-score">
        <div>{{ counter }}</div>
      </div>
      <VoteButton :action="incrementCounter" thumb="up" />
      <VoteButton :action="decrementCounter" thumb="down" />
    </div>
  </div>
</template>

<script>

import VoteButton from "./VoteButton";
export default {
  data() {
    return {
      title: "How good was this test out of 10?",
      counter: 0,

    };
  },
  components: { VoteButton },
  props: {
    label: {
      type: String
    }
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    },
  },
};
</script>
<style scoped>
</style>