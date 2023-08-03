<template>
    <div>  
      <!-- Show login form if user is not authenticated, otherwise show grid and filters -->
      <template v-if="!authenticated">
        <Login @login-success="handleLoginSuccess" />
      </template>
      <template v-else>
        <!-- Navigation Bar -->
      <nav class="navbar">
        <h2 class="navbar-title">SHAPES</h2>
        <button class="logout-button" @click="logout">Logout</button>
      </nav>
        <h3>Filters</h3>
        <Filters :shapes="shapes" :colors="colors" :activeFilters="activeFilters" @update-filters="updateFilters" />
        <h2>{{ gridTitle }}</h2>
        <Grid :items="items" :activeFilters="activeFilters" />
      </template>
    </div>
  </template>
  
  <script>
  import Grid from "@/components/Grid.vue";
  import Filters from "@/components/Filters.vue";
  import Login from "@/components/Login.vue";
  import itemsData from "~/data/items.json";
  
  export default {
    components: {
      Grid,
      Filters,
      Login,
    },
    data() {
      return {
        authenticated: false, 
        items: itemsData,
        shapes: ["oval", "square", "round", "rectangle"],
        colors: ["red", "blue", "green", "yellow", "purple", "grey"],
        activeFilters: {
          shapes: ["oval"],
          colors: ["red", "blue", "green", "yellow", "purple", "grey"],
        },
      };
    },
    computed: {
  gridTitle() {
    const { shapes, colors } = this.activeFilters;

    if (shapes.length === this.shapes.length && colors.length === this.colors.length) {
      return "All items:";
    } else if ((shapes.length > 1 && colors.length === this.colors.length) || (shapes.length === this.shapes.length && colors.length > 1)) {
      return "Multiple items:";
    } else if (shapes.length === this.shapes.length && colors.length === 1) {
      return `All ${colors[0]} items:`;
    } else if (colors.length === this.colors.length && shapes.length === 1) {
      return `All ${shapes[0]} items:`;
    } else if (shapes.length === 1 && colors.length === 1) {
      return `Round ${shapes[0]} ${colors[0]} items:`;
    } else if (shapes.length === 1 && colors.length > 1) {
      return `Multiple ${colors[0]} ${shapes[0]} items:`;
    } else if (colors.length === 1 && shapes.length > 1) {
      return `Multiple ${shapes[0]} ${colors[0]} items:`;
    } else {
      return `Round ${shapes[0]} items:`;
    }
  },
},
    methods: {
      handleLoginSuccess() {
        // Update the authentication status when login is successful
        this.authenticated = true;
      },
      updateFilters(newFilters) {
        this.activeFilters.shapes = newFilters.shapes;
        this.activeFilters.colors = newFilters.colors;
      },
    },
  };
  </script>
  
  