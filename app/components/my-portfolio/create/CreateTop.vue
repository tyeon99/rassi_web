<template>
  <div class="createTop">

    <h1 class="title">나만의 포트폴리오 만들기</h1>

    <div class="stepper">
      <div 
        v-for="step in stepList" 
        :key="step.id" 
        class="step"
        :class="{ active: currentStep >= step.id }"
      >
        <span>{{ step.id }}</span>
        <p>{{ step.name }}</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import '~/assets/css/my-portfolio/common.css'

const props = withDefaults(defineProps<{
  currentStep?: number
}>(), {
  currentStep: 1
})

const stepList = [
  { id: 1, name: '전략선택' },
  { id: 2, name: '포트폴리오 설정' },
  { id: 3, name: '완료' }
]
</script>