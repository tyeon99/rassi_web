<template>
  <div class="dateListContent">

    <div 
      v-for="(dateGroup, dIdx) in historyData" 
      :key="dIdx" 
      class="date-group"
    >
      <div class="date">{{ dateGroup.dateText }}</div>

      <div class="box-group">
        <div 
          v-for="(styleBox, bIdx) in dateGroup.styleBoxes" 
          :key="bIdx" 
          class="box"
        >
          <div class="box-title">
            <strong>{{ styleBox.styleName }}</strong>
            <p>
              최대 달성 수익률 <span>+{{ styleBox.maxReturn }}%</span>
            </p>
          </div>

          <div class="item-group">
            <div 
              v-for="(item, iIdx) in styleBox.items" 
              :key="iIdx" 
              class="item"
              :class="{ 'searched': isSearched(item.name) }"
            >
              <div class="left">
                <img width="20" :src="defaultLogo" alt="종목 이미지">
                <strong>{{ item.name }}</strong>
              </div>
              <div class="right">
                <strong :class="getRateClass(item.rate)">
                  {{ formatRate(item.rate) }}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- 기록 없을 때 -->
    <div class="no-record">
      <img width="20" src="~/assets/img/factor-analyst/detail/no-icon.png" alt="아이콘">
      <!-- 종목 없을 때 -->
      <p>검색한 종목이 Pick된 기록이 없어요.<br/>다른 종목을 검색해 보세요.</p>
      <!-- 파워스타일 없을 때 -->
      <p>검색한 파워스타일이 Pick된 기록이 없어요.<br />다른 파워스타일을 검색해 보세요.</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/factor-analyst/common.css'

import defaultLogo from '~/assets/img/factor-analyst/main/item-circle.png'

// 가상 검색어
const tempSearchKeyword = ref('한화')

const isSearched = (itemName: string) => {
  if (!tempSearchKeyword.value.trim()) return false
  return itemName.includes(tempSearchKeyword.value.trim())
}

interface StockItem {
  name: string
  rate: number
}

interface StyleBox {
  styleName: string
  maxReturn: number
  items: StockItem[]
}

interface DateGroup {
  dateText: string
  styleBoxes: StyleBox[]
}

const getRateClass = (rate: number) => {
  if (rate > 0) return 'up'
  if (rate < 0) return 'down'
  return ''
}

const formatRate = (rate: number) => {
  if (rate > 0) return `+${rate.toFixed(2)}%`
  if (rate < 0) return `${rate.toFixed(2)}%`
  return `0.00%`
}

const historyData = ref<DateGroup[]>([
  {
    dateText: '2026년 10월 14일',
    styleBoxes: [
      {
        styleName: '알짜저평가 스타일',
        maxReturn: 100,
        items: [
          { name: '한화', rate: 22.90 },
          { name: 'SK하이닉스', rate: -5.40 },
          { name: '삼성전자', rate: 12.15 },
          { name: 'LG에너지솔루션', rate: 0.00 },
          { name: 'NAVER', rate: 7.80 }
        ]
      },
      {
        styleName: '황금코어 스타일',
        maxReturn: 85.2,
        items: [
          { name: '현대차', rate: 15.30 },
          { name: '기아', rate: -2.10 },
          { name: 'POSCO홀딩스', rate: 8.90 },
          { name: '카카오', rate: -11.20 },
          { name: '셀트리온', rate: 4.50 }
        ]
      }
    ]
  },
  {
    dateText: '2026년 10월 13일',
    styleBoxes: [
      {
        styleName: '발사대기 스타일',
        maxReturn: 64.0,
        items: [
          { name: '크래프톤', rate: 31.20 },
          { name: '에코프로비엠', rate: -8.70 },
          { name: '하이브', rate: 0.00 },
          { name: '한화오션', rate: 19.40 },
          { name: '한국전력', rate: 3.10 }
        ]
      }
    ]
  }
])
</script>