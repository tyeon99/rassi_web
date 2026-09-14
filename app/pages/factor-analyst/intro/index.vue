<template>
  <div id="wrap">
    <CloseHeader />
    <main id="main" class="main">
      <IntroContent />
    </main>
  </div>
</template>

<script setup lang="ts">
// style

import CloseHeader from '~/components/factor-analyst/header/CloseHeader.vue';
import IntroContent from '~/components/factor-analyst/intro/IntroContent.vue';

</script>

<style scoped>
  @import '~/assets/css/factor-analyst/common.css';
</style>