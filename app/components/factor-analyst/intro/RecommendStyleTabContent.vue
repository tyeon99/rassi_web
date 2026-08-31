<template>
  <div class="introTabContent">
    <div class="itemStyleSection">
      <div class="topTitle">고민할 것 없이 Pick<br /><span>추천스타일</span></div>
      <div class="introTop">
        <p>
          좋은 투자 종목을 찾고 싶다면 고민없이 추천스타일 종목에서 찾아보세요.
          좋은 퀄리티, 좋은 실적모멘텀, 좋은 미래전망, 좋은 밸류에이션 등 좋은 기준으로 조합된 스타일⁺는 추천스타일로 만나실 수 있습니다.
        </p>
      </div>
    </div>

    <ITCS07 />
    <ITCS08 />
    <ITCS09 />
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'
import ITCS07 from '~/components/factor-analyst/intro/sections/ITCS07.vue'
import ITCS08 from '~/components/factor-analyst/intro/sections/ITCS08.vue'
import ITCS09 from '~/components/factor-analyst/intro/sections/ITCS09.vue'

</script>