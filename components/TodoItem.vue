<template>

  <div class="todo-item" v-bind:class="{ 'todo-item-complete': todo_item.completed }">
    <input class="checkbox" type="checkbox" v-bind:checked="todo_item.completed"
      v-on:change="$emit('complete-todo', todo_item)" />
    <div class="todoLabel" v-bind:class="{ 'is-complete': todo_item.completed }">{{ todo_item.title }}</div>
    <button @click="$emit('del-todo', todo_item)" class="del">
      <svg width="195px" height="222px" viewBox="0 0 195 222" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Preview" stroke="none" stroke-width="1" fill-rule="evenodd">
          <g id="Artboard" transform="translate(-142.000000, -135.000000)" fill-rule="nonzero">
            <path
              d="M286.700095,357 L192.305459,357 C184.586877,357 177.24635,348.353077 175.913837,337.680398 L158.693113,192.912225 L320.31244,192.912225 L303.091717,337.680398 C301.759045,348.349905 294.418677,357 286.700095,357 Z M234.625357,330.456261 C234.625357,333.121339 236.808751,335.283188 239.500397,335.283188 C242.192042,335.283188 244.375436,333.121418 244.375436,330.456261 L244.375436,219.455964 C244.375436,216.790886 242.192042,214.630622 239.500397,214.630622 C236.808751,214.630622 234.625357,216.790847 234.625357,219.455964 L234.625357,330.456261 Z M268.916455,329.454364 C268.589487,332.100849 270.489289,334.508842 273.160743,334.832329 C275.833823,335.157524 278.266661,333.276025 278.593542,330.630968 L292.257855,220.459208 C292.586369,217.814269 290.686568,215.406316 288.013567,215.081244 C285.342034,214.756049 282.909235,216.637547 282.580768,219.282605 L268.916455,329.454364 Z M200.406458,330.631285 C200.733426,333.276224 203.166296,335.157718 205.839257,334.832646 C208.51079,334.508997 210.410425,332.101008 210.083545,329.454682 L196.419232,219.282922 C196.090717,216.637983 193.657847,214.756489 190.986433,215.081561 C188.313353,215.406756 186.413678,217.814745 186.742145,220.459525 L200.406458,330.631285 Z M191.359727,163.95641 L151.736195,163.95641 C146.346636,163.95641 142,168.278286 142,173.608678 C142,178.929557 146.358934,183.260947 151.736195,183.260947 L327.263805,183.260947 C332.653364,183.260947 337,178.940657 337,173.608678 C337,168.289386 332.641066,163.95641 327.263805,163.95641 L287.640273,163.95641 L287.640273,154.282734 C287.640273,143.620759 278.897414,135 268.12742,135 L210.871787,135 C200.085132,135 191.358934,143.620759 191.358934,154.282734 L191.359727,163.95641 Z M210.859886,163.95641 L268.139321,163.95641 C268.139321,160.606896 268.137771,154.304141 268.125374,154.304141 C268.125374,154.304141 210.85784,154.290204 210.85784,154.282461 L210.859886,163.95641 Z"
              id="Shape"></path>
          </g>
        </g>
      </svg></button>
  </div>

</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  components: {},
  data() {
    return {
      todo_item: this.todo,
    };
  },

};
</script>

<style scoped>
.todo-item {
  background: rgb(220, 220, 220);
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px 10px 15px;
  align-content: center;

}

.todo-item-complete {
  background: rgb(233, 233, 233);
}

.is-complete {
  text-decoration: line-through;
  color: rgb(174, 174, 174);


}

.todoLabel {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 25px;
}

.del {
  width: 37px;
  height: 34px;
  border: 0;
  outline: 0;
  flex-grow: 0;
  border-radius: 100%;
  background-color: #FFFFFF;
  cursor: pointer;
  box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

}

.del:hover {
  background-color: #7e909e;
  fill: rgb(0, 0, 0);
}

.del svg {
  height: 17px;
  width: 17px;
  fill: rgb(213, 213, 213);
}



[type=checkbox] {
  width: 2rem;
  height: 2rem;
  color: dodgerblue;
  vertical-align: middle;
  -webkit-appearance: none;
  background: none;
  border: 0;
  outline: 0;
  flex-grow: 0;
  border-radius: 50%;
  background-color: #FFFFFF;
  transition: background 300ms;
  cursor: pointer;
}


/* Pseudo element for check styling */

[type=checkbox]::before {
  content: "";
  color: transparent;
  display: block;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  border: 0;
  background-color: transparent;
  background-size: contain;
  box-shadow: inset 0 0 0 1px #CCD3D8;
}


/* Checked */

[type=checkbox]:checked {
  background-color: currentcolor;
}

[type=checkbox]:checked::before {
  box-shadow: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E");
}


/* Disabled */

[type=checkbox]:disabled {
  background-color: #CCD3D8;
  opacity: 0.84;
  cursor: not-allowed;
}
</style>
