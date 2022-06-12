<template>
  <div class="container">
    <div class="mainHeader">Calculate Mike's rate:</div>
    <div class="caption">Mike will probably want to get paid at some point</div>
    <div class="calculator-container">
      <div class="output">
        <div class="outputCalc">{{ calculatorValue || 0 }}</div>
      </div>
      <div class="buttons">
        <div class="button" v-for="n in btnArr" :key="n"
          :class="{ operator: ['C', '*', '/', '-', '+', '%', '='].includes(n) }">
          <div class="btn" @click="action(n)">
            {{ n }}
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
const btnArray = [
  "C",
  "*",
  "/",
  "-",
  "7",
  "8",
  "9",
  "+",
  "4",
  "5",
  "6",
  "%",
  "1",
  "2",
  "3",
  "=",
  "0",
  ".",
];
export default {
  name: "Calculator",
  data() {
    return {
      calculatorValue: "",
      btnArr: btnArray,
      operator: null,
      previousCalculatorValue: "",
    };
  },
  methods: {
    action(n) {
      /* Append value */
      if (!isNaN(n) || n === ".") {
        this.calculatorValue += n + "";
      }
      /* Clear value */
      if (n === "C") {
        this.calculatorValue = "";
      }
      /* Percentage */
      if (n === "%") {
        this.calculatorValue = this.calculatorValue / 100 + "";
      }
      /* Operators */
      if (["/", "*", "-", "+"].includes(n)) {
        this.operator = n;
        this.previousCalculatorValue = this.calculatorValue;
        this.calculatorValue = "";
      }
      /* Calculate result using the eval function */
      if (n === "=") {
        this.calculatorValue = eval(
          this.previousCalculatorValue + this.operator + this.calculatorValue
        );
        this.previousCalculatorValue = "";
        this.operator = null;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 100px;
  text-align: center;
}

.caption {
  font-style: italic;
  color: gray;
}

.mainHeader {
  font-family: "Lota Bold";
  font-weight: 800;
  font-size: 24px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 20px;

}

.calculator-container {
  width: 100%;
  padding-top: 20px;
}

.output {
  text-align: right;
  background-color: rgb(255, 255, 255);
  margin: 10px auto;
  padding: 5px;
  border: 0.5px solid rgb(188, 188, 188);
  border-radius: 4px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.008),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.012),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.015),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.018),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.022),
    100px 100px 80px rgba(0, 0, 0, 0.03);
}

.outputCalc {
  background-color: rgb(223, 223, 223);
  background: linear-gradient(rgb(221, 238, 232) 35%, rgba(255, 255, 255, 1) 100%);
  padding: 10px;
  border-radius: 3px;
  font-size: 25px;
  font-family: "Lota Bold";
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);

  border: 0.2px solid rgb(187, 187, 187);
  border-radius: 4px;
  align-items: center;
  padding: 15px;
  justify-content: center;
  margin: 10px auto;
  gap: 5px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.008),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.012),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.015),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.018),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.022),
    100px 100px 80px rgba(0, 0, 0, 0.03);
}

.button {
  background-color: rgb(207, 207, 207);

  padding: 6px;
  border-radius: 8px;
  margin: 4px;
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.button:hover {
  background-color: rgb(180, 180, 180);
  color: #000;
}

.operator {
  background-color: rgb(146, 146, 146);
  color: white;
}

.operator:hover {
  background-color: rgb(110, 110, 110);
  color: white;
}

.MyId:hover {
  cursor: pointer;
  filter: brightness(130%);
}
</style>
