<template>
  <div class="itemStyleSection">
    <div class="title">1. 이 회사가 돈 버는 능력</div>

    <div class="itemStyleSection__tab">
      <button 
        v-for="(tab, idx) in tabs" 
        :key="idx"
        :class="{ active: currentTab === idx }"
        @click="currentTab = idx"
      >
        {{ tab }}
      </button>
    </div>

    <div class="itemStyleSection__tabContent">
      <div class="list-box">
        <button 
          v-for="(item, idx) in currentList" 
          :key="idx" 
          class="list"
        >
          <div class="left">
            <strong>{{ item.title }}</strong>
            <p>{{ item.txt }}</p>
          </div>
          <div class="right">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// style
import '~/assets/css/factor-analyst/common.css'

const tabs = ['퀄리티', '미래전망']
const currentTab = ref(0)

const tabData = [
  // 퀄리티 데이터
  [
    {
      title: '고퀄리티',
      txt: '재무제표상 수익성과 건전성이 모두 ‘최상위’인 종목'
    },
    {
      title: '튼튼하지만 수익 낮은 퀄리티',
      txt: '재무는 탄탄하지만 자산 효율성이 아쉬운 종목'
    },
    {
      title: '수익 대비 재무 질낮은 퀼리티',
      txt: '수익성은 좋아 보이지만, ‘재무의 질’이 약한 종목'
    },
    {
      title: '저퀄리티',
      txt: '재무제표상 수익성과 건전성이 모두 낮은 종목'
    }
  ],
  // 미래전망 데이터
  [
    {
      title: '전망 상향',
      txt: '시장 전망치가 꾸준히 상향되고 있는 종목'
    },
    {
      title: '급격한 상향',
      txt: '최근 시장 기대가 빠르게 개선되고 있는 종목'
    },
    {
      title: '전망 하향',
      txt: '시장 전망치가 빠르게 낮아지고 있는 종목'
    }
  ]
]

const currentList = computed(() => tabData[currentTab.value])

</script>