
<template>
<div class="home-pae">
  <CommonApps></CommonApps>
  <Experience></Experience>
  <TypicalEvent></TypicalEvent>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonApps from './common-apps.vue'
import Experience from './experience.vue'
import TypicalEvent from './typical-event.vue'
export default defineComponent({
  name: 'Home',
  components: {
    CommonApps,
    Experience,
    TypicalEvent
  },
  setup () {
    return {}
  }
})
</script>
