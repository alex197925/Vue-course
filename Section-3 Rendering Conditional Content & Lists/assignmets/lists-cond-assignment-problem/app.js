/** @format */

const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: "",
      listIsVisible: true,
      tasks: [],
    };
  },

  computed: {
    hideShowBtn() {
      // Check if listIsVisible? show "Hide List" text on btn and opposite
      return this.listIsVisible ? "Hide List" : "Show List";
    },
  },

  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
      this.enteredTaskValue = "";
    },

    // Switching between true and false
    toggleTaskVisibility() {
      this.listIsVisible = !this.listIsVisible;
    },
  },
});

app.mount("#assignment");
