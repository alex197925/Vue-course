/** @format */

const app = Vue.createApp({
  data() {
    return {
      user: "",
      confirmedUserInput: "",
    };
  },

  methods: {
    showAlert() {
      alert("I did it!!!!");
    },

    userInput(event) {
      this.user = event.target.value;
      console.log(event.target.value);
    },
    confirmInput() {
      this.confirmedUserInput = this.user;
    },
  },
});

app.mount("#assignment");
