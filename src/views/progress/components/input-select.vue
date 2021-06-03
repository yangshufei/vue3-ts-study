<template>
  <el-dropdown trigger="click" placement="bottom-start" @command="handleCommand">
    <span class="dropdown-btn">
    {{ selectvalue }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <template #dropdown>
      <el-dropdown-menu class="app-select-popper">
        <span>
          <el-input v-model="searchValue" size="mini" maxlength="4" prefix-icon="el-icon-search" class="dropdown-input" placeholder="输入英文搜索"></el-input>
        </span>
        <el-dropdown-item v-for="item of list" :key="item.id" class="dropdown-item f-close"  :command="item.fzm">
          <div class="dropdown-code">{{ `${item.fzm} / ${item.szm}` }}</div>
          <div class="dropdown-name">{{ item.label }}</div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
interface OptionData {
  name: string
  id: string
  fzm: string
  szm: string
  label: string
}
export default defineComponent({
  name: 'inputSelect',
  props: {
    selectvalue: {
      type: String
    },
    selectList: {
      type: Array as PropType<OptionData[]>,
      default: () => {
        return []
      }
    }
  },
  setup (props, ctx) {
    const searchValue = ref('')
    const list = ref(props.selectList)

    watch(props.selectList, (val) => {
      list.value = val
    }, {
      deep: true,
      immediate: true
    })
    watch(searchValue, (val) => {
      // 用户输入搜索
      list.value = (props.selectList as OptionData[]).filter((it: OptionData) => it.fzm.indexOf(val) !== -1 || it.szm.indexOf(val) !== -1)
    })

    const handleCommand = (command: string) => {
      ctx.emit('update:selectvalue', command)
    }
    return {
      searchValue,
      list,
      handleCommand
    }
  }
})
</script>

<style lang="scss">
.dropdown-input {
  width: calc(100% - 20px);
  margin: 2px auto 8px;
  display: block;
  .el-input__inner {
    background-color: $module-bg;
    border-radius: 14px;
    border: none;
    color: $default-font-color;
  }
}
.dropdown-item {
  color: white;
  height: 46px;
  position: relative;
}
.f-close:not(:last-child):after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10px;
  height: 1px;
  width: calc(100% - 20px);
  background-color: $default-line-color;
}
</style>
<style scoped lang="scss">
.dropdown-btn {
  background-color: $default-btn-bg;
  cursor: pointer;
  color: #FAFCFC;
  border: none;
  border-radius: 6px;
  width: 46px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  font-size: $sm-font-size;
  outline: none;
}
.dropdown-code {
  font-size: 12px;
  line-height: 1;
  padding-top: 8px;
}
.dropdown-name {
  font-size: 12px;
  line-height: 1.6;
  color: #cdcdcd;
}
.el-icon--right {
  position: absolute;
  top: 8px;
  right: 5px;
}
</style>
