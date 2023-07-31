import { shallowMount } from '@vue/test-utils';
import Grid from '@/components/Grid.vue';

describe('Grid', () => {
  // Sample data for testing
  const items = [
    { id: 1, shape: 'oval', color: 'red' },
    { id: 2, shape: 'square', color: 'blue' },
    { id: 3, shape: 'round', color: 'green' },
  ];

  it('renders the correct number of grid items', () => {
    const wrapper = shallowMount(Grid, {
      propsData: {
        items,
        activeFilters: { shapes: ['oval', 'round'], colors: ['red', 'green'] },
      },
    });

    const gridItems = wrapper.findAll('.grid-item');
    expect(gridItems.length).toBe(2); // Only oval and round items should be shown
  });

  it('correctly applies the background color to grid-circle', () => {
    const wrapper = shallowMount(Grid, {
      propsData: {
        items,
        activeFilters: { shapes: ['oval'], colors: ['red'] },
      },
    });

    const gridCircle = wrapper.find('.grid-circle');
    expect(gridCircle.element.style.backgroundColor).toBe('red');
  });

  it('displays grid-box for square shape', () => {
    const wrapper = shallowMount(Grid, {
      propsData: {
        items,
        activeFilters: { shapes: ['square'], colors: [] },
      },
    });

    const gridBox = wrapper.find('.grid-box');
    expect(gridBox.exists()).toBe(true);
  });
});
