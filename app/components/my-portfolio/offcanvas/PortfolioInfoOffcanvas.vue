<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster infoOffcanvas"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" 
    @click="closePortfolioInfoOffcanvas"
  >
    <div
      class="offcanvas-content animate__animated animate__faster infoOffcanvas"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }" 
      @click.stop
    >
      <div class="offcanvas-close">
        <button @click="closePortfolioInfoOffcanvas">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L16.5 16.5M16.5 16.5L22 22M16.5 16.5L22 11M16.5 16.5L11 22" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="offcanvas-body">

        <div class="title">
          <span>나만의 포트폴리오</span>
          <strong>황금코어 포트폴리오</strong>
          <p>나만의 포트폴리오에 대한 정보를 확인하고 관리하실 수 있어요.</p>
        </div>

        <div class="portfolio-info">

          <div v-for="(info, idx) in infoList" :key="idx" class="info-list">
            <div class="left">
              <img width="32" :src="info.icon" :alt="info.title">
              <strong>{{ info.title }}</strong>
            </div>
            <div class="right">
              <strong>{{ info.value }}</strong>
              <p v-html="info.desc"></p>
            </div>
          </div>

        </div>

        <div class="portfolio-delete">
          <div class="sub-title">
            <strong>포트폴리오 삭제</strong>
          </div>
          <div class="guide-box">
            <img width="16" src="~/assets/img/my-portfolio/offcanvas/warning.png" alt="경고">
            <p>
              <strong>확인하세요.</strong><br />
              포트폴리오를 삭제하면 보유 종목, 리밸런싱 기록, 매도 수익 내역이 모두 사라지고 다시 복원하기 어려워요. 신중하게 결정해 주세요.
            </p>
          </div>
        </div>

        <button class="delete" @click="openConfirmModal">
          포트폴리오 삭제하기
        </button>

      </div>

    </div>

    <!-- 포트폴리오 삭제 모달 -->
    <ConfirmModal
      v-if="isConfirmModalOpen"
      :isModalAni="isConfirmModalAni"
      :message="deleteConfirmMessage"
      confirmText="확인"
      cancelText="취소"
      @close-confirmModal="closeConfirmModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import ConfirmModal from '~/components/my-portfolio/modal/ConfirmModal.vue'

import icon01 from '~/assets/img/my-portfolio/offcanvas/list-icon01.png'
import icon02 from '~/assets/img/my-portfolio/offcanvas/list-icon02.png'
import icon03 from '~/assets/img/my-portfolio/offcanvas/list-icon03.png'
import icon04 from '~/assets/img/my-portfolio/offcanvas/list-icon04.png'
import icon05 from '~/assets/img/my-portfolio/offcanvas/list-icon05.png'

defineProps({
  isOffcanvasAni: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close-portfolioInfoOffcanvas'])

const closePortfolioInfoOffcanvas = () => {
  emit('close-portfolioInfoOffcanvas')
}

const isConfirmModalOpen = ref(false)
const isConfirmModalAni = ref(false)

const deleteConfirmMessage = ref('2026년 10월 2일 생성한 황금코어 포트폴리오를 삭제하시겠습니까? 확인을 누르시면 즉시 삭제되며, 복원이 불가능 합니다.')

// 모달 열기
const openConfirmModal = async () => {
  isConfirmModalOpen.value = true
  await nextTick()
  isConfirmModalAni.value = true
}

// 모달 닫기
const closeConfirmModal = () => {
  isConfirmModalAni.value = false
  setTimeout(() => {
    isConfirmModalOpen.value = false
  }, 300)
}

// 스크롤 락 처리
watch(isConfirmModalOpen, (isOpen) => {
  if (isOpen) {
    document.documentElement.classList.add('scroll-lock')
    document.body.classList.add('scroll-lock')
  } else {
    document.documentElement.classList.remove('scroll-lock')
    document.body.classList.remove('scroll-lock')
  }
})

const infoList = ref([
  {
    icon: icon01,
    title: '전략',
    value: '황금코어',
    desc: '시장 우량주 중심의 전략이에요.'
  },
  {
    icon: icon02,
    title: '투자금',
    value: '100,000,000원',
    desc: '1억원으로 시작했어요.'
  },
  {
    icon: icon03,
    title: '최대 보유 종목수',
    value: '10종목',
    desc: '종목당 최대 비중은 15%에요.'
  },
  {
    icon: icon04,
    title: '리밸런싱',
    value: '매월 10일, 1개월 마다',
    desc: '휴장일이면 직전 영업일에<br> 리밸런싱 해요.'
  },
  {
    icon: icon05,
    title: '운영기간',
    value: '2026년 10월 2일 부터',
    desc: '236일째 운영중이에요.'
  }
])
</script>