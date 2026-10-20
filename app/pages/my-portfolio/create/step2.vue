<!-- app/pages/index.vue -->
<template>
  <div id="wrap" class="my-portfolio">
    <CloseHeader />
    <main id="main" class="main">
      <CreateTop :current-step="2" />
      <CreateStep02 />
    </main>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/my-portfolio/common.css'
import CloseHeader from '~/components/my-portfolio/header/CloseHeader.vue';
import CreateTop from '~/components/my-portfolio/create/CreateTop.vue';
import CreateStep02 from '~/components/my-portfolio/create/CreateStep02.vue';
</script>