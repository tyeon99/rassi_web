<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster moreOffcanvas"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" 
    @click="closePortfolioMoreOffcanvas"
  >
    <div
      class="offcanvas-content animate__animated animate__faster moreOffcanvas"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }" 
      @click.stop
    >
      <div class="offcanvas-close">
        <button @click="closePortfolioMoreOffcanvas">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L16.5 16.5M16.5 16.5L22 22M16.5 16.5L22 11M16.5 16.5L11 22" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="offcanvas-body">

        <div class="title">
          <strong>나만의 포트폴리오</strong>
        </div>

        <div class="portfolio-list">

          <div class="list-group">
            <button 
              v-for="(item, idx) in myPortfolioList" 
              :key="idx" 
              class="box"
              :class="{ active: item.isActive }"
            >
              <div class="left">
                <div class="top">
                  <strong>{{ item.title }}</strong>
                  <span v-if="item.isTodayRebalance">오늘 리밸런싱</span>
                </div>
                <p>{{ item.desc }}</p>
              </div>
              <div class="right" :class="item.statusClass">
                {{ item.returnText }}
              </div>
            </button>
          </div>

          <button class="more">
            <img width="24" src="~/assets/img/my-portfolio/offcanvas/more-icon.png" alt="+이미지">
            <p>포트폴리오 더 만들기</p>
          </button>

        </div>

        <div class="shortcut">

          <div class="sub-title">
            <strong>추천 모델 포트폴리오 바로가기</strong>
          </div>

          <div class="shortcut-list">
            <button v-for="(item, idx) in recommendedList" :key="idx">
              <div class="left">
                <img width="54" :src="item.icon" :alt="`${item.title} 아이콘`">
                <div class="txt">
                  <strong>{{ item.title }}</strong>
                  <span>{{ item.desc }}</span>
                </div>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#D3D3D3" />
              </svg>
            </button>
          </div>

        </div>

        <div class="banner">
          <button>
            <img src="~/assets/img/my-portfolio/offcanvas/more_offcanvas-banner.png" alt="배너">
          </button>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import icon01 from '~/assets/img/my-portfolio/main/strategy-icon01.png'
import icon02 from '~/assets/img/my-portfolio/main/strategy-icon02.png'

defineProps({
  isOffcanvasAni: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close-portfolioMoreOffcanvas'])

const closePortfolioMoreOffcanvas = () => {
  emit('close-portfolioMoreOffcanvas')
}

const myPortfolioList = ref([
  {
    title: '황금코어 포트폴리오',
    desc: '26.1.21 / 1억원 / 한달마다 리밸런싱',
    returnText: '+22.82',
    statusClass: 'up',
    isActive: true,
    isTodayRebalance: false
  },
  {
    title: '황금값어치 포트폴리오',
    desc: '26.1.21 / 1억원 / 한달마다 리밸런싱',
    returnText: '-22.82',
    statusClass: 'down',
    isActive: false,
    isTodayRebalance: true
  },
  {
    title: '황금값어치 포트폴리오',
    desc: '26.10.2 / 1억원 / 2주마다 리밸런싱',
    returnText: '대기중',
    statusClass: '',
    isActive: false,
    isTodayRebalance: false
  }
])

const recommendedList = ref([
  {
    title: '황금값어치 포트폴리오',
    desc: '백테스트 성과와 구성 종목 보기',
    icon: icon01
  },
  {
    title: '황금코어 포트폴리오',
    desc: '백테스트 성과와 구성 종목 보기',
    icon: icon02
  }
])
</script>