<template>
  <div class="content-section">
    <div class="title">
      <span>이 회사 장부는 괜찮을까?</span>
      <h1>F스코어 OX</h1>
    </div>
    
    <div class="box-group">
      <div 
        v-for="(item, idx) in fScoreList" 
        :key="idx" 
        class="box"
      >
        <div class="box-title">
          <span>Q</span>
          <p>{{ item.question }}</p>
        </div>
        <div class="inner-box">
          <span 
            :class="item.isPass ? 'pass' : 'fail'"
          >
            {{ item.isPass ? 'PASS' : 'FAIL' }}
          </span>
          <p v-html="item.description"></p>
        </div>
      </div>
    </div>

    <div class="list-group">
      <div 
        v-for="(item, idx) in itemFScore" 
        :key="idx" 
        class="list"
      >
        <div class="gray-box">
          <p>{{ item.boxTxt }}</p>

          <div class="range-wrap">
            <div class="range">
              <div class="bar">
                <span class="avg"></span>
              </div>
              <div class="score" :style="{ width: `${item.score}%` }">
                <img
                  class="item-icon"
                  width="18"
                  src="~/assets/img/factor-analyst/main/item-circle.png"
                  alt="종목 아이콘"
                />
              </div>
            </div>
            <div class="txt">
              <span>0</span>
              <span>전종목 평균</span>
              <span>12000</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'

const fScoreList = [
  {
    question: '올해 당기순이익은 0보다 큰가?',
    isPass: true,
    description: '네, 2026년 SK하이닉스의 당기순이익은 <strong class="up">1조 3500억</strong>이예요.  '
  },
  {
    question: '올해 영업으로 번 진짜 현금이 0보다 큰가?',
    isPass: true,
    description: '네, 2026년 SK하이닉스의 영업현금흐름은 <strong class="up">2500억</strong>이예요.  '
  },
  {
    question: '작년보다 자산 대비 이익률(ROA)이 좋아졌나?',
    isPass: false,
    description: '아니요, 2026년 자산 대비 이익률은 <strong class="up">+17.18%</strong>이고, 2025년 자산 대비 이익률은 <strong class="up">+25.21%</strong> 이예요.'
  },
  {
    question: '작년보다 빚(부채비율)이 줄었나?',
    isPass: false,
    description: '네, 2025년 부채비율은 <strong class="up">+25.21%</strong>이고, 2026년 부채비율은 <strong class="up">+12.12%</strong> 이예요.   '
  },
  {
    question: '바로 갚을 수 있는 돈(유동비율)이 늘었나?',
    isPass: true,
    description: '네, 2025년 유동비율은 <strong class="up">+25.21%</strong>이고, 2026년 유동비율은 <strong class="up">+32.12%</strong> 이예요. '
  },
  {
    question: '주식을 새로 찍어내서 가치를 떨어뜨리지 않았나?',
    isPass: true,
    description: '네, 신주발행은 없었어요.'
  },
  {
    question: '작년보다 마진(매출총이익률)이 좋아졌나?',
    isPass: true,
    description: '네, 2025년 매출총이익률은 <strong class="up">+25.21%</strong>이고, 2026년 매출총이익은 <strong class="up">+32.12%</strong> 이예요.'
  },
  {
    question: '작년보다 재산(자산회전율)을 굴려서 매출을 더 팍팍 일으켰나?',
    isPass: true,
    description: '네, 2025년 자산회전율은 <strong class="up">+25.21%</strong>이고, 2026년 자산회전율은 <strong class="up">+32.12%</strong> 이예요.  '
  }
]

const itemFScore = ref([
  {
    score: 86.2,
    boxTxt: 'SK하이닉스의 F스코어의 위치는?'
  }
])
</script>