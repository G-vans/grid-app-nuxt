<template>
    <div class="filters">
      <div>
        <h3 class="filters-header">Shapes</h3>
        <div class="tabs-container">
          <div
            v-for="shape in shapes"
            :key="shape"
            :class="['tab', { 'active': selectedShapes.includes(shape) }]"
            @click="toggleShape(shape)"
          >
            {{ shape }}
          </div>
        </div>
      </div>
      <div>
        <h3 class="filters-header">Colors</h3>
        <div class="color-circles">
          <div
            v-for="color in colors"
            :key="color"
            :class="['color-circle', { 'selected': selectedColors.includes(color) }]"
            :style="{ backgroundColor: color }"
            @click="toggleColor(color)"
          ></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      shapes: {
        type: Array,
        required: true,
      },
      colors: {
        type: Array,
        required: true,
      },
      activeFilters: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        selectedShapes: [...this.activeFilters.shapes],
        selectedColors: [...this.activeFilters.colors],
      };
    },
    methods: {
      applyFilters() {
        // Emit an event to update the active filters
        this.$emit("update-filters", {
          shapes: this.selectedShapes,
          colors: this.selectedColors,
        });
      },
      toggleShape(shape) {
        // Toggle the selection of the shape
        if (this.selectedShapes.includes(shape)) {
          this.selectedShapes = this.selectedShapes.filter((s) => s !== shape);
        } else {
          this.selectedShapes.push(shape);
        }
        // Update the active filters
        this.applyFilters();
      },
      toggleColor(color) {
        // Toggle the selection of the color
        if (this.selectedColors.includes(color)) {
          this.selectedColors = this.selectedColors.filter((c) => c !== color);
        } else {
          this.selectedColors.push(color);
        }
        // Update the active filters
        this.applyFilters();
      },
    },
  };
  </script>