<template>
  <div class="typical-overrun-event">
    <homeModule title="事件类型">
      <template #content>
        <div class="event-item" v-for="(item, index) in constList" :key="index">{{item}}</div>
        <el-collapse v-model="collapseStatus" class="single-collapse">
          <el-collapse-item name="item">
            <div class="event-item" v-for="(item, index) in collapseList" :key="index">{{item}}</div>
          </el-collapse-item>
        </el-collapse>
        <div class="show-all" v-if="eventList.length > lengthLimit">
          <div class="btn" @click="switchAll">
            <i class="reda-icon" :class="collapseStatus.length ? 'ascending' : 'descending'"></i>
            <span>{{ collapseStatus.length ? '收起' : '查看全部' }}</span>
          </div>
        </div>
      </template>
    </homeModule>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import homeModule from './components/home-module.vue'
export default defineComponent({
  name: 'Home',
  components: {
    homeModule
  },
  setup () {
    const lengthLimit = ref<number>(2)
    const collapseStatus = ref<string[]>([])
    const constList = ref<string[]>([])
    const collapseList = ref<string[]>([])

    const eventList = ref<string[]>([
      '2020-11-0117:30, B777-200F飞机在上海区域使用VNAV方式从31100英尺下降，机组使用人工选择速度、自动驾驶、自动油门接通，为增大下降率，使用减速板饼选择空速320节，期间下降率最大增至6128英尺/分钟，姿态-5.8度；机组快速收回减速板，空速由310节增至343节，后将选择空速调至300节，飞机空速仍继续增长，随后将VNAV转换为V/S方式（选择垂直速度500英尺/分钟）继续下降，8秒后空速突破350节，触发“超最大限制表速Vm。"严重超限，机组断开自动驾驶，带赶减速，姿态由-5.0度增至0.5度，期间空速Vm。持续14秒，最大空速为351节，空中最大垂直载荷为1.74g',
      '2020-11-0117:30, B777-200F飞机在上海区域使用VNAV方式从31100英尺下降，机组使用人工选择速度、自动驾驶、自动油门接通，为增大下降率，使用减速板饼选择空速320节，期间下降率最大增至6128英尺/分钟，姿态-5.8度；机组快速收回减速板，空速由310节增至343节，后将选择空速调至300节，飞机空速仍继续增长，随后将VNAV转换为V/S方式（选择垂直速度500英尺/分钟）继续下降，8秒后空速突破350节，触发“超最大限制表速Vm。"严重超限，机组断开自动驾驶，带赶减速，姿态由-5.0度增至0.5度，期间空速Vm。持续14秒，最大空速为351节，空中最大垂直载荷为1.74g',
      '2020-11-0117:30, B777-200F飞机在上海区域使用VNAV方式从31100英尺下降，机组使用人工选择速度、自动驾驶、自动油门接通，为增大下降率，使用减速板饼选择空速320节，期间下降率最大增至6128英尺/分钟，姿态-5.8度；机组快速收回减速板，空速由310节增至343节，后将选择空速调至300节，飞机空速仍继续增长，随后将VNAV转换为V/S方式（选择垂直速度500英尺/分钟）继续下降，8秒后空速突破350节，触发“超最大限制表速Vm。"严重超限，机组断开自动驾驶，带赶减速，姿态由-5.0度增至0.5度，期间空速Vm。持续14秒，最大空速为351节，空中最大垂直载荷为1.74g',
      '2020-11-0117:30, B777-200F飞机在上海区域使用VNAV方式从31100英尺下降，机组使用人工选择速度、自动驾驶、自动油门接通，为增大下降率，使用减速板饼选择空速320节，期间下降率最大增至6128英尺/分钟，姿态-5.8度；机组快速收回减速板，空速由310节增至343节，后将选择空速调至300节，飞机空速仍继续增长，随后将VNAV转换为V/S方式（选择垂直速度500英尺/分钟）继续下降，8秒后空速突破350节，触发“超最大限制表速Vm。"严重超限，机组断开自动驾驶，带赶减速，姿态由-5.0度增至0.5度，期间空速Vm。持续14秒，最大空速为351节，空中最大垂直载荷为1.74g'
    ])

    onMounted(() => {
      constList.value = eventList.value.slice(0, lengthLimit.value)
      if (eventList.value.length > lengthLimit.value) {
        collapseList.value = eventList.value.slice(lengthLimit.value)
      }
    })
    function switchAll () {
      if (collapseStatus.value.length) {
        collapseStatus.value = []
      } else {
        collapseStatus.value = ['item']
        console.log(collapseStatus.value)
      }
    }
    return {
      lengthLimit,
      constList,
      collapseList,
      eventList,
      collapseStatus,
      switchAll
    }
  }
})
</script>

<style lang="scss" scoped>
.typical-overrun-event {
  .event-item {
    font-weight: 600;
    line-height: 22px;
    overflow: hidden;
    transition: all .5s ease-in-out;
    color: $text-font-color;
    font-size: $md-font-size;
    &:not(:first-child) {
      border-top: 1px solid $default-line-color;
      padding-top: 15px;
      margin-top: 15px;
    }
  }
  .el-collapse {
    .event-item {
      border-top: 1px solid $default-line-color;
      padding-top: 15px;
      margin-top: 15px;
    }
  }
  .show-all {
    text-align: center;
    padding-top: 10px;
    .btn {
      cursor: pointer;
      display: inline-block;
      width: 120px;
      height: 36px;
      line-height: 36px;
      border-radius: 18px;
      background-color: $default-btn-bg;
      font-size: $md-font-size;
      color: $default-font-color;
      .reda-icon {
        margin-right: 5px;
      }
    }
  }
}
</style>
