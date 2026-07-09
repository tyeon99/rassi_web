<!-- app/pages/index.vue -->
<template>
  <div id="wrap">
    <MainHeader />
    <MainTab />
    <main id="main" class="main">
      <TodayRecommend />
      <DateRecommend />
      <RecommendRecipe />
      <AllStyle />
    </main>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'
// components
import MainHeader from '~/components/factor-analyst/header/MainHeader.vue'
import MainTab from '~/components/factor-analyst/main/MainTab.vue'
import TodayRecommend from '~/components/factor-analyst/main/TodayRecommend.vue'
import DateRecommend from '~/components/factor-analyst/main/DateRecommend.vue'
import RecommendRecipe from '~/components/factor-analyst/main/RecommendStyle.vue'
import AllStyle from '~/components/factor-analyst/main/AllStyle.vue'

</script>