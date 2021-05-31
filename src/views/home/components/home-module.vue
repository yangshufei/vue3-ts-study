<template>
  <div class="home-module-wrap">
    <div class="title" v-if="title"><span>{{title}}</span></div>
    <div :class="module ? 'module-content' : ''" class="module-box">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeModule',
  props: {
    title: {
      type: String,
      default: ''
    },
    module: {
      type: Boolean,
      default: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss">
.home-module-wrap {
  padding: 18px 10px 10px;
  & > .title {
    font-weight: 600;
    font-size: 14px;
    &::before {
      margin: 0 10px;
      content: '';
      display: inline-block;
      width: 4px;
      height: 20px;
      border-radius: 2px;
      background-color: $title-before-bg;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
  }
  & > .module-content {
    background-color: $module-bg;
  }
  & > .module-box {
    margin-top: 10px;
    border-radius: 9px;
    padding: 18px 10px;
  }
}
</style>
