<template>
  <div class="bar">
    <div class="title">近12个月时间发生次数和发生率</div>
    <div>事件等级：
      <div class="tag" :class="computerBGC('1')" @click="()=>{active='1'}">全部</div>
      <div class="tag" :class="computerBGC('2')" @click="()=>{active='2'}">轻度</div>
      <div class="tag" :class="computerBGC('3')" @click="()=>{active='3'}">严重</div>
    </div>
    <div class="chart-wrap">
      <myChart ref="barChart"></myChart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import myChart, { ECOption } from '@/components/my-chart/index.vue'
import variables from '@/styles/_variables.scss'
export default defineComponent({
  name: 'bar',
  components: {
    myChart
  },
  setup () {
    const active = ref('1')
    const barChart = ref()
    function setBarOption () {
      const option: ECOption = {
        legend: {
          data: ['轻度', '严重'],
          bottom: 0,
          textStyle: {
            color: variables.mainFont
          },
          icon: 'circle',
          formatter: function (name:string) {
            return name + '事件'
          },
          itemGap: 25 // 图例每项之间的间隔
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: variables.mainFont
            }
          },
          textStyle: {
            color: variables.mainFont
          },
          backgroundColor: '#212f44',
          formatter: function (params: Array<Record<string, string | number>>) {
            const axisValue = params[0].axisValue
            let htmlStr =
          `
          <table style="text-align:left">
          <tr>
            <td>${axisValue}</td>
          </tr>
          <tr>
              <td><div style="margin-left:10px;">事件等级</div></td>
              <td>发生次数</td>
              <td>发生率</td>
          </tr>
          `
            params.forEach(v => {
              const { color, value, seriesName } = v
              htmlStr += `
            <tr>
                <td>
                  <span style="display: inline-block;width:0;height:8px;padding:0 4px;border-radius: 50%;background-color:${color};margin-right:10px;"></span>
                ${seriesName}</td>
                <td>${value}</td>
                <td>${value}%</td>
            </tr>
            `
            })
            return htmlStr + '</table>'
          }
        },
        // 侧边工具栏
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ['line', 'bar'] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        // title: {
        //   text: '近13个月时间发生次数和发生率',
        //   left: 'center',
        //   textStyle: {
        //     color: variables.mainFont,
        //     fontSize: 20
        //   }
        // },
        xAxis: {
          type: 'category',
          data: ['202003', '202004', '202005', '202006', '202007', '202008', '202009', '202010', '202011', '202012', '202013', '202014'],
          axisPointer: {
            type: 'shadow'
          },
          axisLine: {
            lineStyle: {
              color: variables.mainFont
            }
          },
          nameTextStyle: {
            color: variables.mainFont
          }
        },
        yAxis: {
          type: 'value',
          name: '单位：次',
          min: 0,
          max: 100,
          interval: 50,
          axisLabel: {
            formatter: '{value}'
          },
          axisLine: {
            lineStyle: {
              color: variables.mainFont
            }
          },
          nameTextStyle: {
            color: variables.mainFont
          },
          // 分割线
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#466d87',
              opacity: 0.1
            }
          }
        // splitNumber: 6
        },
        series: [
          {
            name: '轻度',
            type: 'bar',
            data: [{ value: 20.0 }, { value: 40.9 }, { value: 70.0 }, { value: 23.0 }, { value: 25.0 }, { value: 76.0 }, { value: 35.0 }, { value: 62.0 }, { value: 32.6 }, { value: 20.0 }, { value: 6.4 }, { value: 3.3 }],
            itemStyle: {
              color: '#45FFA1'
            }
          },
          {
            name: '严重',
            type: 'bar',
            data: [{ value: 20.6 }, { value: 50.9 }, { value: 90.0 }, { value: 26.4 }, { value: 28.7 }, { value: 70 }, { value: 75.0 }, { value: 82.0 }, { value: 48.7 }, { value: 18.8 }, { value: 6.0 }, { value: 2.3 }],
            itemStyle: {
              color: '#FF9E66'
            }
          },
          {
            name: '平均温度',
            type: 'line',
            // yAxisIndex: 1,
            data: [20.0, 20.2, 30.3, 40.5, 60.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 60.2],
            itemStyle: {
              color: '#45FFA1'
            },
            symbolSize: 8 // 转折点大小
          },
          {
            name: '平均温度',
            type: 'line',
            // yAxisIndex: 1,
            data: [40.0, 30.2, 40.3, 50.5, 60.3, 20.2, 40.3, 33.4, 33.0, 36.5, 32.0, 60.2],
            itemStyle: {
              color: '#FF9E66'
            },
            symbolSize: 8
          }
        ]
      }
      barChart.value.setOption(option)
    }

    onMounted(() => {
      setBarOption()
    })

    const computerBGC = (id:string) => {
      return active.value === id ? 'tag-active' : ''
    }
    return {
      active,
      barChart,
      computerBGC
    }
  }
})
</script>

<style lang="scss" scoped>
.bar {
  flex: 3;
  // padding-top: 50px;
  text-align: center;
  .title {
    padding: 20px 0;
    font-size: $md-font-size;
    height: 22px;
    line-height: 22px;
    letter-spacing: 1px;
    font-weight: 500;
  }
  .tag {
    background-color: $default-btn-bg;
    display: inline-block;
    height: 30px;
    padding: 0 25px;
    margin-right: 10px;
    line-height:30px;
    font-size: $sm-font-size;
    color: $default-font-color;
    // border: 1px solid #d9ecff;
    border-radius: 6px;
    box-sizing: border-box;
    white-space: nowrap;
    cursor: pointer;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10+ and Edge */
    user-select: none; /* Standard syntax */
  }
  .tag-active{
    background-color: $default-btn-selected-bg;
    color: #142928;
  }
  .chart-wrap{
    height: 300px;
     .my-chart {
      height: 100%;
      display: inline-block;
      width: 100%;
    }
  }
}
</style>
