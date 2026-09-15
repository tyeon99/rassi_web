<template>
  <div id="wrap">
    <CloseHeader />
    <main id="main" class="main">
      <ItemContent />
    </main>
  </div>
</template>

<script setup lang="ts">
import CloseHeader from '~/components/trigger-view/header/CloseHeader.vue'
import ItemContent from '~/components/trigger-view/item/ItemContent.vue'

</script>

<style scoped>
  @import '~/assets/css/trigger-view/common.css';
</style>