<template>
  <div class="counter-container">
    <div class="counter-message">{{ label }}</div>
    <div class="counter-rate-container">
      <div class="counter-score">
        <div>{{ counter }}</div>
      </div>
      <VoteButton :action="incrementCounter" thumb="up" />
      <VoteButton :action="decrementCounter" thumb="down" />
      <!--       <transition tag="div" class="VueOnly" name="vote" appear>
        <div class="rating">

          <button @click="incrementCounter" @mouseup="rotation" @mousedown="rotation"
            :class="{ mouseover: clicked, mouseup: !clicked }">
            <span class="icon">
              <img src="../../assets/thumb_up.svg" />
            </span>
          </button>

          <button @click="decrementCounter" @mouseup="rotation" @mousedown="rotation"
            :class="{ mouseover: clicked, mouseup: !clicked }">
            <span class="icon">
              <img src="../../assets/thumb_down.svg" />
            </span>
          </button>
        </div>
      </transition> -->
    </div>
    <!--     <h3 class="title">{{ title }}</h3>
      <div class="level">
        <div class="level-item">
          <button class="button" @click="incrementCounter">
            <span class="icon">
              <i class="fa fa-plus"></i>
            </span>
          </button>
        </div>
        <div class="level-item">
          <h2>{{ counter }}</h2>
        </div>
        <div class="level-item">
          <button class="button" @click="decrementCounter">
            <span class="icon">
              <i class="fa fa-minus"></i>
            </span>
          </button>
        </div>
      </div> -->
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
    /*  rotation() {
       this.clicked = !this.clicked;
       console.log(this.clicked);
     }, */
  },
};
</script>
<style scoped>
</style>