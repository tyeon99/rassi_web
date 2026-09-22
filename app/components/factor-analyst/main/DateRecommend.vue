<template>
  <section class="mainSection">
    <div class="mainSection__title">
      <h2>
        최근 스타일 추천 종목은?
      </h2>
    </div>
    <div class="mainSection__content">
      <div class="current-recommend">
        <div 
          v-for="(item, idx) in recentList" 
          :key="idx" 
          class="box"
        >
          <div class="title">{{ item.title }}</div>
          <div class="txt">
            <p>현재 수익률</p>
            <strong :class="item.rate >= 0 ? 'up' : 'down'">
              {{ item.rate >= 0 ? `+${item.rate}%` : `${item.rate}%` }}
            </strong>
          </div>
        </div>
      </div>
      
      <div class="style-all">
        <button>날짜별 추천 모두 보기</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const recentList = ref([
  { title: '삼성전자가나', rate: +22.22 },
  { title: 'LG전자가나다라마바', rate: +22.22 },
  { title: '삼성전자가나', rate: -5.12 }
])
</script>