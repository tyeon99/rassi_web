<template>
  <div class="itemStyleSection">
    <div class="title">2. 상승세와 돈의 흐름</div>

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

const tabs = ['주가모멘텀', '실적모멘텀']
const currentTab = ref(0)

const tabData = [
  // 주가모멘텀 데이터
  [
    {
      title: '강한추세',
      txt: '장·중·단기 주가 흐름이 모두 강한 상승세를 보이는 종목'
    },
    {
      title: '단기조정',
      txt: '장기 상승 흐름은 유지되지만 최근 단기 조정이 나타난 종목'
    },
    {
      title: '반등초기',
      txt: '장기 하락 흐름 속에서 최근 반등이 나타난 종목'
    },
    {
      title: '추세부재',
      txt: '주가 상승 추세가 거의 나타나지 않는 종목'
    }
  ],
  // 실적모멘텀 데이터
  [
    {
      title: '강한 실적모멘텀',
      txt: '실적 개선과 성장 기대가 동시에 높은 종목'
    },
    {
      title: '성장 둔화',
      txt: '현재 실적은 좋지만 앞으로의 성장 기대는 낮아지는 종목'
    },
    {
      title: '실적 개선 기대',
      txt: '현재 실적은 약하지만 미래 실적 기대가 높아지는 종목'
    },
    {
      title: '컨센서스 부재',
      txt: '시장 전망 데이터가 부족해 실적 기대를 판단하기 어려운 종목'
    }
  ]
]

const currentList = computed(() => tabData[currentTab.value])

</script>