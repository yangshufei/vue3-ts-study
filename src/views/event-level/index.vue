<template>
  <div class="event-level">
    <Bar></Bar>
    <div class="split-line"></div>
    <TotalTable></TotalTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Bar from './bar.vue'
import TotalTable from './total-table.vue'
export default defineComponent({
  components: {
    Bar,
    TotalTable
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.event-level {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .split-line{
    height: 1px;
    background-color: $default-line-color;
  }
}
</style>
