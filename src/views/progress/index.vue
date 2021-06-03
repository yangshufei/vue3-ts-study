<template>
  <div>
    <SearchForm></SearchForm>
    <Topic></Topic>
    <TypicalEvent></TypicalEvent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchForm from './search-form.vue'
import Topic from './topic.vue'
import TypicalEvent from './typical-events.vue'
export default defineComponent({
  components: {
    SearchForm,
    Topic,
    TypicalEvent
  },
  setup () {
    return {}
  }
})
</script>
