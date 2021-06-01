<template>
  <div class="experience-wrapper">
    <HomeModule title="时长总经历" :module="false">
      <template #content>
        <div class="experience-content">
          <ExperienceItems v-for="item in dataList" :key="item.title" :icon="item.icon" :title="item.title" :value="item.value" :unit="item.unit"></ExperienceItems>
        </div>
      </template>
    </HomeModule>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HomeModule from './components/home-module.vue'
import ExperienceItems from './components/experience-items.vue'

interface IExperienceItem {
  icon: string
  title: string
  value: string
  unit?: string
}
export default defineComponent({
  name: 'experience',
  components: {
    HomeModule,
    ExperienceItems
  },
  setup () {
    const dataList = ref<IExperienceItem[]>([
      {
        icon: 'https://alipic.lanhuapp.com/SketchPngb36a91e76a86aa38878cfea77d050bc41813432cfd6c899df39f652f7fbe1576',
        title: '总时长经历时间',
        value: '1234.5',
        unit: 'h'
      },
      {
        icon: 'https://alipic.lanhuapp.com/SketchPngb36a91e76a86aa38878cfea77d050bc41813432cfd6c899df39f652f7fbe1576',
        title: '时长经历时间',
        value: '1234.5',
        unit: 'h'
      },
      {
        icon: 'https://alipic.lanhuapp.com/SketchPngb36a91e76a86aa38878cfea77d050bc41813432cfd6c899df39f652f7fbe1576',
        title: '时长',
        value: '1234.5',
        unit: 'h'
      },
      {
        icon: 'https://alipic.lanhuapp.com/SketchPngb36a91e76a86aa38878cfea77d050bc41813432cfd6c899df39f652f7fbe1576',
        title: '总时长经历总时长经历',
        value: '123',
        unit: '次'
      },
      {
        icon: 'https://alipic.lanhuapp.com/SketchPngb36a91e76a86aa38878cfea77d050bc41813432cfd6c899df39f652f7fbe1576',
        title: '总时长经历总时长经历',
        value: '123',
        unit: '次'
      }
    ])
    return {
      dataList
    }
  }
})
</script>

<style lang="scss" scoped>
.experience-wrapper {
  .experience-content {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -25px;
    .experience-items {
      margin: 0 10px 25px;
    }
  }
}
</style>
