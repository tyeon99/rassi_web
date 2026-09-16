<template>
  <header id="header" class="mainHeader">
    <div class="left">
      <button class="back">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5625 16.625L8.14461 11.2071C7.75408 10.8166 7.75408 10.1834 8.14461 9.79289L13.5625 4.375" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <div class="title">
        <img width="17" src="~/assets/img/trigger-view/main/ai-icon.png" alt="ai 아이콘">
        <h1>트리거뷰</h1>
      </div>
    </div>
    
    <div class="right">
      <button @click="goLink">발생 종목 빠르게 보기</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'


const router = useRouter()

const goLink = () => {
  router.push('/trigger-view/item')
}

</script>
