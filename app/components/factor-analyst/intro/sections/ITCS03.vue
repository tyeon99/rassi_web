<template>
  <div class="itemStyleSection">
    <div class="title">3. 기업가치와 평가</div>

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

const tabs = ['밸류에이션', '초저평가']
const currentTab = ref(0)

const tabData = [
  // 밸류에이션 데이터
  [
    {
      title: '저평가 매력',
      txt: '기업 가치 대비 현재 주가가 저평가된 종목'
    },
    {
      title: '고평가 구간',
      txt: '시장 기대가 크게 반영된 고평가 종목'
    }
  ],
  // 초저평가 데이터
  [
    {
      title: '청산가치 보다 낮음',
      txt: '청산가치 대비 크게 할인되어 거래되는 종목'
    }
  ]
]

const currentList = computed(() => tabData[currentTab.value])

</script>