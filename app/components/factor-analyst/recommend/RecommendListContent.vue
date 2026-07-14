<template>
  <div class="recommendListContent">
    <div 
      v-for="(group, gIdx) in listGroups" 
      :key="gIdx" 
      class="recommendListContent__list"
      :class="{ today: gIdx === 0 }"
    >
      <div v-if="gIdx === 0" class="today-bg"></div>
      
      <div class="date">
        <p>{{ group.dateText }}</p>
        <span v-if="gIdx === 0">TODAY</span>
      </div>
      
      <div class="list">
        <button 
          v-for="(card, cIdx) in group.cards" 
          :key="cIdx"
        >
          <div class="top">
            <strong>{{ card.styleName }}</strong>
            <span>{{ card.subTitle }}</span>
          </div>
          <div class="bottom">
            <div 
              v-for="(item, iIdx) in card.items" 
              :key="iIdx" 
              class="item"
            >
              <div class="left">
                <img width="20" src="~/assets/img/factor-analyst/main/item-circle.png" alt="종목 아이콘">
                <p>{{ item.name }}</p>
              </div>
              <div class="right">
                <p class="up">{{ item.rate }}</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'

const listGroups = [
  {
    dateText: '2026년 6월 30일',
    cards: [
      {
        styleName: '가격선행 스타일',
        subTitle: '수익률 TOP2',
        items: [
          { name: '한화', rate: '22.90%' },
          { name: '아모레퍼시픽', rate: '22.90%' }
        ]
      },
      {
        styleName: '수급선행 스타일',
        subTitle: '수익률 TOP2',
        items: [
          { name: '삼성전자', rate: '15.40%' },
          { name: 'SK하이닉스', rate: '12.10%' }
        ]
      }
    ]
  },
  {
    dateText: '2026년 6월 29일',
    cards: [
      {
        styleName: '실적성장 스타일',
        subTitle: '수익률 TOP2',
        items: [
          { name: '현대차', rate: '8.50%' },
          { name: '기아', rate: '7.20%' }
        ]
      },
      {
        styleName: '밸류에이션 스타일',
        subTitle: '수익률 TOP2',
        items: [
          { name: 'LG화학', rate: '5.90%' },
          { name: '네이버', rate: '4.30%' }
        ]
      }
    ]
  },
  {
    dateText: '2026년 6월 28일',
    cards: [
      {
        styleName: '가격선행 스타일',
        subTitle: '수익률 TOP2',
        items: [
          { name: '한화', rate: '19.20%' },
          { name: '아모레퍼시픽', rate: '17.50%' }
        ]
      },
      {
        styleName: '수급선행 스타일',
        subTitle: '수익률 TOP2',
        items: [
          { name: '카카오', rate: '6.10%' },
          { name: '셀트리온', rate: '5.80%' }
        ]
      }
    ]
  },
  {
    dateText: '2026년 6월 27일',
    cards: [
      {
        styleName: '실적성장 스타일',
        subTitle: '수익률 TOP2',
        items: [
          { name: '삼성바이오', rate: '9.30%' },
          { name: '유한양행', rate: '8.10%' }
        ]
      },
      {
        styleName: '거래대금 스타일',
        subTitle: '수익률 TOP2',
        items: [
          { name: '포스코DX', rate: '11.20%' },
          { name: '에코프로', rate: '10.50%' }
        ]
      }
    ]
  }
]
</script>