<template>
  <div class="revenue">

    <div class="gray-box">
      <div class="top">
        <div class="left">
          <span>매도 완료된 실현 수익</span>
          <strong>123,456,789</strong>
        </div>
        <div class="right">
          <strong class="up">+5.23%</strong>
          <span>(매수금액 123,123,000원 대비)</span>
        </div>
      </div>

      <div class="inner-box">
        <p>
          <span>총 매도 종목</span>
          <strong>8종목</strong>
        </p>
        <p>
          <span>수익 / 손실</span>
          <strong>7종목</strong>
        </p>
        <p>
          <span>평균 보유일</span>
          <strong>1종목</strong>
        </p>
      </div>
    </div>

    <div class="sort">

      <div ref="sortbyRef" class="sortby">
        <button class="sortby-btn" @click="toggleDropdown">
          <p>{{ selectedSort }}</p>
          <img width="18" src="~/assets/img/my-portfolio/detail/more-icon01.png" alt="더 보기"
            :class="{ rotate: isDropdownOpen }">
        </button>

        <div v-show="isDropdownOpen" class="sortby-dropdown">
          <button v-for="(option, oidx) in sortOptions" :key="oidx" :class="{ active: selectedSort === option }"
            @click="selectOption(option)">
            {{ option }}
          </button>
        </div>
      </div>

      <div class="box-group">

        <div v-for="(item, idx) in historyList" :key="idx" class="box !gap-2">

          <div class="span-top">
            <span>{{ item.roundText }}</span>
            <p>{{ item.quantity }}주</p>
          </div>

          <div class="top">

            <div class="left">
              <img width="30" src="~/assets/img/my-portfolio/common/item-img.png" alt="종목 이미지">
              <div class="name">
                <strong>{{ item.name }}</strong>
                <span>{{ item.code }}</span>
              </div>
            </div>

            <div class="right">
              <strong :class="item.profit >= 0 ? 'up' : 'down'">
                {{ item.profit >= 0 ? `+${item.profit.toLocaleString()}원` : `${item.profit.toLocaleString()}원` }}
              </strong>
              <span :class="item.rate >= 0 ? 'up' : 'down'">
                {{ item.rate >= 0 ? `+${item.rate}%` : `${item.rate}%` }}
              </span>
            </div>

          </div>

          <div class="inner-box">
            <div class="buy-sell">
              <div class="txt">
                <span class="up">매수</span>
                <p>{{ item.buyDate }}</p>
                <strong>{{ item.buyPrice.toLocaleString() }}원</strong>
              </div>
              <div class="date">{{ item.holdDays }}일보유</div>
              <div class="txt">
                <span class="down">매도</span>
                <p>{{ item.sellDate }}</p>
                <strong>{{ item.sellPrice.toLocaleString() }}원</strong>
              </div>
            </div>
          </div>

        </div>

        <div class="box no-sell">
          <strong>첫 리밸런싱 이후 수익 내역이 표시돼요.</strong>
          <p>리밸런싱으로 종목을 매도하면<br />실현된 수익이 표시됩니다.</p>
          <div class="inner-box">
            <p>
              운용 시작일 : 2026.06.20<br />
              리밸런싱 예정일 : 2026.07.20
            </p>
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
  roundText: string
  quantity: number
  name: string
  code: string
  profit: number
  rate: number
  buyDate: string
  buyPrice: number
  holdDays: number
  sellDate: string
  sellPrice: number
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

// 💡 디자인 시안 데이터와 정확하게 매칭시킨 배열
const historyList = ref<SellHistoryItem[]>([
  {
    roundText: '3회차 리밸런싱 매도',
    quantity: 25,
    name: '삼성전자',
    code: '055872',
    profit: 751000,
    rate: 5.23,
    buyDate: '26.08.03',
    buyPrice: 98000,
    holdDays: 42,
    sellDate: '26.10.03',
    sellPrice: 500000
  },
  {
    roundText: '3회차 리밸런싱 매도',
    quantity: 25,
    name: '삼성전자',
    code: '055872',
    profit: -751000,
    rate: -5.23,
    buyDate: '26.08.03',
    buyPrice: 98000,
    holdDays: 42,
    sellDate: '26.10.03',
    sellPrice: 500000
  },
  {
    roundText: '3회차 리밸런싱 매도',
    quantity: 25,
    name: '삼성전자',
    code: '055872',
    profit: 751000,
    rate: 5.23,
    buyDate: '26.08.03',
    buyPrice: 98000,
    holdDays: 42,
    sellDate: '26.10.03',
    sellPrice: 500000
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