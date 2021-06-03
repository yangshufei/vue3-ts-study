<template>
  <ul class="radio-wrapper">
    <li class="radio-item" :class="activeRadio === item.id ? 'r-checked' : ''" v-for="item of list" :key="item.id" @click="changeRadio(item.id)">{{ item.name }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'radio',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    activeRadio: {
      type: String,
      default: ''
    }
  },
  setup (props, ctx) {
    function changeRadio (id: string) {
      ctx.emit('update:activeRadio', id)
    }
    return {
      changeRadio
    }
  }
})
</script>

<style lang="scss" scoped>
  .radio-wrapper {
    padding: 0;
    margin: 0 auto 0;
    li {
      list-style: none;
      float: left;
      background-color: $default-btn-bg;
      height: 30px;
      border-radius: 6px;
      width: 88px;
      line-height: 28px;
      text-align: center;
      font-size: 13px;
      font-weight: bold;
      color: $gap-font-color;
    }
    li + li {
      margin-left: 3px;
    }
    .r-checked {
      background-color: $default-btn-selected-bg;
      color: #0C2A42;
      font-weight: normal;
    }
  }
</style>
