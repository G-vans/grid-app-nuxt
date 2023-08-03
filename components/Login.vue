<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div>
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      login() {
        const hardcodedUsername = "demo";
        const hardcodedPassword = "qwerty123";
  
        // Check if the entered credentials match the credentials
        if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
          // If login is successful, emit an event to notify the parent component
          this.$emit("login-success");
        } else {
          // If login fails, show an error message (for simplicity, we'll just log an error)
          console.error("Invalid credentials. Please try again.");
        }
      },
    },
  };
  </script>
  
  