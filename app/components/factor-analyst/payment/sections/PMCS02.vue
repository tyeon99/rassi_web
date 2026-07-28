<template>
  <div class="paymentSection">
    <div class="title">이런 기능을 이용할 수 있어요.</div>
    
    <div class="select-box">
      <button 
        v-for="(item, idx) in paymentOptions" 
        :key="idx" 
        class="box"
        :class="{ selected: selectedIndex === idx }"
        @click="selectedIndex = idx"
      >
        <div class="left">
          <div class="txt">
            <p>{{ item.title }}</p>
            <p>
              <span v-if="item.originalPrice">
                ￦{{ item.originalPrice.toLocaleString() }}
              </span>
              <strong>￦{{ item.price.toLocaleString() }}</strong>
            </p>
          </div>
          <div v-if="item.discount" class="sale">
            {{ item.discount }}%할인
          </div>
        </div>
        <div class="right">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.19141 7.36471L2.60541 5.94971L6.48041 9.82371L12.9404 3.36621L14.3554 4.78021L6.48041 12.6542L1.19141 7.36471Z" fill="#A1ABB5"/>
          </svg>
        </div>
      </button>
    </div>

    <div class="guide">
      ※ 정기결제는 언제든 구독을 취소할 수 있어요.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// style
import '~/assets/css/factor-analyst/common.css'

const selectedIndex = ref(0)

const paymentOptions = [
  {
    title: '1개월 단건결제',
    price: 77000
  },
  {
    title: '1개월 정기결제',
    originalPrice: 77000,
    price: 59400,
    discount: 22
  },
  {
    title: '6개월 정기결제',
    originalPrice: 462000,
    price: 330400,
    discount: 28
  }
]
</script>