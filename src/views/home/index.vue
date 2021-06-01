
<template>
<div class="home-pae">
  <CommonApps></CommonApps>
  <Experience></Experience>
  <TypicalEvent></TypicalEvent>
  <EventDetail></EventDetail>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonApps from './common-apps.vue'
import Experience from './experience.vue'
import TypicalEvent from './typical-event.vue'
import EventDetail from './event-detail.vue'
export default defineComponent({
  name: 'home',
  components: {
    CommonApps,
    Experience,
    TypicalEvent,
    EventDetail
  },
  setup () {
    return {}
  }
})
</script>
