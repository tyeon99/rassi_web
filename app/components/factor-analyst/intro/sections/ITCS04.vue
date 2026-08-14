<template>
  <div class="itemStyleSection">
    <div class="title">시장관심과 주주챙기기</div>

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

const tabs = ['수급', '주주환원']
const currentTab = ref(0)

const tabData = [
  // 수급 데이터
  [
    {
      title: '수급 강세',
      txt: '기관과 외국인의 매수세가 강하게 유입되는 종목'
    },
    {
      title: '거래는 활발',
      txt: '거래는 활발하지만 지속적인 매수세는 확인되지 않는 종목'
    },
    {
      title: '매물 부담',
      txt: '매도 물량 부담이 상대적으로 높은 종목'
    },
    {
      title: '수급 부재',
      txt: '기관과 외국인의 매수세가 거의 없는 종목'
    }
  ],
  // 주주환원 데이터
  [
    {
      title: '주주환원 우수',
      txt: '배당과 자사주 매입이 모두 활발한 종목'
    },
    {
      title: '배당 높음 자사주 매입 저조',
      txt: '배당 중심의 주주환원 정책을 가진 종목'
    },
    {
      title: '배당 낮음 자사주 매입 적극',
      txt: '자사주 매입 중심의 주주환원 정책을 가진 종목'
    }
  ]
]

const currentList = computed(() => tabData[currentTab.value])

</script>