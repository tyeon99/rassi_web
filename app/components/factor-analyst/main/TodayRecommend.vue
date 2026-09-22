<template>
  <section class="mainSection">
    <div class="mainSection__title !mb-2">
      <h2>
        오늘의 스타일 추천
      </h2>
      <span class="date">6월 10일 (MON)</span>
    </div>
    <div class="mainSection__txt">
      고민없이 Pick! 앞으로 한달 강세를 보일 종목을 추천해드려요.
    </div>
    <div class="mainSection__content">
      <div class="swiper recommendItemSwiper">
        <div class="swiper-wrapper">
          <div 
            v-for="(item, idx) in items" 
            :key="idx" 
            class="swiper-slide"
          >
            <button
              class="itemList box01"
              :class="{ masking: idx == 1 }"
            >
              <div class="recommend-item">
                <div class="circle">
                  <img 
                    width="30" 
                    src="~/assets/img/factor-analyst/main/item-circle.png" 
                    alt="종목로고"
                  >
                </div>
                <strong>{{ item.name }}</strong>
                <p>추천되었어요.</p>
              </div>
              <div class="recommend-style">
                {{ item.styleName }}
              </div>
              <div class="recommend-pagination">
                <strong>{{ idx + 1 }}</strong>/<span>{{ items.length }}</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div class="style-all">
        <button>오늘의 스타일 추천 모두 보기</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import '~/assets/css/factor-analyst/common.css'

// 15개 종목 데이터
const items = [
  { name: '삼성전자', code: '005930', score: 95.3, styleName: '황금코어 스타일' },
  { name: 'SK하이닉스', code: '000660', score: 92.1, styleName: '황금코어 스타일' },
  { name: '현대차현대차현대차현대차현대차', code: '005380', score: 89.5, styleName: '황금코어 스타일' },
  { name: '네이버', code: '035420', score: 88.0, styleName: '황금코어 스타일' },
  { name: '카카오', code: '035720', score: 86.4, styleName: '황금코어 스타일' },
  { name: 'LG에너지솔루션', code: '373220', score: 85.1, styleName: '황금코어 스타일' },
  { name: '삼성바이오로직스', code: '207940', score: 84.0, styleName: '황금코어 스타일' },
  { name: '셀트리온', code: '068270', score: 82.9, styleName: '황금코어 스타일' },
  { name: '기아', code: '000270', score: 81.5, styleName: '황금코어 스타일' },
  { name: '포스코홀딩스', code: '005490', score: 80.2, styleName: '황금코어 스타일' },
  { name: 'KB금융', code: '105560', score: 79.1, styleName: '황금코어 스타일' },
  { name: '신한지주', code: '055550', score: 78.4, styleName: '황금코어 스타일' },
  { name: '삼성물산', code: '028260', score: 77.0, styleName: '황금코어 스타일' },
  { name: '현대모비스', code: '012330', score: 75.8, styleName: '황금코어 스타일' },
  { name: '하나금융지주', code: '086790', score: 74.2, styleName: '황금코어 스타일' }
]

// Swiper 인스턴스 초기화
onMounted(() => {
  const initSwiper = () => {
    if (typeof window !== 'undefined') {
      interface CustomWindow extends Window {
        Swiper?: {
          new (
            element: string | HTMLElement, 
            options?: Record<string, unknown>
          ): unknown
        }
      }

      const globalWithSwiper = window as CustomWindow
      
      if (globalWithSwiper.Swiper) {
        new globalWithSwiper.Swiper('.recommendItemSwiper', {
          loop: false,
          slidesPerView: 1,
          spaceBetween: 16
        })
        return 
      }
    }
    setTimeout(initSwiper, 50)
  }
  initSwiper()
})
</script>