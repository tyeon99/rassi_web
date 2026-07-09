<template>
  <div class="mainTab">
    <button
        v-for="(tab, idx) in tabs"
        :key="idx"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.name }}
      </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const tabs = [
  { id: 'market', name: '마켓뷰' },
  { id: 'ai-signal', name: 'AI매매신호' },
  { id: 'stock-catch', name: '종목캐치' },
  { id: 'style-plus', name: '스타일+' }
]

// 현재 활성화된 탭 ID
const activeTab = ref('style-plus')
</script>