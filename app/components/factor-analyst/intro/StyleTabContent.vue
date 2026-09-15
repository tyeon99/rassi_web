<template>
  <div class="introTabContent">
    <div class="itemStyleSection">
      <div class="topTitle">종목을 찾아내는 <br /><span>22가지 스타일⁺</span></div>
      <div class="introTop">
        <p>
          스타일⁺에서는 10개의 종목스타일을 조합하여 22가지의 조합 패턴을 만들었습니다.
          종목스타일이 조합된 22가지 스타일⁺ 패턴에서 어떤 종목들을 사야할지 어떤 종목을 피해야 할지 찾아보세요.
        </p>
      </div>
    </div>

    <ITCS06 />
    <AllStyleContent />
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'
import AllStyleContent from '~/components/factor-analyst/detail/AllStyleContent.vue';
import ITCS06 from '~/components/factor-analyst/intro/sections/ITCS06.vue'

</script>