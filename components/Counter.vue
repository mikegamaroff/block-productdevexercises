<template>
  <section class="section">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Counter",
      counter: 0,
    };
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
