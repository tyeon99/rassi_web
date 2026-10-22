<template>
  <div id="wrap" class="my-portfolio">
    <CloseHeader />
    <main id="main" class="main">
      <RebalancingCalendar />
    </main>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/my-portfolio/common.css'
import RebalancingCalendar from '~/components/my-portfolio/calendar/RebalancingCalendar.vue';
import CloseHeader from '~/components/my-portfolio/header/CloseHeader.vue';

</script>