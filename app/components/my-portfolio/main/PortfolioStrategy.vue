<template>
  <div class="mainSection">
    <div class="mainSection__title">포트폴리오 전략</div>

    <div class="box-group">
      <div 
        v-for="(item, idx) in strategyList" 
        :key="idx" 
        class="box"
      >
        <div class="box-title">
          <div class="left">
            <img 
              width="54" 
              :src="getIconUrl(idx)" 
              :alt="`${item.title} 아이콘`"
            >
          </div>
          <div class="right">
            <strong>{{ item.title }}</strong>
            <div class="span-group">
              <span 
                v-for="(tag, tIdx) in item.tags" 
                :key="tIdx" 
                :class="tag.class"
              >
                {{ tag.text }}
              </span>
            </div>
          </div>
        </div>

        <div class="inner-box">
          <p>
            <span>자산(시작 1억)</span>
            <strong class="up">{{ item.asset }}</strong>
          </p>
          <p>
            <span>누적수익률</span>
            <strong class="up">{{ item.returnRate }}</strong>
          </p>
          <p>
            <span>CAGR</span>
            <strong class="up">{{ item.cagr }}</strong>
          </p>
        </div>

        <div class="box-txt">
          <template v-for="(desc, dIdx) in item.descriptions" :key="dIdx">
            • {{ desc }}<br v-if="dIdx < item.descriptions.length - 1" />
          </template>
        </div>

        <div class="box-button">
          <button>
            <p>{{ item.buttonText }}</p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/my-portfolio/common.css'

const images = import.meta.glob<{ default: string }>('~/assets/img/my-portfolio/main/*.png', { eager: true })

interface Tag {
  text: string
  class: string
}

interface StrategyItem {
  title: string
  tags: Tag[]
  asset: string
  returnRate: string
  cagr: string
  descriptions: string[]
  buttonText: string
}

const strategyList = ref<StrategyItem[]>([
  {
    title: '황금값어치 포트폴리오',
    tags: [
      { text: '실적강자', class: 'red' },
      { text: '시장기대감', class: 'green' },
      { text: '라씨추천', class: 'rassi' }
    ],
    asset: '8.03억',
    returnRate: '+523.23%',
    cagr: '+53.23%',
    descriptions: [
      '비싼 이유가 있는 종목만 골라 담아요.',
      '실적이 오르고, 미래 전망이 좋은 종목이예요.',
      '시장 최강자 종목들이 해당되요.'
    ],
    buttonText: '황금값어치 포트폴리오 자세히 보기'
  },
  {
    title: '황금코어 포트폴리오',
    tags: [
      { text: '실적강자', class: 'red' },
      { text: '시장기대감', class: 'green' }
    ],
    asset: '8.03억',
    returnRate: '+523.23%',
    cagr: '+53.23%',
    descriptions: [
      '비싼 이유가 있는 종목만 골라 담아요.',
      '실적이 오르고, 미래 전망이 좋은 종목이예요.',
      '시장 최강자 종목들이 해당되요.'
    ],
    buttonText: '황금코어 스타일 자세히 보기'
  }
])

const getIconUrl = (index: number) => {
  const num = String(index + 1).padStart(2, '0')
  const key = `/assets/img/my-portfolio/main/strategy-icon${num}.png`
  return images[key]?.default || ''
}
</script>