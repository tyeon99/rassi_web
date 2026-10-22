<!-- app/pages/index.vue -->
<template>
  <div id="wrap" class="my-portfolio">
    
    <main id="main" class="main">
      <!-- 포트폴리오 만들기 전 -->
      <template v-if="!hasPortfolio">
        <CreatePortfolio />
        <PortfolioStrategy />
      </template>

      <!-- 포트폴리오 만든 후 -->
      <template v-else>
        <MyPortfolio />
      </template>
    </main>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/my-portfolio/common.css'
import CreatePortfolio from '~/components/my-portfolio/main/CreatePortfolio.vue';
import PortfolioStrategy from '~/components/my-portfolio/main/PortfolioStrategy.vue';
import MyPortfolio from '~/components/my-portfolio/main/MyPortfolio.vue';

const hasPortfolio = ref(true)

</script>