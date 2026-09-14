<template>
  <div id="wrap">
    <CloseHeader />
    <main id="main" class="main">
      <AllStyleContent class="p-5" />
    </main>
  </div>
</template>

<script setup lang="ts">
// style

import CloseHeader from '~/components/factor-analyst/header/CloseHeader.vue';
import AllStyleContent from '~/components/factor-analyst/detail/AllStyleContent.vue';

</script>

<style scoped>
  @import '~/assets/css/factor-analyst/common.css';
</style>