<template>
  <div id="wrap" class="factor-analyst">
    <BackTitleHeader title="날짜별 파워스타일 Pick" />
    <main id="main" class="main">

      <DateListFilter />

      <div class="recommendTodayTop">
        <div class="txt">
          스타일의 성향과 시장의 모멘텀을 분석한 추천 이력과 이후 한 달간의 흐름을 확인해 보세요.
        </div>
        <button>
          <p>분석 근거 보기</p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3.33301L10.6667 7.99967L6 12.6663" stroke="#6565FF" stroke-width="1.33333"></path>
          </svg>
        </button>
      </div>

      <DateListContent />

    </main>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'
import BackTitleHeader from '~/components/factor-analyst/header/BackTitleHeader.vue';
import DateListContent from '~/components/factor-analyst/item/DateListContent.vue';
import DateListFilter from '~/components/factor-analyst/item/DateListFilter.vue';

</script>