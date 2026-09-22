<template>
  <div class="recommendTodayContent">
    <div class="txt">
      6월 10일 황금코어 스타일, 황금값어치 스타일, 양날의 검스타일에서 15종목이 추천되었어요.
    </div>
    <div class="box-group">
      <div 
        v-for="(item, idx) in recommendList" 
        :key="idx" 
        class="box"
      >
        <div class="top">
          <div class="left">
            <div class="circle">
              <img width="30" src="~/assets/img/factor-analyst/main/item-circle.png" alt="종목로고">
            </div>
            <div class="name">
              <strong>{{ item.name }}</strong>
              <span>{{ item.code }}</span>
            </div>
          </div>
          <div class="right">
            {{ item.style }}
          </div>
        </div>
        <div class="bottom">
          <p 
            v-for="(tagItem, tIdx) in item.tags" 
            :key="tIdx"
          >
            <strong>{{ tagItem.title }}</strong>
            <span :class="['tag', tagItem.type]">{{ tagItem.label }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const recommendList = ref([
  {
    name: '삼성전자',
    code: '055872',
    style: '황금코어 스타일',
    tags: [
      { title: '주가모멘텀', label: 'High', type: 'high' },
      { title: '딥밸류', label: 'ON', type: 'on' }
    ]
  },
  {
    name: 'SK하이닉스',
    code: '000660',
    style: '황금값어치 스타일',
    tags: [
      { title: '실적모멘텀', label: 'High', type: 'high' },
      { title: '저변동성', label: 'ON', type: 'on' }
    ]
  },
  {
    name: '현대차',
    code: '005380',
    style: '양날의 검스타일',
    tags: [
      { title: '밸류에이션', label: 'Mid Low', type: 'midlow' },
      { title: '주주환원', label: 'ON', type: 'on' }
    ]
  }
])
</script>