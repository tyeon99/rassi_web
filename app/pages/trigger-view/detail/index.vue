<template>
  <div id="wrap" class="trigger-view">
    <CloseHeader />
    <main id="main" class="main">
      <DetailContent />
    </main>
  </div>
</template>

<script setup lang="ts">
// css
import '~/assets/css/trigger-view/common.css'

import CloseHeader from '~/components/trigger-view/header/CloseHeader.vue'
import DetailContent from '~/components/trigger-view/detail/DetailContent.vue'

</script>
