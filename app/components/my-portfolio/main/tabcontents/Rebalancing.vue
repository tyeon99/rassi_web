<template>
  <div class="rebalancing">    

    <div 
      v-for="(history, hIdx) in historyList" 
      :key="hIdx" 
      class="history"
    >
      <div class="box">

        <div class="box-top">
          <div class="date">
            <span>{{ history.roundText }}</span>
            <strong>{{ history.date }}</strong>
          </div>
          <div class="span-group">
            <span v-if="history.summary.buy !== undefined">
              편입 <strong class="up">{{ history.summary.buy }}</strong>
            </span>
            <span v-if="history.summary.sell !== undefined">
              제외 <strong class="down">{{ history.summary.sell }}</strong>
            </span>
            <span v-if="history.summary.hold !== undefined">
              유지 <strong>{{ history.summary.hold }}</strong>
            </span>
          </div>
        </div>

        <div class="box-bottom">

          <div v-if="history.buyList && history.buyList.length" class="bottom-list">
            <div class="list-title">
              <p>신규편입 (매수)</p>
              <span><strong>{{ history.buyList.length }}</strong>종목</span>
            </div>
            <div class="item-group">
              <div 
                v-for="(item, idx) in history.buyList" 
                :key="idx" 
                class="item"
              >
                <div class="left">
                  <img width="30" src="~/assets/img/my-portfolio/common/item-img.png" alt="종목 이미지">
                  <div class="name">
                    <strong>{{ item.name }}</strong>
                    <span>{{ item.code }}</span>
                  </div>
                </div>
                <div class="right">
                  <strong>{{ item.price }}</strong>
                  <span>{{ item.quantity }}</span>
                </div>
              </div>
            </div>
          </div>

          <div v-if="history.sellList && history.sellList.length" class="bottom-list">
            <div class="list-title">
              <p>포트 제외 (매도)</p>
              <span><strong>{{ history.sellList.length }}</strong>종목</span>
            </div>
            <div class="item-group">
              <div 
                v-for="(item, idx) in history.sellList" 
                :key="idx" 
                class="item"
              >
                <div class="left">
                  <img width="30" src="~/assets/img/my-portfolio/common/item-img.png" alt="종목 이미지">
                  <div class="name">
                    <strong>{{ item.name }}</strong>
                    <span>{{ item.code }}</span>
                  </div>
                </div>
                <div class="right">
                  <strong>{{ item.price }}</strong>
                  <span>{{ item.quantity }}</span>
                </div>
              </div>
            </div>
          </div>

          <div v-if="history.holdList && history.holdList.length" class="bottom-list">
            <div class="list-title">
              <p>유지 {{ history.holdList.length }}종목</p>
              <em>보유수량은 그대로 유지됩니다.</em>
            </div>
            <div class="itembox-group">
              <div 
                v-for="(item, idx) in history.holdList" 
                :key="idx" 
                class="itembox"
              >
                <img width="20" src="~/assets/img/my-portfolio/common/item-img.png" alt="종목 이미지">
                <strong>{{ item.name }}</strong>
                <span>{{ item.quantity }}</span>
              </div>
            </div>
          </div>

          <div v-if="history.cashInfo" class="bottom-list">
            <div class="inner-box">
              <div class="inner-top">
                <p>남은 현금</p>
                <strong>{{ history.cashInfo.remaining }}</strong>
              </div>
              <div v-if="history.isInitial" class="inner-bottom">
                <p>
                  <span>투자원금</span>
                  <strong>{{ history.cashInfo.investment }}</strong>
                </p>
                <p>
                  <span>매수금액</span>
                  <strong class="down">{{ history.cashInfo.buyTotal }}</strong>
                </p>
              </div>

              <div v-else class="inner-bottom">
                <p>
                  <span>시작 현금</span>
                  <strong>{{ history.cashInfo.start }}</strong>
                </p>
                <p>
                  <span>매도금액</span>
                  <strong class="up">{{ history.cashInfo.sellTotal }}</strong>
                </p>
                <p>
                  <span>매수금액</span>
                  <strong class="down">{{ history.cashInfo.buyTotal }}</strong>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/my-portfolio/common.css'

const sampleItem = { name: '삼성전자', code: '055872', price: '123,456,789원', quantity: '52주' }
const sampleBoxItem = { name: '삼성전자', quantity: '52주' }

const historyList = ref([
  {
    roundText: '2회차',
    date: '2026년 9월 23일 (목)',
    summary: { buy: 2, sell: 3, hold: 5 },
    buyList: [sampleItem, sampleItem],
    sellList: [sampleItem, sampleItem],
    holdList: [sampleBoxItem, sampleBoxItem, sampleBoxItem, sampleBoxItem, sampleBoxItem],
    cashInfo: {
      remaining: '123,123,000원',
      start: '123,123,000원',
      sellTotal: '+123,123,000원',
      buyTotal: '-123,123,000원'
    }
  },
  {
    roundText: '1회차',
    date: '2026년 9월 23일 (목)',
    summary: { buy: 2, sell: 3, hold: 5 },
    buyList: [sampleItem, sampleItem],
    sellList: [sampleItem, sampleItem],
    holdList: [sampleBoxItem, sampleBoxItem, sampleBoxItem, sampleBoxItem, sampleBoxItem],
    cashInfo: {
      remaining: '123,123,000원',
      start: '123,123,000원',
      sellTotal: '+123,123,000원',
      buyTotal: '-123,123,000원'
    }
  },
  {
    roundText: '운용시작',
    date: '2026년 9월 23일 (목)',
    isInitial: true, 
    summary: { buy: 10 },
    buyList: [sampleItem, sampleItem],
    sellList: [],
    holdList: [],
    cashInfo: {
      remaining: '123,123,000원',
      investment: '100,000,000원', 
      buyTotal: '-123,123,000원'
    }
  }
])
</script>