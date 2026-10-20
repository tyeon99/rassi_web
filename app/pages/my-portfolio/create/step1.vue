<!-- app/pages/index.vue -->
<template>
  <div id="wrap" class="my-portfolio">
    <CloseHeader />
    <main id="main" class="main">
      <CreateTop :current-step="1" />
      <CreateStep01 />
    </main>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/my-portfolio/common.css'
import CloseHeader from '~/components/my-portfolio/header/CloseHeader.vue';
import CreateTop from '~/components/my-portfolio/create/CreateTop.vue';
import CreateStep01 from '~/components/my-portfolio/create/CreateStep01.vue';
</script>