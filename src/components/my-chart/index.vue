<template>
  <div class="my-chart" ref="myChart"></div>
</template>

<script lang="ts">
import { defineComponent, onActivated, onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts/core'
import { BarChart, BarSeriesOption, RadarChart, RadarSeriesOption, LineChart, LineSeriesOption } from 'echarts/charts'
import { TitleComponent, TitleComponentOption, GridComponent, GridComponentOption, LegendComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
// 注册必须的组件
echarts.use([TitleComponent, GridComponent, BarChart, RadarChart, CanvasRenderer, LegendComponent, TooltipComponent, LineChart])
// // 通过 ComposeOption 来组合出的 Option 类型
export type ECOption = echarts.ComposeOption<BarSeriesOption | RadarSeriesOption | GridComponentOption | TitleComponentOption | LineSeriesOption>

export default defineComponent({
  name: 'MyChart',
  setup () {
    const chart = ref<echarts.ECharts | undefined>(undefined)
    const myChart = ref<HTMLElement | undefined>(undefined)
    function initEchart () {
      chart.value = echarts.init(myChart.value as HTMLElement)
    }

    function setOption (option: ECOption): void {
      (chart.value as echarts.ECharts).setOption(option)
    }

    onMounted(() => {
      initEchart()
    })
    onActivated(() => {
      if (chart.value) {
        chart.value.resize()
      }
    })
    onUnmounted(() => {
      if (!chart.value) return
      chart.value.dispose()
      chart.value = undefined
    })
    return {
      chart,
      myChart,
      initEchart,
      setOption
    }
  }
})
</script>
