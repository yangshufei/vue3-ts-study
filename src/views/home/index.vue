
<template>
<div class="home-pae">
  <CommonApps></CommonApps>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonApps from './common-apps.vue'
export default defineComponent({
  name: 'Home',
  components: {
    CommonApps
  },
  setup () {
    return {}
  }
})
</script>
