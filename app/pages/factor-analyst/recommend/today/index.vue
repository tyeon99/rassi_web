<template>
  <div id="wrap" class="factor-analyst">
    <BackTitleHeader title="오늘의 스타일 추천" />
    <main id="main" class="main">
      <div class="recommendTodayTop">
        <span>TODAY'S PICK</span>
        <div class="txt">스타일의 성향과 지금 시장의 모멘텀을 분석해서 앞으로 한달 강세를 보일 종목을 추천해 드려요.</div>
        <button>
          <p>분석 근거 보기</p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3.33301L10.6667 7.99967L6 12.6663" stroke="#6565FF" stroke-width="1.33333" />
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