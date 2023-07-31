<template>
    <div class="grid">
      <div v-for="item in filteredItems" :key="item.id" class="grid-item">
        <div v-if="item.shape === 'oval' || item.shape === 'round'" class="grid-circle" :style="{ backgroundColor: item.color }">
          
        </div>
        <div v-else-if="item.shape === 'square'" class="grid-box" :style="{ backgroundColor: item.color }"></div>
        <div v-else="item.shape === 'rectangle'" class="grid-box2" :style="{ backgroundColor: item.color }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
      activeFilters: {
        type: Object,
        required: true,
      },
    },
    computed: {
      filteredItems() {
        // Apply filters on the items based on activeFilters
        return this.items.filter((item) => {
          // Check if the shape and color are selected in activeFilters
          const isShapeSelected = this.activeFilters.shapes.includes(item.shape);
          const isColorSelected = this.activeFilters.colors.includes(item.color);
  
          // Return true if the item matches the selected shapes and colors
          return isShapeSelected && isColorSelected;
        });
      },
    },
  };
  </script>
  
  