<template>
  <!--  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
 -->
  <div>
    <transition tag="div" class="VueOnly" name="vote" appear>
      <!--      <button @click="action" @mouseup="rotation" @mousedown="rotation"> -->
      <button @click="action" @mouseup="rotation" @mousedown="rotation"
        :class="{ mouseover: clicked, mouseup: !clicked }">
        <span class="icon">
          <img src="../../assets/thumb_down.svg" />

        </span>
      </button>
    </transition>
  </div>

</template>

<script>

import './button.css';

export default {
  name: 'vote-button',
  props: {
    action: { type: Function },
    thumb: {
      type: String,
    },

    backgroundColor: {
      type: String,
    },
  },
  methods: {
    imgPath() {
      return this.thumb === "up" ? <img src="../../assets/thumb_up.svg" /> : <img src="../../assets/thumb_down.svg" />
    },
  },
  data: function () {
    return {
      clicked: false
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    rotation() {
      this.clicked = !this.clicked;
      console.log(this.clicked);
    },
  },
};
</script>

<style scoped>
.icon {
  height: 20px;
  width: 20px;
  display: flex;
  pointer-events: none;
}

.icon img {
  width: 100%;
  height: 100%;
}

.mouseover {
  animation: bounce-in .6s;
}

.mouseup {
  animation: bounce-out .3s;
}

button {
  border: none;
  margin: 0;
  padding: 5px;
  background: rgba(255, 255, 255, 0);
  cursor: pointer;
}

@keyframes bounce-in {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  from {
    transform: scale(2);
  }

  to {
    transform: scale(1);
  }
}
</style>