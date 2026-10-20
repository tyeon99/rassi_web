<template>
  <div class="detailSection">
    <div class="detailSection__title">매도 히스토리 전체보기</div>
    <div class="detailSection__txt">리밸런싱일에 매도 신호가 난 종목은 모두 팔아요. 분할매수나 분할매도를 하지 않아요. 실현 수익률과 손익은 매도 세금 0.25%를 뺀 값이에요.</div>
    
    <div class="sellHistory">

      <div class="all">

        <div class="box">

          <div class="all-top">
            <span>총 실현 손익</span>
            <strong>+45,230,100원</strong>
            <p>
              매도 <em>120</em>건, 세금 <em>500만원 반영</em>
            </p>
          </div>

          <div class="graph">
            <div class="txt">
              <p>
                <span>수익 92건</span>
                <strong class="up">68.3%</strong>
              </p>
              <p>
                <span>손실 32건</span>
                <strong class="down">32.8%</strong>
              </p>
            </div>
            <div class="graph-bar">
              <div class="return" style="width: 68.3%;"></div>
            </div>
          </div>

          <div class="inner-box">

            <div class="txt">
              <p>수익 매도 평균</p>
              <strong class="up">19.5%</strong>
              <span>+6,522,302원</span>
            </div>
            <div class="txt">
              <p>손익 매도 평균</p>
              <strong class="down">-9.2%</strong>
              <span>-522,302원</span>
            </div>

          </div>

          <div class="all-bottom">
            <p>
              <span>손익비</span>
              <strong>1.22</strong>
            </p>
            <div class="line"></div>
            <p>
              <span>평균 실현 수익률</span>
              <strong>+5.2%</strong>
            </p>
            <div class="line"></div>
            <p>
              <span>평균보유기간</span>
              <strong>2개월 9일</strong>
            </p>
          </div>

        </div>

      </div>

      <div class="sort">

        <div ref="sortbyRef" class="sortby">
          <button class="sortby-btn" @click="toggleDropdown">
            <p>{{ selectedSort }}</p>
            <img 
              width="18" 
              src="~/assets/img/my-portfolio/detail/more-icon01.png" 
              alt="더 보기"
              :class="{ rotate: isDropdownOpen }"
            >
          </button>

          <div v-show="isDropdownOpen" class="sortby-dropdown">
            <button 
              v-for="(option, oidx) in sortOptions" 
              :key="oidx"
              :class="{ active: selectedSort === option }"
              @click="selectOption(option)"
            >
              {{ option }}
            </button>
          </div>
        </div>

        <div class="box-group">

          <div 
            v-for="(item, idx) in historyList" 
            :key="idx" 
            class="box"
          >

            <div class="top">

              <div class="left">
                <img width="30" src="~/assets/img/my-portfolio/common/item-img.png" alt="종목 이미지">
                <div class="name">
                  <strong>{{ item.name }}</strong>
                  <span>{{ item.code }}</span>
                </div>
              </div>

              <div class="right">
                <strong :class="item.rate >= 0 ? 'up' : 'down'">
                  {{ item.rate >= 0 ? `+${item.rate}%` : `${item.rate}%` }}
                </strong>
                <span>
                  {{ item.amount >= 0 ? `+${item.amount.toLocaleString()}` : item.amount.toLocaleString() }}
                </span>
              </div>

            </div>

            <div class="inner-box">
              <div class="p-group">
                <p>{{ item.rebalanceDate }} 리밸런싱</p>
                <p>{{ item.periodText }}</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import '~/assets/css/my-portfolio/common.css'

interface SellHistoryItem {
  name: string
  code: string
  rate: number
  amount: number
  rebalanceDate: string
  periodText: string
}

const isDropdownOpen = ref(false)
const selectedSort = ref('최근 매도순')
const sortbyRef = ref<HTMLDivElement | null>(null)

const sortOptions = [
  '최근 매도순',
  '수익금 높은순',
  '수익률 높은순',
  '보유일 긴 순'
]

const historyList = ref<SellHistoryItem[]>([
  {
    name: '삼성전자',
    code: '055872',
    rate: 19.51,
    amount: 6522302,
    rebalanceDate: '2026.09.01',
    periodText: '2026.02.01 → 2026.09.20 (5개월)'
  },
  {
    name: '삼성전자',
    code: '055872',
    rate: 19.51,
    amount: 6522302,
    rebalanceDate: '2026.09.01',
    periodText: '2026.02.01 → 2026.09.20 (5개월)'
  },
  {
    name: '삼성전자',
    code: '055872',
    rate: -2.56,
    amount: 6522302,
    rebalanceDate: '2026.09.01',
    periodText: '2026.02.01 → 2026.09.20 (5개월)'
  },
  {
    name: '삼성전자',
    code: '055872',
    rate: 19.51,
    amount: 6522302,
    rebalanceDate: '2026.09.01',
    periodText: '2026.02.01 → 2026.09.20 (5개월)'
  },
  {
    name: '삼성전자',
    code: '055872',
    rate: 19.51,
    amount: 6522302,
    rebalanceDate: '2026.09.01',
    periodText: '2026.02.01 → 2026.09.20 (5개월)'
  }
])

// 드롭다운
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectOption = (option: string) => {
  selectedSort.value = option
  isDropdownOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (sortbyRef.value && !sortbyRef.value.contains(event.target as Node)) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>