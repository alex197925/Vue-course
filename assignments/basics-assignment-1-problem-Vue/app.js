/** @format */

const app = Vue.createApp({
  data() {
    return {
      name: "Alex",
      age: 43,
      imageLink:
        "https://d23.com/app/uploads/2013/04/1180w-600h_mickey-mouse_1.jpg",
    };
  },
  methods: {
    agePlusFiveYear() {
      return this.age + 5;
    },

    randomNumberGenerator() {
      const randomNumber = Math.random();
      return randomNumber;
      //   console.log(randomNumber);
    },
  },
});

app.mount("#assignment");
