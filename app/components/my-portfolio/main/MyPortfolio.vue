<template>
  <div class="mainSection !px-0">

    <div class="portfolio-top">
      <button @click="openPortfolioMoreOffcanvas">
        <p>황금코어 포트폴리오</p>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.75 2.5C8.75 2.91421 8.41421 3.25 8 3.25C7.58579 3.25 7.25 2.91421 7.25 2.5C7.25 2.08579 7.58579 1.75 8 1.75C8.41421 1.75 8.75 2.08579 8.75 2.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
          <path d="M8.75 8C8.75 8.41421 8.41421 8.75 8 8.75C7.58579 8.75 7.25 8.41421 7.25 8C7.25 7.58579 7.58579 7.25 8 7.25C8.41421 7.25 8.75 7.58579 8.75 8Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="black"/>
          <path d="M8.75 13.5C8.75 13.9142 8.41421 14.25 8 14.25C7.58579 14.25 7.25 13.9142 7.25 13.5C7.25 13.0858 7.58579 12.75 8 12.75C8.41421 12.75 8.75 13.0858 8.75 13.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="black" />
        </svg>
      </button>
    </div>

    <div class="pending mb-6"> <!--구분 여백입니다 'mb-6' 클래스 빼고 써주세용-->
      <div class="timer-box">
        <div class="top">
          <strong>종목, 수량 확정까지</strong>
          <p>
            <img width="18" src="~/assets/img/my-portfolio/main/calendar-icon.png" alt="달력 아이콘">
            <span>{{ targetDateText }}</span>
          </p>
        </div>
        <div class="timer">
          <p>
            <strong>{{ remainingTime.hours }}</strong>
            <span>시간</span>
          </p>
          <div class="colon">
            <img width="15" src="~/assets/img/my-portfolio/main/colon-icon.png" alt=":">
          </div>
          <p>
            <strong>{{ remainingTime.minutes }}</strong>
            <span>분</span>
          </p>
          <div class="colon">
            <img width="15" src="~/assets/img/my-portfolio/main/colon-icon.png" alt=":">
          </div>
          <p>
            <strong>{{ remainingTime.seconds }}</strong>
            <span>초</span>
          </p>
        </div>
        <div class="bottom">
          <div class="bar"></div>
          <div class="gauge" :style="{ width: `${progressPercentage}%` }"></div>
        </div>
      </div>

      <div class="progress">
        <div class="mainSection__title">진행 단계</div>
        <div class="progress-list">
          <div class="list">
            <img width="16" src="~/assets/img/my-portfolio/main/num-icon01.png" alt="1">
            <p>
              <strong>포트폴리오 만들기 등록</strong>
              <span>황금값어치 / 100,000,000원 포트폴리오 만들기가 등록되었어요.</span>
            </p>
          </div>
          <div class="list">
            <img width="16" src="~/assets/img/my-portfolio/main/num-icon02.png" alt="2">
            <p>
              <strong>오후 3시 종목 확정</strong>
              <span>내일 15:00 전략에 맞는 종목과 수량을 확정돼요</span>
            </p>
          </div>
          <div class="list">
            <img width="16" src="~/assets/img/my-portfolio/main/num-icon03.png" alt="3">
            <p>
              <strong>포트폴리오 생성 알림</strong>
              <span>확정된 종목과 수량을 알림으로 보내드려요</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-summary">
      <div class="top">
        <div class="left">
          <span>포트폴리오 자산</span>
          <strong>123,456,789</strong>
        </div>
        <button class="right" @click="openPortfolioInfoOffcanvas">
          <p>포트폴리오 정보</p>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <use xlink:href="#stroke0_745_6579" stroke="#788591"/>
            <use xlink:href="#stroke0_745_6579" stroke="black" stroke-opacity="0.2"/>
            <use xlink:href="#stroke0_745_6579" stroke="black" stroke-opacity="0.2"/>
            <use xlink:href="#stroke0_745_6579" stroke="black" stroke-opacity="0.2"/>
            <use xlink:href="#stroke0_745_6579" stroke="black" stroke-opacity="0.2"/>
            <use xlink:href="#stroke0_745_6579" stroke="black" stroke-opacity="0.2"/>
            <defs>
            <path id="stroke0_745_6579" d="M7.5 12.75L11.25 9L7.5 5.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </defs>
          </svg>
        </button>
      </div>
      <div class="bottom">
        <p>
          <span>투자원금</span>
          <strong>100,000,000원</strong>
        </p>
        <div class="line"></div>
        <p>
          <span>평가손익</span>
          <strong class="up">+23,456,789원</strong>
        </p>
        <div class="line"></div>
        <p>
          <span>수익률</span>
          <strong>123.64%</strong>
        </p>
      </div>
    </div>

    <!-- 포트폴리오 현황 / 히스토리 -->
    <PortfolioPerformance />


    <!-- 나만의 포트폴리오 더보기 레이어 -->
    <PortfolioMoreOffcanvas 
      v-if="isPortfolioMoreOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-portfolioMoreOffcanvas="closePortfolioMoreOffcanvas"
    />

    <!-- 나만의 포트폴리오 정보 레이어 -->
    <PortfolioInfoOffcanvas 
      v-if="isPortfolioInfoOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-portfolioInfoOffcanvas="closePortfolioInfoOffcanvas"
    />

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import '~/assets/css/my-portfolio/common.css'
import PortfolioPerformance from '~/components/my-portfolio/main/PortfolioPerformance.vue';
import PortfolioMoreOffcanvas from '~/components/my-portfolio/offcanvas/PortfolioMoreOffcanvas.vue'
import PortfolioInfoOffcanvas from '~/components/my-portfolio/offcanvas/PortfolioInfoOffcanvas.vue'

