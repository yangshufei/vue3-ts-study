<template>
  <div class="line">
    <span class="line-index" :style="`background-color: ${color || '#2C78D1'};`">{{ data.index }}</span>
    <span class="line-content">
      <span class="line-title">{{ data.name }}</span>
      <span class="line-length">
        <span class="line-length-checked" :style="{width: `${data.probability}%`}"></span>
      </span>
    </span>
    <span class="line-value" :style="`color: ${color || 'inherit'};`">{{ `${data.value}/${data.probability}%` }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    data: Object,
    color: String
  },
  setup () {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
.line {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  color: $text-font-color;
  .line-index {
    width: 22px;
    height: 22px;
    text-align: center;
    line-height: 22px;
    border-radius: 50%;
    margin-right: 6px;
  }
  .line-content {
    width: calc(100% - 100px);
    display: block;
    .line-title {
      font-size: 14px;
      color: $sub-title-color;
      margin-bottom: 4px;
      display: block;
    }
    .line-length {
      display: block;
      height: 12px;
      width: 100%;
      background-color: #BCBFBF;
      border-radius: 6px;
      position: relative;
      overflow: hidden;
      .line-length-checked {
        position: absolute;
        height: 12px;
        background-color: #26E0DD;
        border-radius: 6px;
      }
    }
  }
  .line-value {
    width: 63px;
    margin-left: 6px;
    padding-top: 12px;
    font-weight: 600;
  }
}
</style>
