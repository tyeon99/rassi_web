<template>
  <div class="itemContent">

    <div 
      v-for="(dateGroup, didx) in itemListData" 
      :key="didx" 
      class="date-group"
    >
      <div class="date">{{ dateGroup.date }}</div>
      
      <div class="box-group">
        <div 
          v-for="(box, bidx) in dateGroup.boxes" 
          :key="bidx" 
          class="box"
        >
          <p>
            <span>trigger</span>
            <strong>{{ box.triggerType }}</strong>
          </p>

          <div class="item-group">
            <button 
              v-for="(item, iidx) in box.items" 
              :key="iidx"
              @click="openDetailModal(item)"
            >
              {{ item }}
            </button>
          </div>
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
import { ref, watch, nextTick } from 'vue'
import DetailModal from '~/components/trigger-view/main/DetailModal.vue'

const isDetailModalOpen = ref(false)
const isModalAni = ref(false)

const itemListData = [
  {
    date: '2026/06/10 WED',
    boxes: [
      {
        triggerType: '급상승',
        items: ['SK하이닉스', '키움증권', '삼성전자', '아모레퍼시픽', '현대차', 'SK하이닉스', '삼성전자', '키움증권']
      },
      {
        triggerType: '급상승',
        items: ['SK하이닉스', '키움증권', '삼성전자', '아모레퍼시픽', '현대차', 'SK하이닉스', '삼성전자', '키움증권']
      },
      {
        triggerType: '급상승',
        items: ['SK하이닉스', '키움증권', '삼성전자', '아모레퍼시픽', '현대차', 'SK하이닉스', '삼성전자', '키움증권']
      }
    ]
  },
  {
    date: '2026/06/10 WED',
    boxes: [
      {
        triggerType: '급상승',
        items: ['SK하이닉스', '키움증권', '삼성전자', '아모레퍼시픽', '현대차', 'SK하이닉스', '삼성전자', '키움증권']
      },
      {
        triggerType: '급상승',
        items: ['SK하이닉스', '키움증권', '삼성전자', '아모레퍼시픽', '현대차', 'SK하이닉스', '삼성전자', '키움증권']
      },
      {
        triggerType: '급상승',
        items: ['SK하이닉스', '키움증권', '삼성전자', '아모레퍼시픽', '현대차', 'SK하이닉스', '삼성전자', '키움증권']
      }
    ]
  }
]

// 트리거뷰 내용보기 열기
const openDetailModal = async (item?: string) => {
  isDetailModalOpen.value = true
  await nextTick() // DOM 생성 타이밍 보장
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
    document.documentElement.classList.add('scroll-lock')
    document.body.classList.add('scroll-lock')
  } else {
    document.documentElement.classList.remove('scroll-lock')
    document.body.classList.remove('scroll-lock')
  }
})
</script>
