/** @format */

const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },

  methods: {
    addGoal() {
      // Add input value to the goals array
      this.goals.push(this.enteredGoalValue);
      // Clean input
      this.enteredGoalValue = "";
    },

    removeGoal(index) {
      // Removing goal from list
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
