<template>
  <el-form :model="formData" class="app-form" label-width="72px" size="mini">
    <el-row>
      <el-col v-for="item of formItem" :key="item.prop" :sm="12" :md="item.width">
        <el-form-item :label="`${item.label}:`" :label-width="item.labelWidth">
          <InputSelect v-if="item.type === 'airport'" :selectList="item.data" v-model:selectvalue="formData[item.prop]"></InputSelect>
          <el-select v-else-if="item.type === 'select'" v-model="formData[item.prop]" size="mini" class="app-select" placeholder="" popper-class="pd-select app-select-popper">
            <el-option v-for="option of item.data" :key="option.id" :label="option.name" :value="option.id"></el-option>
          </el-select>
          <BtnRadio v-else-if="item.type === 'radio'" :list="item.data" v-model:activeRadio="formData[item.prop]"/>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
import BtnRadio from './components/btn-radio.vue'
import InputSelect from './components/input-select.vue'
interface OptionData {
  name: string,
  id: string,
  fzm?: string,
  szm?: string,
  label?: string
}
interface FormItem {
  label: string
  type: 'select' | 'radio' | 'inputSelect'
  prop: string
  data: OptionData[]
  width?: number
  labelWidth?: number | string
}
export default defineComponent({
  components: {
    BtnRadio,
    InputSelect
  },
  setup () {
    const state = reactive({
      formItem: [
        {
          label: '机场',
          type: 'airport',
          prop: 'airport',
          data: [
            { name: 'ZBAA/ZBA', id: '1', fzm: 'ZBAA', szm: 'ZBY', label: '哆啦A梦机场' },
            { name: 'CYYY/YYY', id: '2', fzm: 'CYYY', szm: 'YYY', label: '蒙若利机场' },
            { name: 'EGLL/LHR', id: '3', fzm: 'EGLL', szm: 'LHR', label: '伦敦希思罗机场' }
          ],
          width: 7
        },
        {
          label: '跑道',
          type: 'select',
          prop: 'pd',
          data: [
            { name: '全部', id: '' },
            { name: '36', id: '1' },
            { name: '18', id: '2' }
          ],
          width: 9,
          labelWidth: '88px'
        },
        {
          label: '机型',
          type: 'radio',
          prop: 'jx',
          data: [
            { name: 'A320', id: '0' },
            { name: 'A330', id: '1' },
            { name: '全部机型', id: '2' }
          ],
          width: 8,
          labelWidth: '60px'
        },
        {
          label: '飞行阶段',
          type: 'radio',
          prop: 'fxjd',
          data: [
            { name: '起飞', id: '0' },
            { name: '着陆', id: '1' }
          ],
          width: 7
        },
        {
          label: '超限率类型',
          type: 'radio',
          prop: 'cxllx',
          data: [
            { name: '全部', id: '0' },
            { name: '轻度', id: '1' },
            { name: '严重', id: '2' }
          ],
          width: 9,
          labelWidth: '88px'
        },
        {
          label: '日期',
          type: 'radio',
          prop: 'rq',
          data: [
            { name: '近两周', id: '0' },
            { name: '近1月', id: '1' },
            { name: '近3月', id: '2' }
          ],
          width: 8,
          labelWidth: '60px'
        }
      ] as FormItem[],
      formData: {
        pd: '',
        airport: '请选择',
        jx: '0',
        fxjd: '0',
        cxllx: '0',
        rq: '0'
      }
    })

    watch(state.formData, (val) => {
      console.log(val)
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss">
.app-form {
  padding: 10px;
}
.pd-select {
  width: 90px!important;
  .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    background-color: transparent;
  }
}
</style>
