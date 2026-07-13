<template>
  <div id="wrap">
    <BackHeader />
    <main id="main" class="main">
      <RecommendResultContent />
    </main>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'
import BackHeader from '~/components/factor-analyst/header/BackHeader.vue';
import RecommendResultContent from '~/components/factor-analyst/recommend/RecommendResultContent.vue';

</script>