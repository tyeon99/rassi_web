<template>
  <div class="createStep">

    <div class="strategy-selection">
      <div 
        v-for="item in strategies" 
        :key="item.id" 
        class="box"
        :class="{ active: selectedStrategy === item.id }"
        @click="selectStrategy(item.id)"
      >
        <div class="check">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z" fill-rule="evenodd" clip-rule="evenodd" :fill="selectedStrategy === item.id ? '#6565FF' : '#A1ABB5'" />
          </svg>
        </div>

        <div class="txt-group">
          <div class="top">
            <div class="title">
              <strong>{{ item.title }}</strong>
              <span v-if="item.badge">{{ item.badge }}</span>
            </div>
            <button>
              <img width="24" src="~/assets/img/my-portfolio/create/search-icon.png" alt="돋보기 아이콘">
            </button>
          </div>

          <div class="bottom">
            <p
              v-for="(desc, idx) in item.descriptions"
              :key="idx"
            >
              {{ desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import '~/assets/css/my-portfolio/common.css'

interface Strategy {
  id: string
  title: string
  badge?: string
  descriptions: string[]
}

const router = useRouter()
const route = useRoute()

const initialStrategy = (route.query.strategyId as string) || 'strategy-1'
const selectedStrategy = ref(initialStrategy)

const strategies = ref<Strategy[]>([
  {
    id: 'strategy-1',
    title: '황금값어치 포트폴리오',
    badge: '라씨추천',
    descriptions: [
      '비싼 이유가 있는 종목만 골라 담아요.',
      '실적이 오르고, 미래 전망이 좋은 종목이에요.',
      '시장 최강자 종목들이 해당돼요.'
    ]
  },
  {
    id: 'strategy-2',
    title: '황금코어 포트폴리오',
    descriptions: [
      '비싼 이유가 있는 종목만 골라 담아요.',
      '실적이 오르고, 미래 전망이 좋은 종목이에요.',
      '시장 최강자 종목들이 해당돼요.'
    ]
  }
])

const selectStrategy = (id: string) => {
  selectedStrategy.value = id
  
  router.push({
    path: '/my-portfolio/create/step2',
    query: { strategyId: id }
  })
}
</script>