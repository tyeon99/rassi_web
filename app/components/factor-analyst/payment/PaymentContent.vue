<template>
  <div class="paymentContent">
    <div class="paymentContent__top">
      <img width="65" src="~/assets/img/factor-analyst/payment/top-img.png" alt="가입 아이콘">
      <strong>스타일 패스 가입하기</strong>
      <p>
        종목의 투자 이유를 한눈에 분석하고<br />
        매일 업데이트 되는 추천 스타일패스를 확인하세요.
      </p>
    </div>
    <div class="paymentContent__banner">
      <!-- 배너영역 -->
    </div>
    <div class="paymentContent__section">
      <PMCS01 />
      <PMCS02 />
      <PMCS03 />
    </div>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'
import PMCS01 from '~/components/factor-analyst/payment/sections/PMCS01.vue';
import PMCS02 from '~/components/factor-analyst/payment/sections/PMCS02.vue';
import PMCS03 from '~/components/factor-analyst/payment/sections/PMCS03.vue';

</script>