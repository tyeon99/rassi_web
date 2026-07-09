<template>
  <section class="mainSection">
    <div class="mainSection__title">
      <h2>
        날짜별 추천 스타일+
      </h2>
    </div>
    <div class="mainSection__content">
      <div class="dateList">
        <button 
          v-for="(dateItem, didx) in dateListData" 
          :key="didx" 
          class="date"
        >
          <span>{{ dateItem.date }}</span>
          <div class="txt-group">
            
            <div 
              v-for="(txt, tidx) in dateItem.texts" 
              :key="tidx" 
              class="txt"
            >
              <p>{{ txt.style }}</p>
              <p>{{ txt.item }} <em class="up">{{ txt.rate }}</em></p>
            </div>

          </div>
        </button>
      </div>
      <div class="style-all">
        <button>날짜별 추천 스타일 모두 보기</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'

const dateListData = [
  { 
    date: '6월 8일 금요일', 
    texts: [
      { style: '정석강세 스타일', item: '삼성전자', rate: '+22.90%' },
      { style: '수급선행 스타일', item: 'SK하이닉스', rate: '+15.40%' }
    ] 
  },
  { 
    date: '6월 7일 목요일', 
    texts: [
      { style: '황금밸런스 스타일', item: '현대차', rate: '+5.20%' },
      { style: '정석강세 스타일', item: '네이버', rate: '+8.90%' }
    ] 
  },
  { 
    date: '6월 6일 수요일', 
    texts: [
      { style: '수급선행 스타일', item: '카카오', rate: '-2.10%' },
      { style: '정석강세 스타일', item: '삼성전자', rate: '+22.90%' }
    ] 
  }
]
</script>