<template>
  <section class="mainSection">
    <div class="mainSection__title items-start">
      <h2>
        <span>6월 10일 (MON)</span>
        오늘의 추천 스타일⁺
      </h2>
      <button>
        <img width="24" src="~/assets/img/factor-analyst/main/detail-btn.png" alt="상세보기 버튼">
      </button>
    </div>
    <div class="mainSection__content">
      <div class="swiper recommendItemSwiper">
        <div class="swiper-wrapper">
          <div 
            v-for="(slide, sidx) in slides" 
            :key="sidx" 
            class="swiper-slide"
          >
            <button
              class="itemList box01"
              :class="{ masking: sidx === 1 }"
            >
              <div class="box-title">
                수급선행 스타일⁺ 추천종목 5
              </div>
              <div class="box-txt">
                강세와 트랜드를 분석하여 가장 많이 상승할 스타일⁺를 추천해 드려요.
              </div>
              
              <div class="listGroup">
                <div 
                  v-for="(item, iidx) in slide.items" 
                  :key="iidx" 
                  class="list"
                >
                
                <!-- 기본 리스트 -->
                  <template v-if="sidx === 0">
                    <div class="left">
                      <div class="circle">
                        <img width="30" src="~/assets/img/factor-analyst/main/item-circle.png" alt="종목로고">
                        <!-- 종목 로고 없을 때 대체 이미지 -->
                        <!-- <img width="30" src="~/assets/img/factor-analyst/main/item-circle_no.png" alt="종목로고 디폴트"> -->
                      </div>
                      <div class="name">
                        <p>{{ item.name }}</p>
                        <span>{{ item.code }}</span>
                      </div>
                    </div>
                  </template>

                  <!-- 마스킹 리스트 -->
                  <template v-else>
                    <div class="left">
                      <div class="circle" :class="`circle0${iidx + 1}`">
                        <span>872</span>
                      </div>
                      <div class="name">
                        <p>{{ item.name }}</p>
                        <span>{{ item.code }}</span>
                      </div>
                    </div>
                  </template>

                  <div class="right">
                    <span>스코어</span>
                    <p class="up">{{ item.score }}점</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const slides = [
  {
    items: [
      { name: '삼성전자삼성전자삼성전자삼성전자삼성전자', code: '055872', score: 95.3 },
      { name: 'SK하이닉스', code: '000660', score: 88.5 },
      { name: '현대차', code: '005380', score: 82.1 },
      { name: '네이버', code: '035420', score: 79.4 },
      { name: '카카오', code: '035720', score: 75.8 }
    ]
  },
  {
    items: [
      { name: 'LG에너지솔루션', code: '373220', score: 91.2 },
      { name: '삼성바이오로직스', code: '207940', score: 86.4 },
      { name: '셀트리온', code: '068270', score: 84.5 },
      { name: '기아', code: '000270', score: 80.1 },
      { name: '포스코홀딩스', code: '005490', score: 77.3 }
    ]
  }
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
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        })
        return 
      }
    }
    setTimeout(initSwiper, 50)
  }
  initSwiper()
})
</script>