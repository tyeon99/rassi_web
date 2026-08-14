<template>
  <div class="introTabContent">
    <div class="itemStyleSection">
      <div class="title">종목의 강점과 약점을 보여주는 핵심 투자 지표</div>
      <div class="introTop">
        <div class="box">
          <strong>5개 라운드와 10개의 종목 스타일을 통해 현재 종목의 특징을 한눈에 확인해보세요.</strong>
          <p>
            • 단계별 신호와 현재 상태 확인<br />
            • 신호를 판단한 주요 근거 확인<br />
            • 같은 종목 스타일을 가진 유사 종목 확인
          </p>
        </div>
      </div>
    </div>
    <ITCS01 />
    <ITCS02 />
    <ITCS03 />
    <ITCS04 />
    <ITCS05 />
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'

import ITCS01 from '~/components/factor-analyst/intro/sections/ITCS01.vue'
import ITCS02 from '~/components/factor-analyst/intro/sections/ITCS02.vue'
import ITCS03 from '~/components/factor-analyst/intro/sections/ITCS03.vue'
import ITCS04 from '~/components/factor-analyst/intro/sections/ITCS04.vue'
import ITCS05 from '~/components/factor-analyst/intro/sections/ITCS05.vue'

</script>