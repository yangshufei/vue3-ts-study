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
    const title = ref('最新发布事件')
    const list = [
      {
        id: '1',
        content: '2021年3月底，华为发布鸿蒙Beta3.0版本；5月25日华为原EMUI官微也更名为了HarmonyOS，并且放出了鸿蒙开机画面的视频。从开机画面可以发现，“Powered by Android”的字样已经变成了“HarmonyOS”。直到今天，华为发布鸿蒙OS 2.0，这意味着搭载鸿蒙的手机正式商用，这也意味着华为正式动了谷歌安卓“奶酪”。可以看到，华为正在倾尽全力加快鸿蒙操作系统的发展步伐。王成录表示，“越是艰难的时刻，越要坚持投入研发。据王成录透露，其负责的消费者软件部，每年研发预算为30亿至40亿元。实际上，做到技术领先并不难，难的是构建生态系统。'
      },
      {
        id: '2',
        content: '2021年3月底，华为发布鸿蒙Beta3.0版本；5月25日华为原EMUI官微也更名为了HarmonyOS，并且放出了鸿蒙开机画面的视频。从开机画面可以发现，“Powered by Android”的字样已经变成了“HarmonyOS”。直到今天，华为发布鸿蒙OS 2.0，这意味着搭载鸿蒙的手机正式商用，这也意味着华为正式动了谷歌安卓“奶酪”。可以看到，华为正在倾尽全力加快鸿蒙操作系统的发展步伐。王成录表示，“越是艰难的时刻，越要坚持投入研发。据王成录透露，其负责的消费者软件部，每年研发预算为30亿至40亿元。实际上，做到技术领先并不难，难的是构建生态系统。'
      },
      {
        id: '3',
        content: '2021年3月底，华为发布鸿蒙Beta3.0版本；5月25日华为原EMUI官微也更名为了HarmonyOS，并且放出了鸿蒙开机画面的视频。从开机画面可以发现，“Powered by Android”的字样已经变成了“HarmonyOS”。直到今天，华为发布鸿蒙OS 2.0，这意味着搭载鸿蒙的手机正式商用，这也意味着华为正式动了谷歌安卓“奶酪”。可以看到，华为正在倾尽全力加快鸿蒙操作系统的发展步伐。王成录表示，“越是艰难的时刻，越要坚持投入研发。据王成录透露，其负责的消费者软件部，每年研发预算为30亿至40亿元。实际上，做到技术领先并不难，难的是构建生态系统。'
      },
      {
        id: '4',
        content: '2021年3月底，华为发布鸿蒙Beta3.0版本；5月25日华为原EMUI官微也更名为了HarmonyOS，并且放出了鸿蒙开机画面的视频。从开机画面可以发现，“Powered by Android”的字样已经变成了“HarmonyOS”。直到今天，华为发布鸿蒙OS 2.0，这意味着搭载鸿蒙的手机正式商用，这也意味着华为正式动了谷歌安卓“奶酪”。可以看到，华为正在倾尽全力加快鸿蒙操作系统的发展步伐。王成录表示，“越是艰难的时刻，越要坚持投入研发。据王成录透露，其负责的消费者软件部，每年研发预算为30亿至40亿元。实际上，做到技术领先并不难，难的是构建生态系统。'
      },
      {
        id: '5',
        content: '2021年3月底，华为发布鸿蒙Beta3.0版本；5月25日华为原EMUI官微也更名为了HarmonyOS，并且放出了鸿蒙开机画面的视频。从开机画面可以发现，“Powered by Android”的字样已经变成了“HarmonyOS”。直到今天，华为发布鸿蒙OS 2.0，这意味着搭载鸿蒙的手机正式商用，这也意味着华为正式动了谷歌安卓“奶酪”。可以看到，华为正在倾尽全力加快鸿蒙操作系统的发展步伐。王成录表示，“越是艰难的时刻，越要坚持投入研发。据王成录透露，其负责的消费者软件部，每年研发预算为30亿至40亿元。实际上，做到技术领先并不难，难的是构建生态系统。'
      },
      {
        id: '6',
        content: '2021年3月底，华为发布鸿蒙Beta3.0版本；5月25日华为原EMUI官微也更名为了HarmonyOS，并且放出了鸿蒙开机画面的视频。从开机画面可以发现，“Powered by Android”的字样已经变成了“HarmonyOS”。直到今天，华为发布鸿蒙OS 2.0，这意味着搭载鸿蒙的手机正式商用，这也意味着华为正式动了谷歌安卓“奶酪”。可以看到，华为正在倾尽全力加快鸿蒙操作系统的发展步伐。王成录表示，“越是艰难的时刻，越要坚持投入研发。据王成录透露，其负责的消费者软件部，每年研发预算为30亿至40亿元。实际上，做到技术领先并不难，难的是构建生态系统。'
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
