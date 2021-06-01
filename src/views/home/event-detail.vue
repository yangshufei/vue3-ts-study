<template>
  <div class="event-detail-page">
    <div class="title">事件明细</div>
    <el-table :data="tableList">
      <el-table-column
        v-for="item in tableColumnList"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :header-align="item.headerAlign || 'center'"
        :align="item.align"
        :min-width="item.minWidth"
        :sortable="item.sortable">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { TableColumnCtx } from 'element-plus/packages/table/src/table.type'
interface EventDetailItem {
  id: string | number
  name: string
  level: string
  peakValue: number | string
  flightInfo: string
}

export default defineComponent({
  name: 'eventDetail',
  setup () {
    const state = reactive({
      tableList: [] as EventDetailItem[],
      tableColumnList: [] as Partial<TableColumnCtx>[]
    })

    onMounted(() => {
      state.tableColumnList = [
        { prop: 'id', label: '事件编号', align: 'center', minWidth: 100, sortable: false },
        { prop: 'name', label: '事件名称', align: 'center', minWidth: 130, sortable: false },
        { prop: 'level', label: '事件等级', align: 'center', minWidth: 100, sortable: 'custom' },
        { prop: 'peakValue', label: '事件峰值', align: 'center', minWidth: 100, sortable: 'custom' },
        { prop: 'flightInfo', label: '事件信息', headerAlign: 'left', align: 'left', minWidth: 150, sortable: false }
      ]
      state.tableList = [
        { id: 43221, name: '平飘距离过长', level: '三级', peakValue: 12345, flightInfo: '12/06 B1236 RD315 ZBAA-ZUUU\n机组：小俊， 张三' },
        { id: 43222, name: '接地速度大', level: '三级', peakValue: 12345, flightInfo: '12/06 B1236 RD315 ZBAA-ZUUU\n机组：小俊， 张三' },
        { id: 43223, name: '接地姿态小', level: '三级', peakValue: 12345, flightInfo: '12/06 B1236 RD315 ZBAA-ZUUU\n机组：小俊， 张三' },
        { id: 43224, name: '起飞俯仰率小', level: '三级', peakValue: 12345, flightInfo: '12/06 B1236 RD315 ZBAA-ZUUU\n机组：小俊， 张三' }
      ]
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.event-detail-page {
  .title {
    text-align: center;
    font-size: $md-font-size;
    color: $default-font-color;
    font-weight: 600;
    padding: 16px;
  }
}
</style>
