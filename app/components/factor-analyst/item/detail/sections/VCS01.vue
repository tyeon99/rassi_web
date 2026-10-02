<template>
  <div class="content-section">
    <div class="title">
      <span>번 돈에 비해 주가가 얼마나 저평가일까?</span>
      <h1>이익수익률(EY)은?</h1>
      <button class="detail" @click="openEYDetailModal">
        <img width="20" src="~/assets/img/factor-analyst/item/question-icon.png">
      </button>
    </div>

    <div 
      v-for="(groupSet, sIdx) in eyGroups" 
      :key="sIdx" 
      class="section-group"
    >
      <div class="box-group">
        <div class="box">
          <div class="box-title">
            <span>Q</span>
            <p>{{ groupSet.question }}</p>
          </div>
          <div class="inner-box">
            <p v-html="groupSet.description"></p>
          </div>

          <div class="graph-wrap">
            <div class="txt">
              <p>백분위 :</p>
              <span class="m12">12M : <strong>{{ groupSet.m12 }}</strong></span>
              <span class="m24">24M : <strong>{{ groupSet.m24 }}</strong></span>
              <span class="m36">36M : <strong>{{ groupSet.m36 }}</strong></span>
            </div>

            <div class="graph-box">
              <div class="graph-txt">
                <span>하위</span>
                <span>상위</span>
              </div>

              <div class="graph">
                <div class="bar"></div>
                <span class="m12" :style="{ left: `${groupSet.m12}%` }">12M</span>
                <span class="m24" :style="{ left: `${groupSet.m24}%` }">24M</span>
                <span class="m36" :style="{ left: `${groupSet.m36}%` }">36M</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div class="list-group">
        <div class="list">
          <div class="gray-box">
            <div class="box-title">
              <strong>{{ groupSet.listTitle }}</strong>
            </div>

            <div class="period-group">
              <div 
                v-for="(item, idx) in groupSet.periodList" 
                :key="idx" 
                class="period-box"
              >
                <span class="period">{{ item.period }}</span>
                
                <div class="range-box">
                  <div class="box-txt" v-html="item.txt"></div>

                  <div class="range-wrap">
                    <div class="txt mb-1">
                      <p>{{ item.label }}</p>
                      <strong>백분위 : {{ item.percentile }}</strong>
                    </div>
                    <div class="range">
                      <div class="bar"></div>
                      <div class="score" :style="{ width: `${item.percentile}%` }"></div>
                    </div>
                    <div class="txt">
                      <span>하위</span>
                      <span>상위</span>
                    </div>
                  </div> <!-- range-wrap -->
                </div> <!-- range-box -->

              </div> <!-- period-box -->
            </div> <!-- period-group -->

          </div>
        </div>
      </div>
    </div> <!-- section-group -->

    <EYDetailModal 
      v-if="isEYDetailModalOpen"
      :isModalAni="isModalAni"
      @close-eyDetailModal="closeEYDetailModal"
    />

  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import '~/assets/css/factor-analyst/common.css'
import EYDetailModal from '~/components/factor-analyst/offcanvas/EYDetailModal.vue'

const isEYDetailModalOpen = ref(false)
const isModalAni = ref(false)

const eyGroups = ref([
  {
    question: '실적 기준 EY, 과거와 비교하면?',
    description: 'SK하이닉스의 현재 EY는 최근 12개월 중 상위 14.8%, 24개월 중 하위 23.2%, 36개월 중 중간 수준이에요.',
    m12: 91.2,
    m24: 23.2,
    m36: 50.0,
    listTitle: '다른 종목들과 비교해서 실적 기준 EY 위치는 어느 정도일까?',
    periodList: [
      {
        period: '과거',
        label: '과거 비교',
        txt: 'SK하이닉스의 실적 기준 EY는 과거와 비교해 <strong>상위 12.25%</strong> 수준이에요.',
        percentile: 28
      },
      {
        period: '피어그룹',
        label: '피어그룹 비교',
        txt: 'SK하이닉스의 실적 기준 EY는 피어그룹에서 <strong>상위 12.25%</strong> 수준이에요.',
        percentile: 54
      },
      {
        period: '종합',
        label: '종합 비교',
        txt: '과거와 피어그룹 비교를 종합한 SK하이닉스의 실적 기준 EY는 전체 시장에서 <strong>상위 15%</strong> 수준이에요',
        percentile: 85
      }
    ]
  },
  {
    question: '전망 기준 EY, 과거와 비교하면?',
    description: 'SK하이닉스의 전망 EY는 최근 12개월 중 상위 14.8%, 24개월 중 하위 23.2%, 36개월 중 중간 수준이에요.',
    m12: 91.2,
    m24: 23.2,
    m36: 50.0,
    listTitle: '다른 종목들과 비교해서 전망 기준 EY 위치는 어느 정도일까?',
    periodList: [
      {
        period: '과거',
        label: '과거 비교',
        txt: 'SK하이닉스의 전망 기준 EY는 과거와 비교해 <strong>상위 12.25%</strong> 수준이에요.',
        percentile: 28
      },
      {
        period: '피어그룹',
        label: '피어그룹 비교',
        txt: 'SK하이닉스의 전망 기준 EY는 피어그룹에서 <strong>상위 12.25%</strong> 수준이에요.',
        percentile: 54
      },
      {
        period: '종합',
        label: '종합 비교',
        txt: '과거와 피어그룹 비교를 종합한 SK하이닉스의 전망 기준 EY는 전체 시장에서 <strong>상위 15%</strong> 수준이에요',
        percentile: 85
      }
    ]
  }
])

// 종목 스타일 상세보기 열기
const openEYDetailModal = () => {
  isModalAni.value = true
  isEYDetailModalOpen.value = true
}

// 종목 스타일 상세보기 닫기
const closeEYDetailModal = () => {
  isModalAni.value = false
  setTimeout(() => {
    isEYDetailModalOpen.value = false
  }, 300)
}

watch(isEYDetailModalOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('scroll-lock')
  } else {
    document.body.classList.remove('scroll-lock')
  }
})
</script>