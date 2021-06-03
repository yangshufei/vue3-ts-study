<template>
  <div class="typical">
    <div class="app-divider">
      <span>{{ title }}</span>
    </div>
    <div class="typical-content" v-for="item of list" :key="item.id">
      {{ item.content }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const title = ref('典型超限事件')
    const list = [
      {
        id: '1',
        content: '2020-11-0117.30，B7-200F飞机在上海区域使用VNAN方式从31100英尺下降，机组使用人工选择速度、自动驾驶、自动油门接通，为增大下降率，使用减速板饼选择空速320节，期间下降率最大增至6128英尺/分钟。姿态-5.8度;机组快速收回减速板，空速由310节增至343节，后将选择空速调至300节，飞机空速仍继续增长，随后将VWNAV转换为V/S方式(选择垂直速度500英尺/分钟)继续下降，8秒后空速突破350节，触发“超最大限制表速Vmno"严重超限，机组断开自动驾驶，带赶减速，姿态由-5.0度增至0.5度，期间空速Vmo持续14秒，最大空速为351节，空中最大垂直载荷为1.74g。'
      },
      {
        id: '2',
        content: '2020-11-0117.30，B7-200F飞机在上海区域使用VNAN方式从31100英尺下降，机组使用人工选择速度、自动驾驶、自动油门接通，为增大下降率，使用减速板饼选择空速320节，期间下降率最大增至6128英尺/分钟。姿态-5.8度;机组快速收回减速板，空速由310节增至343节，后将选择空速调至300节，飞机空速仍继续增长，随后将VWNAV转换为V/S方式(选择垂直速度500英尺/分钟)继续下降，8秒后空速突破350节，触发“超最大限制表速Vmno"严重超限，机组断开自动驾驶，带赶减速，姿态由-5.0度增至0.5度，期间空速Vmo持续14秒，最大空速为351节，空中最大垂直载荷为1.74g。'
      },
      {
        id: '3',
        content: '2020-11-0117.30，B7-200F飞机在上海区域使用VNAN方式从31100英尺下降，机组使用人工选择速度、自动驾驶、自动油门接通，为增大下降率，使用减速板饼选择空速320节，期间下降率最大增至6128英尺/分钟。姿态-5.8度;机组快速收回减速板，空速由310节增至343节，后将选择空速调至300节，飞机空速仍继续增长，随后将VWNAV转换为V/S方式(选择垂直速度500英尺/分钟)继续下降，8秒后空速突破350节，触发“超最大限制表速Vmno"严重超限，机组断开自动驾驶，带赶减速，姿态由-5.0度增至0.5度，期间空速Vmo持续14秒，最大空速为351节，空中最大垂直载荷为1.74g。'
      },
      {
        id: '4',
        content: '2020-11-0117.30，B7-200F飞机在上海区域使用VNAN方式从31100英尺下降，机组使用人工选择速度、自动驾驶、自动油门接通，为增大下降率，使用减速板饼选择空速320节，期间下降率最大增至6128英尺/分钟。姿态-5.8度;机组快速收回减速板，空速由310节增至343节，后将选择空速调至300节，飞机空速仍继续增长，随后将VWNAV转换为V/S方式(选择垂直速度500英尺/分钟)继续下降，8秒后空速突破350节，触发“超最大限制表速Vmno"严重超限，机组断开自动驾驶，带赶减速，姿态由-5.0度增至0.5度，期间空速Vmo持续14秒，最大空速为351节，空中最大垂直载荷为1.74g。'
      },
      {
        id: '5',
        content: '2020-11-0117.30，B7-200F飞机在上海区域使用VNAN方式从31100英尺下降，机组使用人工选择速度、自动驾驶、自动油门接通，为增大下降率，使用减速板饼选择空速320节，期间下降率最大增至6128英尺/分钟。姿态-5.8度;机组快速收回减速板，空速由310节增至343节，后将选择空速调至300节，飞机空速仍继续增长，随后将VWNAV转换为V/S方式(选择垂直速度500英尺/分钟)继续下降，8秒后空速突破350节，触发“超最大限制表速Vmno"严重超限，机组断开自动驾驶，带赶减速，姿态由-5.0度增至0.5度，期间空速Vmo持续14秒，最大空速为351节，空中最大垂直载荷为1.74g。'
      },
      {
        id: '6',
        content: '2020-11-0117.30，B7-200F飞机在上海区域使用VNAN方式从31100英尺下降，机组使用人工选择速度、自动驾驶、自动油门接通，为增大下降率，使用减速板饼选择空速320节，期间下降率最大增至6128英尺/分钟。姿态-5.8度;机组快速收回减速板，空速由310节增至343节，后将选择空速调至300节，飞机空速仍继续增长，随后将VWNAV转换为V/S方式(选择垂直速度500英尺/分钟)继续下降，8秒后空速突破350节，触发“超最大限制表速Vmno"严重超限，机组断开自动驾驶，带赶减速，姿态由-5.0度增至0.5度，期间空速Vmo持续14秒，最大空速为351节，空中最大垂直载荷为1.74g。'
      }
    ]
    return {
      title,
      list
    }
  }
})
</script>

<style lang="scss">
.typical {
  margin: 20px;
  padding-bottom: 20px;
  .app-divider {
    display: table;
    white-space: nowrap;
    text-align: center;
    background: 0 0;
    font-weight: 500;
    width: 50%;
    margin: 16px auto;
    span {
      padding: 0 20px;
      font-size: 15px;
      color: rgba(250, 252, 252, 1);
      font-weight: bold;
    }
    &:before {
      content: "";
      display: table-cell;
      position: relative;
      top: 50%;
      width: 50%;
      border-top: 2px solid rgba(250, 252, 252, 0.3);
      transform: translateY(50%);
    }
    &:after {
      content: "";
      display: table-cell;
      position: relative;
      top: 50%;
      width: 50%;
      border-top: 2px solid rgba(250, 252, 252, 0.3);
      transform: translateY(50%);
    }
  }
  .typical-content {
    background-color: $module-bg;
    padding: 10px;
    color: rgba(199, 203, 210, 1);
    line-height: 17px;
    font-weight: bold;
    font-size: 12px;
    text-align: left;
    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    &:nth-child(2) {
      border-radius: 10px 10px 0 0;
    }
    &:last-child {
      border-radius: 0 0 10px 10px;
    }
  }
}
</style>