const isPortfolioMoreOffcanvasOpen = ref(false)
const isPortfolioInfoOffcanvasOpen = ref(false)
const isOffcanvasAni = ref(false)

// 더보기_레이어 열기
const openPortfolioMoreOffcanvas = () => {
  isOffcanvasAni.value = true
  isPortfolioMoreOffcanvasOpen.value = true
}

// 더보기_레이어 닫기
const closePortfolioMoreOffcanvas = () => {
  isOffcanvasAni.value = false
  setTimeout(() => {
    isPortfolioMoreOffcanvasOpen.value = false
  }, 300)
}

watch(isPortfolioMoreOffcanvasOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('scroll-lock')
  } else {
    document.body.classList.remove('scroll-lock')
  }
})

// 정보_레이어 열기
const openPortfolioInfoOffcanvas = () => {
  isOffcanvasAni.value = true
  isPortfolioInfoOffcanvasOpen.value = true
}

// 정보_레이어 닫기
const closePortfolioInfoOffcanvas = () => {
  isOffcanvasAni.value = false
  setTimeout(() => {
    isPortfolioInfoOffcanvasOpen.value = false
  }, 300)
}

watch(isPortfolioInfoOffcanvasOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('scroll-lock')
  } else {
    document.body.classList.remove('scroll-lock')
  }
})

const targetDateText = ref('내일 15:00') // 상단 우측 표기 문구

// 예시: 등록 시점(시작 시간) 및 확정 목표 시간 (24시간 카운트다운 기준)
const now = new Date()
const startDate = ref<Date>(new Date(now.getTime() - (3 * 60 * 60 * 1000))) // 예: 3시간 전 등록
const targetDate = ref<Date>(new Date(now.getTime() + (21 * 60 * 60 * 1000) + (41 * 60 * 1000) + (20 * 1000)))

const remainingTime = ref({
  hours: '00',
  minutes: '00',
  seconds: '00'
})

const progressPercentage = ref(0)
let timerId: ReturnType<typeof setInterval> | null = null

// 카운트다운 및 게이지 계산 함수
const updateTimer = () => {
  const current = new Date().getTime()
  const start = startDate.value.getTime()
  const target = targetDate.value.getTime()

  const diff = target - current

  // 시간 만료 처리
  if (diff <= 0) {
    remainingTime.value = { hours: '00', minutes: '00', seconds: '00' }
    progressPercentage.value = 100
    if (timerId) clearInterval(timerId)
    return
  }

  // 1. 남은 시간 계산 (두 자리 포맷팅)
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  remainingTime.value = {
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0')
  }

  // 2. 실시간 게이지 비율 계산 (%)
  const totalDuration = target - start
  const elapsedTime = current - start
  
  // 0% ~ 100% 범위 제한
  const progress = Math.min(Math.max((elapsedTime / totalDuration) * 100, 0), 100)
  
  // 반응형 변수에 채워넣기
  progressPercentage.value = Number(progress.toFixed(2))
}

onMounted(() => {
  updateTimer()
  timerId = setInterval(updateTimer, 1000)
})

onUnmounted(() => {
  if (timerId) clearInterval(timerId)
})
</script>