<template>
  <div class="current-situation">
    
    <div 
      v-for="(item, idx) in returnList" 
      :key="idx" 
      class="box"
    >
      <div class="top">
        <div class="left">
          <img width="30" src="~/assets/img/my-portfolio/common/item-img.png" alt="종목 아이템">
          <div class="item">
            <div class="name">
              <strong>{{ item.name }}</strong>
              <span>{{ item.code }}</span>
            </div>
            <div class="date">
              <p>{{ item.date }} 편입</p>
              <span v-if="item.isNew">신규</span>
            </div>
          </div>
        </div>
        <div class="right">
          <span :class="getRateClass(item.rate)">
            {{ formatRateText(item.rate) }}
          </span>
        </div>
      </div>

      <div class="range-wrap">
        <div class="txt">
          <p>
            비중 
            <strong :class="{ up: item.weight > 15 }">{{ item.weight }}%</strong>
          </p>
          <span v-if="item.weight > 15">상한 15%초과</span>
        </div>
        <div class="range">
          <div class="bar">
            <span class="avg"></span>
          </div>
          <div 
            class="score" 
            :class="{ up: item.weight > 15 }" 
            :style="{ width: `${Math.min((item.weight / 30) * 100, 100)}%` }"
          ></div>
        </div>
        <div class="txt">
          <p class="avg-txt" style="left: 50%;">15%</p>
        </div>
      </div>

      <div class="inner-box">
        <div class="txt-group">
          <p>
            <span>매수가</span>
            <strong>{{ item.buyPrice }}</strong>
          </p>
          <p>
            <span>보유수량</span>
            <strong>{{ item.quantity }}</strong>
          </p>
          <p>
            <span>평가금액</span>
            <strong>{{ item.totalPrice }}</strong>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/my-portfolio/common.css'

interface PortfolioStockItem {
  name: string
  code: string
  date: string
  isNew?: boolean
  rate: number
  weight: number
  buyPrice: string
  quantity: string
  totalPrice: string
}

const returnList = ref<PortfolioStockItem[]>([
  {
    name: '삼성전자',
    code: '000660',
    date: '26.08.30',
    rate: 22.82,
    weight: 17.8,
    buyPrice: '123,400원',
    quantity: '156주',
    totalPrice: '123,456,100원'
  },
  {
    name: '삼성전자',
    code: '000660',
    date: '26.08.30',
    rate: 22.82,
    weight: 14.8,
    buyPrice: '123,400원',
    quantity: '156주',
    totalPrice: '123,456,100원'
  }
])

const getRateClass = (rate: number) => {
  if (rate > 0) return 'up'
  if (rate < 0) return 'down'
  return ''
}

const formatRateText = (rate: number) => {
  if (rate > 0) return `+${rate}%`
  if (rate === 0) return '0.0%'
  return `${rate}%`
}
</script>