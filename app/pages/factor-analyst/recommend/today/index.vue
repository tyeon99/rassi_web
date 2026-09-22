<template>
  <div id="wrap" class="factor-analyst">
    <BackTitleHeader title="오늘의 스타일 추천" />
    <main id="main" class="main">
      <div class="recommendTodayTop">
        <div class="txt">스타일의 성향과 지금 시장의 모멘텀을 분석해서 앞으로 한달 강세를 보일 종목을 추천해 드려요.</div>
        <button>
          <p>분석 근거 보기</p>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <RecommendTodayContent />
    </main>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'
import BackTitleHeader from '~/components/factor-analyst/header/BackTitleHeader.vue'
import RecommendTodayContent from '~/components/factor-analyst/recommend/RecommendTodayContent.vue'

</script>