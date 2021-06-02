<template>
  <div class="common-apps">
    <div class="const-wrap" :style="appListConst.length > 5 ? '' : 'justify-content: space-around;'">
      <div v-for="item in appListConst" :key="item.id" class="one-app" @click="() => jumpCommonApp(item)">
        <el-image :src="item.icon" fit="cover" class="app-icon"></el-image>
        <div class="app-name">{{item.name}}</div>
      </div>
      <div class="one-app" v-if="appList.length > 10" @click="expandApp">
        <el-image :src="expandAppIcon" fit="cover" class="app-icon"></el-image>
        <div class="app-name">全部应用</div>
      </div>
    </div>
    <el-dialog title="全部应用" v-model="allDialogShow" fullscreen>
      <div class="const-wrap">
        <div v-for="item in appList" :key="item.id" class="one-app" @click="() => jumpCommonApp(item)">
          <el-image :src="item.icon" fit="cover" class="app-icon"></el-image>
          <div class="app-name">{{item.name}}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import expandAppImg from '@/assets/image/expand-app.png'
interface AppItem {
  id: string | number
  icon: string
  name: string
  appCode?: string
}

export default defineComponent({
  name: 'commonApps',
  setup () {
    const router = useRouter()

    const expandAppIcon = ref(expandAppImg)
    // 方法一
    // const appListConst = ref<AppItem[]>([])
    // 方法二
    const state = reactive({
      appListConst: [] as AppItem[]
    })

    const allDialogShow = ref<boolean>(false)
    const appList :AppItem[] = reactive(
      [{
        id: 1001,
        icon: 'https://alipic.lanhuapp.com/SketchPng59cfa12c319744c574372ff90b3237156d77bc79af867431789d5992f999a97d',
        name: '事件等级',
        appCode: 'eventLevel'
      }, {
        id: 1002,
        icon: 'https://alipic.lanhuapp.com/SketchPng59cfa12c319744c574372ff90b3237156d77bc79af867431789d5992f999a97d',
        name: '智能生活',
        appCode: 'PeriodicSummary'
      }, {
        id: 1003,
        icon: 'https://alipic.lanhuapp.com/SketchPng59cfa12c319744c574372ff90b3237156d77bc79af867431789d5992f999a97d',
        name: '吃喝玩乐'
      }, {
        id: 1004,
        icon: 'https://alipic.lanhuapp.com/SketchPng59cfa12c319744c574372ff90b3237156d77bc79af867431789d5992f999a97d',
        name: '窝者家居',
        appCode: 'QAROverRun'
      }, {
        id: 1005,
        icon: 'https://alipic.lanhuapp.com/SketchPng59cfa12c319744c574372ff90b3237156d77bc79af867431789d5992f999a97d',
        name: '图书文教',
        appCode: 'FlightPreparation'
      }, {
        id: 1006,
        icon: 'https://alipic.lanhuapp.com/SketchPng59cfa12c319744c574372ff90b3237156d77bc79af867431789d5992f999a97d',
        name: '一周精选',
        appCode: 'PeriodicSummary'
      }, {
        id: 1007,
        icon: 'https://alipic.lanhuapp.com/SketchPng59cfa12c319744c574372ff90b3237156d77bc79af867431789d5992f999a97d',
        name: '智能生活'
      }, {
        id: 1008,
        icon: 'https://alipic.lanhuapp.com/SketchPng59cfa12c319744c574372ff90b3237156d77bc79af867431789d5992f999a97d',
        name: '吃喝玩乐',
        appCode: 'QAROverRun'
      }, {
        id: 1009,
        icon: 'https://alipic.lanhuapp.com/SketchPng59cfa12c319744c574372ff90b3237156d77bc79af867431789d5992f999a97d',
        name: '窝者家居',
        appCode: 'FlightPreparation'
      }, {
        id: 1010,
        icon: 'https://alipic.lanhuapp.com/SketchPng59cfa12c319744c574372ff90b3237156d77bc79af867431789d5992f999a97d',
        name: '图书文教',
        appCode: 'PeriodicSummary'
      }, {
        id: 1011,
        icon: 'https://alipic.lanhuapp.com/SketchPng59cfa12c319744c574372ff90b3237156d77bc79af867431789d5992f999a97d',
        name: '一周精选'
      }, {
        id: 1012,
        icon: 'https://alipic.lanhuapp.com/SketchPng59cfa12c319744c574372ff90b3237156d77bc79af867431789d5992f999a97d',
        name: '智能生活',
        appCode: 'QAROverRun'
      }]
    )

    const expandApp = () => {
      allDialogShow.value = true
    }

    const jumpCommonApp = (app: AppItem) => {
      if (app.appCode) {
        router.push({
          name: app.appCode
        }).then(() => {
          if (allDialogShow.value) allDialogShow.value = false
        })
      }
    }

    onMounted(() => {
      state.appListConst = appList.slice(0, 9)
      // appListConst.value = appList.slice(0, 4)
    })
    return {
      expandAppIcon,
      allDialogShow,
      ...toRefs(state),
      appList,
      jumpCommonApp,
      expandApp
    }
  }
})
</script>

<style lang="scss" scoped>
.common-apps {
  padding: 15px 70px 0;
  border-bottom: 2px solid $default-line-color;
  .const-wrap, .collapse-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .one-app {
    // 一行最多5个
    min-width: calc(20% - 20px);
    margin: 0 10px 25px;
    text-align: center;
    cursor: pointer;
    .app-icon {
      width: 69px;
      height: 69px;
      border-radius: 30px;
      overflow: hidden;
    }
    .app-name {
      margin-top: 8px;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
    }
  }
  .el-dialog__wrapper {
    & ::v-deep(.el-dialog__header) {
      padding: 35px 60px 10px;
    }
  }
}
</style>
