<template>
  <div class="mainTabContent">
    <div class="tab-title">증권사들의 관심이 집중되고 있어요. 어떤 전망이 나오고 있는지 AI 분석을 확인해 보세요.</div>

    <div class="dateList">
      <div 
        v-for="(dateItem, didx) in dateListData" 
        :key="didx" 
        class="list"
      >
        <span class="date">{{ dateItem.date }}</span>

        <div class="item-group">

          <!-- 종목 카드 -->
          <div class="item">
            <div class="title">
              <div class="left">
                <img width="24" src="~/assets/img/trigger-view/main/item-img.png" alt="종목 이미지">
                <div class="name">{{ dateItem.item.name }}</div>
              </div>
              <div class="right">
                trigger <span>급상승</span>
              </div>
            </div>
            <div class="txt">
              {{ dateItem.item.description }}
            </div>
          </div>

          <!-- 디테일 박스 리스트 -->
          <button 
            v-for="(detail, iidx) in dateItem.details" 
            :key="iidx"
            class="detail-box"
            :class="{ bg: detail.isBg }"
            @click="openDetailModal"
          >
            <div class="title">
              <strong>
                {{ detail.title }}
                <img 
                  v-if="detail.isLocked" 
                  width="20" 
                  src="~/assets/img/trigger-view/main/lock.png" 
                  alt="잠금 아이콘"
                >
              </strong>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div 
              v-if="detail.txt" 
              class="txt" 
              :class="{ lock: detail.isLocked }"
            >
              {{ detail.txt }}
            </div>
          </button>

        </div>

      </div>
    </div>

    <!-- 내용보기 레이어 -->
    <DetailModal 
      v-if="isDetailModalOpen"
      :isModalAni="isModalAni"
      @close-detailModal="closeDetailModal"
      @touchstart.stop
      @touchmove.stop
      @touchend.stop
    />

  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import DetailModal from '~/components/trigger-view/main/DetailModal.vue'

const isDetailModalOpen = ref(false)
const isModalAni = ref(false)

const dateListData = [
  { 
    date: '2026.09.07 MON',
    item: {
      name: 'SK하이닉스',
      description: '원전 이슈는 +2.52% 상승 했으며, 그 중에서도 해당 종목은 +15.23% 상승하며, 특히 강세를 보였어요. AI의 분석과 투자의견를 확인해 보세요.'
    },
    details: [
      {
        title: '투자의견 요약',
        txt: '투자의견: 매수(비중확대). SK하이닉스는 HBM 중심의 구조적 이익 레벨 업, 2026~2027년 대규모...',
        isLocked: false,
        isBg: false
      },
      {
        title: '투자 전략',
        txt: '투자의견: 매수(비중확대). SK하이닉스는 HBM 중심의 구조적 이익 레벨 업, 2026~2027년 대규모...',
        isLocked: true,
        isBg: false
      },
      {
        title: '핵심근거',
        txt: '',
        isLocked: false,
        isBg: true
      }
    ]
  },
  { 
    date: '2026.09.07 MON',
    item: {
      name: 'SK하이닉스',
      description: '원전 이슈는 +2.52% 상승 했으며, 그 중에서도 해당 종목은 +15.23% 상승하며, 특히 강세를 보였어요. AI의 분석과 투자의견를 확인해 보세요.'
    },
    details: [
      {
        title: '투자의견 요약',
        txt: '투자의견: 매수(비중확대). SK하이닉스는 HBM 중심의 구조적 이익 레벨 업, 2026~2027년 대규모...',
        isLocked: false,
        isBg: false
      },
      {
        title: '투자 전략',
        txt: '투자의견: 매수(비중확대). SK하이닉스는 HBM 중심의 구조적 이익 레벨 업, 2026~2027년 대규모...',
        isLocked: true,
        isBg: false
      },
      {
        title: '핵심근거',
        txt: '',
        isLocked: false,
        isBg: true
      }
    ]
  }
]

// 트리거뷰 내용보기 열기
const openDetailModal = () => {
  isDetailModalOpen.value = true
  isModalAni.value = true
}

// 트리거뷰 내용보기 닫기
const closeDetailModal = () => {
  isModalAni.value = false
  setTimeout(() => {
    isDetailModalOpen.value = false
  }, 300)
}

watch(isDetailModalOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('scroll-lock')
  } else {
    document.body.classList.remove('scroll-lock')
  }
})
</script>
