<template>
  <div class="offcanvas-section">
    <div class="title">
      <span>돈 버는 효율성은 괜찮을까?</span>
      <h1>GP/A는?</h1>
    </div>
    
    <div class="gpa-group">
      <div 
        v-for="(item, idx) in gpaList" 
        :key="idx" 
        class="gpa"
      >
        <div class="gpa-title">
          <p>{{ item.companyName }}의 GP/A 스코어는?</p>
          <span>{{ item.gpaScore }}</span>
        </div>
        <div class="gpa-txt">
          {{ item.description }}
        </div>
        <div class="gpa-box">
          <p>전 종목 중 {{ item.companyName }} GP/A의 위치는?</p>

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
              <span>12000</span>
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
    companyName: 'SK하이닉스',
    gpaScore: 86.2,
    description: '매출 총이익 2500억을 총자산 250억으로 나눈 값이예요.',
    score: 86.2
  },
  {
    companyName: '삼성전자',
    gpaScore: 74.5,
    description: '매출 총이익 1조 2000억을 총자산 1조 6000억으로 나눈 값이예요.',
    score: 74.5
  }
])
</script>