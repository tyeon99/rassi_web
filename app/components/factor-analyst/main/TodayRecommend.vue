<template>
  <section class="mainSection !px-0">
    <div class="mainSection__title !mb-2 !px-5">
      <h2>오늘의 추천 스타일 Pick</h2>
      <span class="date">6월 10일 (MON)</span>
    </div>
    <div class="mainSection__txt">
      앞으로 한달 강세를 보일 것으로 추천된 <strong>{{ flatItems.length }}종목</strong>을 확인해 보세요. 
    </div>
    <div class="mainSection__content">
      <div ref="tabContainerRef" class="recommend-pagination01">
        <button
          v-for="(tab, tIdx) in computedTabs"
          :key="tIdx"
          :class="{ active: currentTabIdx === tIdx }"
          @click="goToTab(tIdx, tab.startIdx)"
        >
          <strong>{{ tab.name }}</strong>
          <span>{{ tab.count }}</span>
        </button>
      </div>

      <div class="swiper recommendItemSwiper">
        <div class="swiper-wrapper">
          <div 
            v-for="(item, idx) in flatItems" 
            :key="idx" 
            class="swiper-slide"
          >
            <div
              class="itemList !p-5 box01"
              :class="{ masking: idx == 1 }"
            >
              <div class="today-recommend">
                <div class="top">
                  <div class="pick">Pick {{ idx + 1 }}</div>
                  <span>{{ item.styleName }}</span>
                </div>

                <div class="item">
                  <div class="circle">  <!--마스킹 circle01 ~ circle05-->
                    <img width="30" src="~/assets/img/factor-analyst/main/item-circle.png" alt="종목 아이콘">
                    <!-- <span>782</span> --> <!--마스킹-->
                  </div>
                  <div class="name">
                    <strong>{{ item.name }}</strong>
                    <span>{{ item.code }}</span>
                  </div>
                </div>

                <div class="txt">
                  <strong>투자 포인트</strong>
                  <div class="span-group">
                    <span>높은 변동성</span>
                    <span>고위험 고수익</span>
                  </div>
                  <p>높은 변동성과 반등 가능성이 공존하는 고위험 고수익 스타일에 속하는 종목이에요.</p>
                </div>

                <button>
                  <p>오늘의 추천 스타일 Pick 종목 모두 보기</p>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pagination-group">
        <div class="recommend-pagination02">
          <div class="progress-bar"></div>
        </div>
        <div class="recommend-pagination03"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import '~/assets/css/factor-analyst/common.css'

interface Item {
  name: string
  code: string
  score: number
  styleName: string
}

interface StyleGroup {
  styleName: string
  items: Item[]
}

interface ComputedTab {
  name: string
  count: number
  startIdx: number
  endIdx: number
}

interface SwiperCore {
  realIndex: number
  slideTo: (index: number) => void
}

const rawStyleGroups = ref<StyleGroup[]>([
  {
    styleName: '황금값어치 스타일',
    items: [
      { name: '삼성전자', code: '005930', score: 95.3, styleName: '황금값어치 스타일' },
      { name: 'SK하이닉스', code: '000660', score: 92.1, styleName: '황금값어치 스타일' },
      { name: '현대차', code: '005380', score: 89.5, styleName: '황금값어치 스타일' } 
    ]
  },
  {
    styleName: '양날의 검 스타일',
    items: [
      { name: 'LG에너지솔루션', code: '373220', score: 85.1, styleName: '양날의 검 스타일' },
      { name: '삼성바이오로직스', code: '207940', score: 84.0, styleName: '양날의 검 스타일' }
    ]
  },
  {
    styleName: '황금코어 스타일',
    items: [
      { name: 'KB금융', code: '105560', score: 79.1, styleName: '황금코어 스타일' },
      { name: '신한지주', code: '055550', score: 78.4, styleName: '황금코어 스타일' },
      { name: '삼성물산', code: '028260', score: 77.0, styleName: '황금코어 스타일' },
      { name: '현대모비스', code: '012330', score: 75.8, styleName: '황금코어 스타일' },
      { name: '하나금융지주', code: '086790', score: 74.2, styleName: '황금코어 스타일' }
    ]
  }
])

const flatItems = computed(() => {
  return rawStyleGroups.value.flatMap(group => group.items)
})

const computedTabs = computed<ComputedTab[]>(() => {
  let accumulatedIndex = 0
  return rawStyleGroups.value.map(group => {
    const count = group.items.length
    const startIdx = accumulatedIndex
    const endIdx = accumulatedIndex + count - 1
    accumulatedIndex += count

    return {
      name: group.styleName,
      count,
      startIdx,
      endIdx
    }
  })
})

const currentTabIdx = ref(0)
const tabContainerRef = ref<HTMLElement | null>(null)
let swiperInstance: SwiperCore | null = null

const scrollToActiveTab = () => {
  nextTick(() => {
    if (!tabContainerRef.value) return
    const container = tabContainerRef.value
    const activeTab = container.children[currentTabIdx.value] as HTMLElement
    
    if (activeTab) {
      const containerWidth = container.clientWidth
      const tabOffsetLeft = activeTab.offsetLeft
      const tabWidth = activeTab.clientWidth

      const targetScrollLeft = tabOffsetLeft - containerWidth / 2 + tabWidth / 2

      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      })
    }
  })
}

watch(currentTabIdx, () => {
  scrollToActiveTab()
})

const goToTab = (tabIdx: number, startIdx: number) => {
  currentTabIdx.value = tabIdx
  if (swiperInstance) {
    swiperInstance.slideTo(startIdx)
  }
}

onMounted(() => {
  const initSwiper = () => {
    if (typeof window !== 'undefined') {
      interface CustomWindow extends Window {
        Swiper?: new (
          element: string | HTMLElement, 
          options?: Record<string, unknown>
        ) => SwiperCore
      }

      const globalWithSwiper = window as CustomWindow
      
      if (globalWithSwiper.Swiper) {
        swiperInstance = new globalWithSwiper.Swiper('.recommendItemSwiper', {
          loop: false,
          slidesPerView: 1.05,
          spaceBetween: 16,
          pagination: {
            el: '.recommend-pagination03',
            type: 'fraction'
          },
          on: {
            init(swiper: SwiperCore) {
              updateProgress(swiper.realIndex, flatItems.value.length)
            },
            slideChange(swiper: SwiperCore) {
              const activeIndex = swiper.realIndex
              
              const matchedTabIdx = computedTabs.value.findIndex(
                tab => activeIndex >= tab.startIdx && activeIndex <= tab.endIdx
              )
              if (matchedTabIdx !== -1) {
                currentTabIdx.value = matchedTabIdx
              }

              updateProgress(activeIndex, flatItems.value.length)
            }
          }
        })

        if (swiperInstance) {
          updateProgress(swiperInstance.realIndex, flatItems.value.length)
        }
        return 
      }
    }
    setTimeout(initSwiper, 50)
  }

  const updateProgress = (currentIndex: number, totalIndex: number) => {
    const progressBar = document.querySelector('.recommend-pagination02 .progress-bar') as HTMLElement | null
    if (progressBar && totalIndex > 0) {
      const progressPercent = ((currentIndex + 1) / totalIndex) * 100
      progressBar.style.width = `${progressPercent}%`
    }
  }

  initSwiper()
})
</script>