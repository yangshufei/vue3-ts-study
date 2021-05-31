<template>
  <div class="flight-experience">
    <homeModule title="飞行总经历" :module="false">
      <template #content>
        <div class="experience-content">
          <experienceItems v-for="item in dataList" :key="item.title" :icon="item.icon" :title="item.title" :value="item.value" :unit="item.unit"></experienceItems>
        </div>
      </template>
    </homeModule>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import homeModule from './components/home-module.vue'
import experienceItems from './components/experience-items.vue'

interface IExperienceItem {
  icon: string
  title: string
  value: string
  unit?: string
}
export default defineComponent({
  name: 'Experience',
  components: {
    homeModule,
    experienceItems
  },
  setup () {
    const dataList = ref<IExperienceItem[]>([
      {
        icon: 'https://alipic.lanhuapp.com/SketchPngb36a91e76a86aa38878cfea77d050bc41813432cfd6c899df39f652f7fbe1576',
        title: '总飞行经历时间',
        value: '1234.5',
        unit: 'h'
      },
      {
        icon: 'https://alipic.lanhuapp.com/SketchPngb36a91e76a86aa38878cfea77d050bc41813432cfd6c899df39f652f7fbe1576',
        title: '飞行经历时间',
        value: '1234.5',
        unit: 'h'
      },
      {
        icon: 'https://alipic.lanhuapp.com/SketchPngb36a91e76a86aa38878cfea77d050bc41813432cfd6c899df39f652f7fbe1576',
        title: '飞行时间',
        value: '1234.5',
        unit: 'h'
      },
      {
        icon: 'https://alipic.lanhuapp.com/SketchPngb36a91e76a86aa38878cfea77d050bc41813432cfd6c899df39f652f7fbe1576',
        title: '总飞行经历总飞行经历',
        value: '123',
        unit: '次'
      },
      {
        icon: 'https://alipic.lanhuapp.com/SketchPngb36a91e76a86aa38878cfea77d050bc41813432cfd6c899df39f652f7fbe1576',
        title: '总飞行经历总飞行',
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
.flight-experience {
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
