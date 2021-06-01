<template>
  <div class="experience-items">
    <el-image :src="icon" fit="cover" class="icon"></el-image>
    <div class="content">
      <div class="title">{{title}}</div>
      <span class="value">{{value.toString() + unit}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'experienceItems',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: ''
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.experience-items {
  background-color: $module-bg;
  border-radius: 0 6px 6px 0;
  display: flex;
  height: 63px;
  &:last-child {
    margin-right: 0;
  }
  .icon {
    height: 63px;
    width: 66px;
  }
  .content {
    width: 145px;
    height: 45px;
    margin-left: 7px;
    white-space: nowrap;
    padding: 10px 4px;
    overflow: hidden;
    .title {
      color: $sm-title-font-color;
      font-size: 14px;
      height: 20px;
      line-height: 20px;
    }
    .value {
      color: $default-font-color;
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
    }
  }
}
</style>
