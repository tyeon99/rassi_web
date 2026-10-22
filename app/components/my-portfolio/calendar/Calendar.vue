<template>
  <div class="calendar">

    <!-- 1. 년/월 헤더 -->
    <div class="calendar-header">
      <button type="button" @click="changeMonth(-1)">
        <img width="28" src="~/assets/img/my-portfolio/calendar/prev-btn.png" alt="이전버튼">
      </button>
      <strong>{{ currentYear }}년 {{ currentMonth + 1 }}월</strong>
      <button type="button" @click="changeMonth(1)">
        <img width="28" src="~/assets/img/my-portfolio/calendar/next-btn.png" alt="다음버튼">
      </button>
    </div>

    <!-- 2. 요일 헤더 -->
    <div class="week-days">
      <span class="red">일</span>
      <span>월</span>
      <span>화</span>
      <span>수</span>
      <span>목</span>
      <span>금</span>
      <span class="blue">토</span>
    </div>

    <!-- 3. 날짜 그리드 -->
    <div class="days-grid">
      <div 
        v-for="(day, idx) in calendarDays" 
        :key="`${day.dateStr}-${idx}`" 
        class="day-cell"
        :class="{
          'sun': day.dayOfWeek === 0,
          'sat': day.dayOfWeek === 6
        }"
      >
        <div v-if="day.isCurrentMonth" class="day">
          <span class="day-num" :class="[getDayBadgeClass(day.dateStr), getDayNumClass(day.dateStr)]">
            {{ day.dayNum }}
          </span>
          <!-- 날짜 하단 서브 텍스트 -->
          <span class="sub-txt" :class="getDayTextClass(day.dateStr)">
            {{ getDayText(day.dateStr) }}
          </span>
        </div>
      </div>
    </div>

    <!-- 4. 하단 범례 안내 바 -->
    <div class="legend-bar">
      <span><i class="dot scheduled"></i>예정</span>
      <span><i class="dot completed"></i>완료</span>
      <span><i class="dot reference"></i>기념일(휴장)</span>
      <span><i class="dot today"></i>오늘</span>
      <span class="holiday-info"><strong class="red">12</strong> 휴장일</span>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import '~/assets/css/my-portfolio/common.css'

const eventMap = ref<Record<string, { type: string; text?: string }>>({
  '2026-10-02': { type: '완료', text: '3회차' },
  '2026-10-03': { type: '기준일', text: '기준일' },
  '2026-10-09': { type: '휴장일', text: '한글날' },
  '2026-10-13': { type: '오늘', text: '오늘' },
  '2026-10-16': { type: '예정', text: '4회차' }
})

// 현재 조회 년/월
const currentYear = ref(2026)
const currentMonth = ref(9) // 0~11 (9 = 10월)

const calendarDays = computed(() => {
  const year = currentYear.value
  const month = currentMonth.value

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  
  const startDayOfWeek = firstDay.getDay()
  const days = []

  // 1. 이전 달 빈칸
  const prevMonthLastDay = new Date(year, month, 0).getDate()
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    days.push({
      dayNum: prevMonthLastDay - i,
      isCurrentMonth: false,
      dateStr: '',
      dayOfWeek: 0
    })
  }

  // 2. 이번 달 날짜
  for (let d = 1; d <= lastDay.getDate(); d++) {
    const dateObj = new Date(year, month, d)
    const monthStr = String(month + 1).padStart(2, '0')
    const dayStr = String(d).padStart(2, '0')
    const fullDateStr = `${year}-${monthStr}-${dayStr}`

    days.push({
      dayNum: d,
      isCurrentMonth: true,
      dateStr: fullDateStr,
      dayOfWeek: dateObj.getDay()
    })
  }

  // 3. 다음 달 빈칸
  const totalCellsNeeded = Math.ceil(days.length / 7) * 7
  const remainingCells = totalCellsNeeded - days.length
  for (let i = 1; i <= remainingCells; i++) {
    days.push({
      dayNum: i,
      isCurrentMonth: false,
      dateStr: '',
      dayOfWeek: 0
    })
  }

  return days
})

// 이전/다음 달 이동
const changeMonth = (delta: number) => {
  let newMonth = currentMonth.value + delta

  if (newMonth < 0) {
    currentYear.value -= 1
    currentMonth.value = 11
  } else if (newMonth > 11) {
    currentYear.value += 1
    currentMonth.value = 0
  } else {
    currentMonth.value = newMonth
  }
}

// 상태별 배지 클래스 매핑
const getDayBadgeClass = (dateStr: string) => {
  const event = eventMap.value[dateStr]
  if (!event) return ''
  switch (event.type) {
    case '완료': return 'badge-completed'
    case '기준일': return 'badge-reference'
    case '오늘': return 'badge-today'
    case '예정': return 'badge-scheduled'
    default: return ''
  }
}

const getDayNumClass = (dateStr: string) => {
  const event = eventMap.value[dateStr]
  if (event && event.type === '휴장일') return 'red'
  return ''
}

const getDayTextClass = (dateStr: string) => {
  const event = eventMap.value[dateStr]
  if (!event) return ''
  if (event.type === '휴장일') return 'red'
  return ''
}

const getDayText = (dateStr: string) => {
  return eventMap.value[dateStr]?.text || ''
}
</script>