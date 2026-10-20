<!-- app/pages/index.vue -->
<template>
  <div id="wrap" class="my-portfolio">
    <BackHeader />
    <main id="main" class="main">
      <DetailTop />
      <ManagementGuide />
      <CumulativeReturn />
      <MonthlyReturn />
      <CurrentSituation />
      <SellHistory />
    </main>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/my-portfolio/common.css'
import BackHeader from '~/components/my-portfolio/header/BackHeader.vue';
import CumulativeReturn from '~/components/my-portfolio/detail/CumulativeReturn.vue';
import DetailTop from '~/components/my-portfolio/detail/DetailTop.vue';
import ManagementGuide from '~/components/my-portfolio/detail/ManagementGuide.vue';
import MonthlyReturn from '~/components/my-portfolio/detail/MonthlyReturn.vue';
import CurrentSituation from '~/components/my-portfolio/detail/CurrentSituation.vue';
import SellHistory from '~/components/my-portfolio/detail/SellHistory.vue';
</script>