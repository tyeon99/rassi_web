<template>
  <div class="recommendResultContent__section">
    <div class="recommendResultContent__section--title">
      <h1>추천 스타일⁺ 종목 Pick5</h1>
    </div>
    <div class="recommendResultContent__section--txt">
      추천 스타일⁺ 종목으로 선정된 후 최대 1달 동안 성과 추척이 이루어지며, 이후에는 별도의 성과 추적이 진행되지 않습니다.
    </div>
    <div class="recommendResultContent__section--content">
      <div class="listGroup">
        <div 
          v-for="(item, idx) in pickList" 
          :key="idx" 
          class="list"
        >
          <div class="left">
            <div class="circle">
              <img 
                width="30" 
                src="~/assets/img/factor-analyst/main/item-circle.png" 
                alt="종목로고"
              >
            </div>
            <div class="name">
              <p>{{ item.name }}</p>
            </div>
          </div>
          <div class="right">
            <span>6/5기준 최대수익률 </span>
            <p class="up">{{ item.rate }}%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'

const pickList = [
  { name: '삼성전자', rate: '95.3' },
  { name: 'SK하이닉스', rate: '88.5' },
  { name: '현대차', rate: '82.1' },
  { name: '네이버', rate: '79.4' },
  { name: '카카오', rate: '75.8' }
]
</script>