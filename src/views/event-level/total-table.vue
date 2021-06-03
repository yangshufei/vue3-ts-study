<template>
  <div class="total-table">
    <div class="title">近13个月超限事件汇总</div>
    <el-table :data="tableList">
        <el-table-column prop="name" label="姓名" align="center" min-width="100px"></el-table-column>
        <el-table-column prop="a" label="省份" align="center" min-width="130px"></el-table-column>
        <el-table-column prop="b" label="年龄" align="center" min-width="100px" sortable>
          <template v-slot="scope">
            <div :class="compareRate(scope.row)">{{scope.row.b}}<span>?</span></div>
          </template>
        </el-table-column>
        <el-table-column prop="c" label="地址" align="center" min-width="100px"></el-table-column>
        <el-table-column prop="d" label="商品名称" align="center" min-width="200px"></el-table-column>
        <el-table-column prop="e" label="描述" align="center" min-width="200px" sortable></el-table-column>
        <el-table-column prop="f" label="商品详情" align="center" min-width="200px"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent, onMounted, ref } from 'vue'
interface List {
  id: string | number
  name: string
  a: string
  b: string
  c: string
  d?: string
  e?: string
  f?: string
}
export default defineComponent({
  setup () {
    const router = useRouter()
    const tableList = ref<List[]>([])
    onMounted(() => {
      tableList.value = [
        { id: 43221, name: '王小虎', a: '1', b: '2', c: '1' },
        { id: 43222, name: '王小虎', a: '1', b: '2', c: '1' },
        { id: 43223, name: '王小虎', a: '1', b: '2', c: '1' },
        { id: 43224, name: '王小虎', a: '1', b: '2', c: '1' }
      ]
    })

    function compareRate (row:List): string {
      const { a, b } = row
      return parseInt(a) < parseInt(b) ? 'red-word' : ''
    }

    function rowClick () {
      router.push({ name: 'Detail', params: {} })
    }

    return {
      tableList,
      compareRate,
      rowClick
    }
  }
})
</script>

<style lang="scss" scoped>
.total-table {
  // padding-bottom: 50px;
  // height: 300px;
  flex: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .title {
    padding: 20px 0;
    font-size: 18px;
  }
  .red-word{
    color: #e80e0e;
  }
}
</style>
