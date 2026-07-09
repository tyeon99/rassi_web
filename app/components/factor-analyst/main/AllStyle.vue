<template>
  <section class="mainSection px-0">
    <div class="mainSection__title px-5">
      <h2>모든 스타일 보기</h2>
    </div>
    
    <div ref="tabContainer" class="mainSection__tab">
      <div 
        class="tab-indicator"
        :style="{
          width: `${indicatorStyle.width}px`,
          transform: `translateX(${indicatorStyle.left}px)`
        }"
      ></div>

      <button 
        v-for="(tab, tidx) in styleTabs" 
        :key="tidx"
        :ref="(el) => setTabRef(el, tidx)"
        :class="{ active: currentTabIdx === tidx }"
        @click="updateIndicator(tidx)"
      >
        {{ tab.name }}
      </button>
    </div>
    
    <div class="mainSection__content px-5">
      <div 
        v-for="(tab, cidx) in styleTabs" 
        :key="cidx"
      >
        <div v-if="currentTabIdx === cidx" class="tab-content">
          <div class="style-box">
            
            <button 
              v-for="(card, bidx) in tab.cards" 
              :key="bidx"
            >
              <div class="top">
                <div class="title">
                  <p>{{ card.title }}</p>
                  <span>구성 팩터 3개</span>
                </div>
                <div class="txt">
                  {{ card.description }}
                </div>
              </div>
              
              <div class="bottom">
                <div class="word">
                  <strong>{{ card.strongText }}</strong>
                  
                  <p 
                    v-for="(word, widx) in card.words" 
                    :key="widx"
                  >
                    <span>{{ word }}</span>

                    <img 
                      v-if="widx !== card.words.length - 1"
                      width="20" 
                      src="~/assets/img/factor-analyst/main/plus-icon.png" 
                      alt="+"
                    >

                    <strong v-else>을 더한 스타일</strong>
                  </p>

                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const currentTabIdx = ref(0)
const tabContainer = ref<HTMLDivElement | null>(null) 
const tabButtons = ref<HTMLButtonElement[]>([])

const indicatorStyle = ref({
  width: 0,
  left: 0
})

const styleTabs = [
  { 
    name: '퀄리티', 
    cards: [
      {
        title: '황금밸런스 스타일',
        description: '좋은 기업의 체력과 강한 주가 흐름이 함께 나타나는 황금밸런스 스타일이에요.',
        strongText: '고퀄리티에',
        words: ['주가모멘텀', '주가모멘텀', '주가모멘텀', '주가모멘텀']
      },
      {
        title: '안정수익 추구형 스타일',
        description: '높은 배당 성향과 탄탄한 현금 흐름을 가진 우량 기업 중심의 복합 스타일이에요.',
        strongText: '자산우량성에',
        words: ['배당수익률', '현금흐름', '저변동성']
      },
      {
        title: '강소기업 밸류 스타일',
        description: '독보적인 기술력과 높은 영업이익률을 바탕으로 고속 성장하는 스타일이에요.',
        strongText: '기술력에',
        words: ['이익지속성', '매출성장률']
      }
    ]
  },
  { 
    name: '주가모멘텀', 
    cards: [
      {
        title: '추세추종 스타일',
        description: '단기 급등 추세와 강한 매수세가 맞물려 달리는 말에 올라타는 스타일이에요.',
        strongText: '돌파력에',
        words: ['미래전망', '밸류에이션', '낙폭과대']
      }
    ]
  },
  { 
    name: '실적모멘텀', 
    cards: [
      {
        title: '어닝서프라이즈 스타일',
        description: '컨센서스를 상회하는 깜짝 실적으로 기관의 러브콜을 받는 스타일이에요.',
        strongText: '실적성장에',
        words: ['수급', '미래전망', '저변동성']
      }
    ]
  },
  { 
    name: '실적모멘텀', 
    cards: [
      {
        title: '어닝서프라이즈 스타일',
        description: '컨센서스를 상회하는 깜짝 실적으로 기관의 러브콜을 받는 스타일이에요.',
        strongText: '실적성장에',
        words: ['수급', '미래전망', '저변동성']
      }
    ]
  },
  { 
    name: '실적모멘텀', 
    cards: [
      {
        title: '어닝서프라이즈 스타일',
        description: '컨센서스를 상회하는 깜짝 실적으로 기관의 러브콜을 받는 스타일이에요.',
        strongText: '실적성장에',
        words: ['수급', '미래전망', '저변동성']
      }
    ]
  },
  { 
    name: '실적모멘텀', 
    cards: [
      {
        title: '어닝서프라이즈 스타일',
        description: '컨센서스를 상회하는 깜짝 실적으로 기관의 러브콜을 받는 스타일이에요.',
        strongText: '실적성장에',
        words: ['수급', '미래전망', '저변동성']
      }
    ]
  }
]

const setTabRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el) {
    tabButtons.value[index] = el as HTMLButtonElement
  }
}

const updateIndicator = (index: number) => {
  currentTabIdx.value = index
  const targetButton = tabButtons.value[index]
  const container = tabContainer.value
  
  if (targetButton) {
    indicatorStyle.value = {
      width: targetButton.offsetWidth,
      left: targetButton.offsetLeft - 20
    }

    if (container) {
      const buttonCenter = targetButton.offsetLeft + (targetButton.offsetWidth / 2)
      const containerHalfWidth = container.offsetWidth / 2
      const targetScrollLeft = buttonCenter - containerHalfWidth

      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      })
    }
  }
}

onMounted(async () => {
  await nextTick() 
  updateIndicator(0)
})
</script>