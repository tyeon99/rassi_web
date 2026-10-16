<!-- app/pages/index.vue -->
<template>
  <div id="wrap" class="my-portfolio">
    
    <main id="main" class="main">
      <CreatePortfolio />
      <PortfolioStrategy />
    </main>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/my-portfolio/common.css'
import CreatePortfolio from '~/components/my-portfolio/main/CreatePortfolio.vue';
import PortfolioStrategy from '~/components/my-portfolio/main/PortfolioStrategy.vue';
</script>