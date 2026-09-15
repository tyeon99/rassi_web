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
              @click="openDetailOffcanvas(item)"
            >
              {{ item }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 내용보기 레이어 -->
    <DetailOffcanvas 
      v-if="isDetailOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-detailOffcanvas="closeDetailOffcanvas"
      @touchstart.stop
      @touchmove.stop
      @touchend.stop
    />

  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import DetailOffcanvas from '~/components/trigger-view/main/DetailOffcanvas.vue'

const isDetailOffcanvasOpen = ref(false)
const isOffcanvasAni = ref(false)

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
const openDetailOffcanvas = async (item?: string) => {
  isDetailOffcanvasOpen.value = true
  await nextTick() // DOM 생성 타이밍 보장
  isOffcanvasAni.value = true
}

// 트리거뷰 내용보기 닫기
const closeDetailOffcanvas = () => {
  isOffcanvasAni.value = false
  setTimeout(() => {
    isDetailOffcanvasOpen.value = false
  }, 300)
}

watch(isDetailOffcanvasOpen, (isOpen) => {
  if (isOpen) {
    document.documentElement.classList.add('scroll-lock')
    document.body.classList.add('scroll-lock')
  } else {
    document.documentElement.classList.remove('scroll-lock')
    document.body.classList.remove('scroll-lock')
  }
})
</script>

<style scoped>
  @import '~/assets/css/trigger-view/common.css';
</style>