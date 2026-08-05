<template>
  <div class="content-section">
    <div class="title">
      <span>돈 버는 효율성은 괜찮을까?</span>
      <h1>GP/A는?</h1>
    </div>

    <div class="list">
      <div class="gpa-title">
        <p>SK하이닉스의 GP/A는?</p>
        <span>86.2</span>
      </div>
      <div class="gpa-txt !mb-0">
        매출 총이익 2500억을 총자산 250억으로 나눈 값이예요.
      </div>
    </div>

    <div class="list">
      <div class="gpa-title">
        <p>SK하이닉스가 속한 반도체 섹터의  평균 GP/A는?</p>
        <span>86.2</span>
      </div>
      <div class="gpa-txt !mb-0">
        반도체 섹터의 총 종목수는 32종목이고, 가장 높은 GP/A는 99.2, 가장 낮은 GP/A는 35.2 예요.
      </div>
    </div>
    
    <div class="list-group">
      <div 
        v-for="(item, idx) in gpaList" 
        :key="idx" 
        class="list"
      >
        <div class="gray-box">
          <p>{{ item.boxTxt }}</p>

          <div class="range-wrap">
            <div class="range">
              <div class="bar">
                <span class="avg"></span>
              </div>
              <div class="score" :style="{ width: `${item.score}%` }">
                <img
                  class="item-icon"
                  width="18"
                  src="~/assets/img/factor-analyst/main/item-circle.png"
                  alt="종목 아이콘"
                />
              </div>
            </div>
            <div class="txt">
              <span>0</span>
              <span>전종목 평균</span>
              <span>100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const gpaList = ref([
  {
    score: 86.2,
    boxTxt: '섹터에서 SK하이닉스의 백분위는?'
  },
  {
    score: 74.5,
    boxTxt: '전체 시장에서 SK하이닉스의 백분위는?'
  }
])
</script>