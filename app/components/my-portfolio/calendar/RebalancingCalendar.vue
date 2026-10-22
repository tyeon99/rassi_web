<template>
  <div class="rebalancing-calendar">
    <div class="title">리밸런싱 캘린더</div>

    <div class="calendar-wrap">

      <div class="rebalancing-box">
        <div class="left">
          <img width="45" src="/rassi_web/_nuxt/assets/img/my-portfolio/main/calendar-icon02.png"
            alt="달력">
          <div class="txt">
            <span>다음 리밸런싱</span><strong>10월 23일 (화)</strong>
          </div>
        </div>
        <div class="d-day"> D-20</div>
      </div>

      <!-- 달력 -->
      <Calendar />

    </div>

    <div class="rebalancing-wrap">

      <div class="sub-title">
        <strong>예정된 리밸런싱을 확인하세요.</strong>
        <span>앞으로 예정된 리밸런싱 일정이에요.</span>
      </div>

      <div class="rebalancing-list">

        <div 
          v-for="(item, idx) in scheduleList" 
          :key="idx" 
          class="list"
        >
          <div class="left">
            <span>{{ item.month }}월</span>
            <strong>{{ item.day }}일</strong>
          </div>
          <div class="right">
            <div class="top">
              <p>
                <strong>{{ item.turn }}</strong>
                <span>{{ item.timeText }}</span>
              </p>
              <div class="d-day">D-{{ item.dDay }}</div>
            </div>
            <div v-if="item.guideText" class="guide">
              {{ item.guideText }}
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/my-portfolio/common.css'
import Calendar from '~/components/my-portfolio/calendar/Calendar.vue';

interface RebalanceScheduleItem {
  month: number
  day: number
  turn: string
  timeText: string
  dDay: number
  guideText?: string
}

const scheduleList = ref<RebalanceScheduleItem[]>([
  {
    month: 11,
    day: 3,
    turn: '4회차',
    timeText: '화요일 오후 3시',
    dDay: 20
  },
  {
    month: 12,
    day: 15,
    turn: '5회차',
    timeText: '화요일 오후 3시',
    dDay: 50
  },
  {
    month: 12,
    day: 30,
    turn: '6회차',
    timeText: '화요일 오후 3시',
    dDay: 70,
    guideText: '* 12.31~1.1일 휴장으로 직전 영업일에 진행해요.'
  },
  {
    month: 1,
    day: 15,
    turn: '7회차',
    timeText: '화요일 오후 3시',
    dDay: 90
  },
  {
    month: 1,
    day: 30,
    turn: '8회차',
    timeText: '화요일 오후 3시',
    dDay: 120
  }
])
</script>