<template>
  <div class="topic-wrap">
    <div class="top-content" v-for="item of topicData" :key="item.title">
      <div class="title">{{ item.title }}</div>
      <TopLine v-for="it of item.list" :key="it.index" :color="colorList[it.index - 1]" :data="it"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import TopLine from './components/top-line.vue'
export interface TopicItem {
  index: number
  name: string
  value: number
  probability: number
}
interface topicDataType {
  title: string
  list: TopicItem[]
}
export default defineComponent({
  components: {
    TopLine
  },
  setup () {
    const state = reactive({
      colorList: ['#EA4025', '#F68000', '#31AF0B'] as string[],
      topicData: [
        {
          title: '发生次数/发生率TOP5事件',
          list: [
            { index: 1, name: '起飞俯仰率小', value: 80, probability: 75 },
            { index: 2, name: '起飞俯仰率小', value: 75, probability: 72.4 },
            { index: 3, name: '起飞俯仰率小', value: 68, probability: 65 },
            { index: 4, name: '起飞俯仰率小', value: 55, probability: 63 },
            { index: 5, name: '起飞俯仰率小', value: 50, probability: 59 }
          ]
        },
        {
          title: '环比上升TOP5事件',
          list: [
            { index: 1, name: '起飞俯仰率小', value: 80, probability: 75 },
            { index: 2, name: '起飞俯仰率小', value: 75, probability: 72.4 },
            { index: 3, name: '起飞俯仰率小', value: 68, probability: 65 },
            { index: 4, name: '起飞俯仰率小', value: 55, probability: 63 },
            { index: 5, name: '起飞俯仰率小', value: 50, probability: 59 }
          ]
        },
        {
          title: '同比上升TOP5事件',
          list: [
            { index: 1, name: '起飞俯仰率小', value: 80, probability: 75 },
            { index: 2, name: '起飞俯仰率小', value: 75, probability: 72.4 },
            { index: 3, name: '起飞俯仰率小', value: 68, probability: 65 },
            { index: 4, name: '起飞俯仰率小', value: 55, probability: 63 },
            { index: 5, name: '起飞俯仰率小', value: 50, probability: 59 }
          ]
        }
      ] as topicDataType[]
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.topic-wrap {
  width: calc(100% - 18px);
  margin: 0 auto !important;
  display: flex;
  flex-wrap: wrap;
  .top-content {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 10px;
    margin: 5px;
    flex: auto;
    min-width: 300px;
    .title {
      font-size: 15px;
      font-weight: 600;
      text-align: center;
      margin: 16px;
    }
  }
}
</style>
