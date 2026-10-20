<template>
  <div class="detailSection !px-0">
    <div class="detailSection__title !px-5">월별 수익률</div>
    <div class="detailSection__txt !px-5">연도를 선택하신 후 막대 그래프를 누르시면, 해당 월의 포트폴리오 구성을 보실 수 있어요.</div>

    <div class="rate-box">

      <div ref="boxGroupRef" class="box-group">
        <div 
          v-for="(item, idx) in yearData" 
          :key="item.year"
          :ref="(el) => setBoxRef(el, idx)"
          class="box"
          :class="{ active: selectedYear === item.year }"
          @click="selectYear(item.year, idx)"
        >
          <span>{{ item.year }}</span>
          <strong :class="item.rate >= 0 ? 'up' : 'down'">
            {{ item.rate >= 0 ? `+${item.rate}%` : `${item.rate}%` }}
          </strong>
        </div>
      </div>

      <div class="chart-group !px-5">
        <div class="chart-box" style="height: 135px; background: #F5F7F9;"> <!--스타일 지우고 사용해주세용-->
          차트 영역
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, type ComponentPublicInstance } from 'vue'
import '~/assets/css/my-portfolio/common.css'

interface YearRateItem {
  year: number
  rate: number
}

const yearData = ref<YearRateItem[]>([
  { year: 2023, rate: 26.8 },
  { year: 2024, rate: -12.6 },
  { year: 2025, rate: 17.9 },
  { year: 2026, rate: 57.9 }
])

const selectedYear = ref(2026)

const boxGroupRef = ref<HTMLDivElement | null>(null)
const boxRefs = ref<HTMLDivElement[]>([])

const setBoxRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el) {
    boxRefs.value[index] = el as HTMLDivElement
  }
}

const scrollToBox = (index: number, behavior: ScrollBehavior = 'smooth') => {
  const targetBox = boxRefs.value[index]
  const container = boxGroupRef.value

  if (targetBox && container) {
    const boxCenter = targetBox.offsetLeft + (targetBox.offsetWidth / 2)
    const containerHalfWidth = container.offsetWidth / 2
    const targetScrollLeft = boxCenter - containerHalfWidth

    container.scrollTo({
      left: targetScrollLeft,
      behavior
    })
  }
}

const selectYear = (year: number, index: number) => {
  selectedYear.value = year
  scrollToBox(index, 'smooth')
}

onMounted(async () => {
  await nextTick()
  const defaultIndex = yearData.value.findIndex(item => item.year === selectedYear.value)
  if (defaultIndex !== -1) {
    scrollToBox(defaultIndex, 'auto')
  }
})
</script>