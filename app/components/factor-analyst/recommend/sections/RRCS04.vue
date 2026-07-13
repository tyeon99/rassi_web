<template>
  <div class="recommendResultContent__section">
    <div class="recommendResultContent__section--title">
      <h1>6월 5일 다른 추천 스타일+는?</h1>
    </div>

    <div class="recommendResultContent__section--content">
      <div class="recommendListContent__list p-0">
        <div class="list">
          <button 
            v-for="(card, cIdx) in styleCards" 
            :key="cIdx"
          >
            <div class="top">
              <strong>{{ card.styleName }}</strong>
              <span>{{ card.subTitle }}</span>
            </div>
            <div class="bottom">
              <div 
                v-for="(item, iIdx) in card.items" 
                :key="iIdx" 
                class="item"
              >
                <img 
                  width="20" 
                  src="~/assets/img/factor-analyst/main/item-circle.png" 
                  alt="종목 아이콘"
                >
                <p>{{ item.name }}</p>
                <p class="up">{{ item.rate }}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'

const styleCards = [
  {
    styleName: '가격선행 스타일',
    subTitle: '수익률 TOP2',
    items: [
      { name: '한화', rate: '19.20%' },
      { name: '아모레퍼시픽', rate: '17.50%' }
    ]
  },
  {
    styleName: '수급선행 스타일',
    subTitle: '수익률 TOP2',
    items: [
      { name: '카카오', rate: '6.10%' },
      { name: '셀트리온', rate: '5.80%' }
    ]
  }
]
</script>