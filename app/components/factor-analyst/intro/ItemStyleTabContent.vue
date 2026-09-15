<template>
  <div class="introTabContent">
    <div class="itemStyleSection">
      <div class="topTitle">종목을 분석하는 <br /><span>10가지 종목스타일</span></div>
      <div class="introTop">
        <p>
          종목스타일에서는 각 개별 종목을 분석하는 10가지 스타일을 제공해 드립니다. 10가지 스타일은 5개의 라운드에서 확인이 가능합니다. 10가지 스타일은 점수에 따라 단계가 나누어 지며, 점수에 대한 정확한 근거를 확인하실 수 있습니다.
        </p>
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