<template>
  <div class="typical-event">
    <HomeModule title="事件类型">
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
    </HomeModule>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import HomeModule from './components/home-module.vue'
export default defineComponent({
  name: 'typicalEvent',
  components: {
    HomeModule
  },
  setup () {
    const lengthLimit = ref<number>(2)
    const collapseStatus = ref<string[]>([])
    const constList = ref<string[]>([])
    const collapseList = ref<string[]>([])

    const eventList = ref<string[]>([
      '2021年3月底，华为发布鸿蒙Beta3.0版本；5月25日华为原EMUI官微也更名为了HarmonyOS，并且放出了鸿蒙开机画面的视频。从开机画面可以发现，“Powered by Android”的字样已经变成了“HarmonyOS”。直到今天，华为发布鸿蒙OS 2.0，这意味着搭载鸿蒙的手机正式商用，这也意味着华为正式动了谷歌安卓“奶酪”。可以看到，华为正在倾尽全力加快鸿蒙操作系统的发展步伐。王成录表示，“越是艰难的时刻，越要坚持投入研发。据王成录透露，其负责的消费者软件部，每年研发预算为30亿至40亿元。实际上，做到技术领先并不难，难的是构建生态系统。',
      '2021年3月底，华为发布鸿蒙Beta3.0版本；5月25日华为原EMUI官微也更名为了HarmonyOS，并且放出了鸿蒙开机画面的视频。从开机画面可以发现，“Powered by Android”的字样已经变成了“HarmonyOS”。直到今天，华为发布鸿蒙OS 2.0，这意味着搭载鸿蒙的手机正式商用，这也意味着华为正式动了谷歌安卓“奶酪”。可以看到，华为正在倾尽全力加快鸿蒙操作系统的发展步伐。王成录表示，“越是艰难的时刻，越要坚持投入研发。据王成录透露，其负责的消费者软件部，每年研发预算为30亿至40亿元。实际上，做到技术领先并不难，难的是构建生态系统。',
      '2021年3月底，华为发布鸿蒙Beta3.0版本；5月25日华为原EMUI官微也更名为了HarmonyOS，并且放出了鸿蒙开机画面的视频。从开机画面可以发现，“Powered by Android”的字样已经变成了“HarmonyOS”。直到今天，华为发布鸿蒙OS 2.0，这意味着搭载鸿蒙的手机正式商用，这也意味着华为正式动了谷歌安卓“奶酪”。可以看到，华为正在倾尽全力加快鸿蒙操作系统的发展步伐。王成录表示，“越是艰难的时刻，越要坚持投入研发。据王成录透露，其负责的消费者软件部，每年研发预算为30亿至40亿元。实际上，做到技术领先并不难，难的是构建生态系统。',
      '2021年3月底，华为发布鸿蒙Beta3.0版本；5月25日华为原EMUI官微也更名为了HarmonyOS，并且放出了鸿蒙开机画面的视频。从开机画面可以发现，“Powered by Android”的字样已经变成了“HarmonyOS”。直到今天，华为发布鸿蒙OS 2.0，这意味着搭载鸿蒙的手机正式商用，这也意味着华为正式动了谷歌安卓“奶酪”。可以看到，华为正在倾尽全力加快鸿蒙操作系统的发展步伐。王成录表示，“越是艰难的时刻，越要坚持投入研发。据王成录透露，其负责的消费者软件部，每年研发预算为30亿至40亿元。实际上，做到技术领先并不难，难的是构建生态系统。'
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
.typical-event {
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
