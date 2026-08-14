<template>
  <div class="itemStyleSection">
    <div class="title">안전성과 역발상</div>

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

const tabs = ['저변동성', '낙폭과대']
const currentTab = ref(0)

const tabData = [
  // 저변동성 데이터
  [
    {
      title: '안정적인 주가',
      txt: '변동성이 낮고 안정적인 주가 흐름을 보여온 종목'
    },
    {
      title: '변동성 전환',
      txt: '최근 주가 움직임의 성격이 크게 달라진 종목'
    },
    {
      title: '고변동성',
      txt: '주가 변동성이 매우 큰 고위험 종목'
    }
  ],
  // 낙폭과대 데이터
  [
    {
      title: '과매도 구간',
      txt: '최근 급락으로 과매도 구간에 진입한 종목'
    }
  ]
]

const currentList = computed(() => tabData[currentTab.value])

</script>