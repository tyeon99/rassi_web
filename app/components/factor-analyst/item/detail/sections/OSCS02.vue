<template>
  <div class="content-section">
    <div class="title">
      <span>고점 대비로는 얼마나 빠졌을까?</span>
      <h1>고점 대비 하락폭은?</h1>
    </div>

    <div class="list">
      <div class="gpa-title">
        <p>최근 1개월 고점 대비 많이 빠졌을까?</p>
        <!-- <span>86.2</span> -->
      </div>
      <div class="gpa-txt !mb-0">
        최근 1개월 고점 대비 <span class="down">-18.5%</span> 하락했고, 저점 대비로는 <span class="up">+3.1%</span> 반등한 상태예요.
      </div>
    </div>

    <div class="list">
      <div class="gpa-title">
        <p>최근 3개월로 보면 낙폭이 더 클까?</p>
        <span>86.2</span>
      </div>
      <div class="gpa-txt !mb-0">
        최근 3개월 고점 대비 <span class="down">-22.0%</span> 하락했고, 저점 대비로는 <span class="up">+5.4%</span> 반등한 상태예요.
      </div>
    </div>

    <div class="list-group">
      <div 
        v-for="(item, idx) in itemList" 
        :key="idx" 
        class="list"
      >
        <div class="gray-box">
          <div class="box-title">
            <strong>{{ item.title }}</strong>
            <p>{{ item.subTitle }}</p>
          </div>

          <div class="period-group">
            <div
              v-for="(group, gIdx) in item.periodGroups"
              :key="gIdx"
              class="range-group"
            >
              <span class="period">{{ group.period }}</span>
              <div 
                v-for="(range, rIdx) in group.ranges" 
                :key="rIdx" 
                class="range-wrap"
              >
                <div class="txt mb-1">
                  <p>{{ range.label }}</p>
                  <strong>{{ range.val }}</strong>
                </div>
                <div class="range">
                  <div class="bar"></div>
                  <div class="score" :style="{ width: `${range.score}%` }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div v-if="item.isScore" class="score-box">
            <div class="score">
              <p>가장 높은 스코어</p>
              <strong class="up">{{ item.maxScore }}</strong>
              <span>{{ item.maxScorePeriod }} 기준</span>
            </div>
            <div class="score">
              <p>가장 낮은 스코어</p>
              <strong class="down">{{ item.minScore }}</strong>
              <span>{{ item.minScorePeriod }} 기준</span>
            </div>
          </div> -->

        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const itemList = ref([
  {
    title: '전체 시장과 비교하면?',
    subTitle: '전체 종목 중 SK하이닉스보다 고점 대비 하락폭이 작았던 종목의 비율, 그리고 저점 대비 반등폭이 작았던 종목의 비율',
    isScore: false,
    periodGroups: [
      {
        period: '1개월',
        ranges: [
          { label: '고점대비 하락 전체', val: '91.2', score: 91.2 },
          { label: '저점대비 반등 전체', val: '91.2', score: 91.2 }
        ]
      },
      {
        period: '3개월',
        ranges: [
          { label: '고점대비 하락 전체', val: '91.2', score: 91.2 },
          { label: '저점대비 반등 전체', val: '91.2', score: 91.2 }
        ]
      }
    ]
  },
  {
    title: 'SK하이닉스가 속한 반도체 업종의 평균 스코어는?',
    subTitle: '반도체 업종 (총 32종목)에 속한 종목들의 평균 스코어',
    isScore: false,
    periodGroups: [
      {
        period: '1개월',
        ranges: [
          { label: '고점대비 하락 업종평균', val: '85.0', score: 85.0 },
          { label: '저점대비 반등 업종평균', val: '78.4', score: 78.4 }
        ]
      },
      {
        period: '3개월',
        ranges: [
          { label: '고점대비 하락 업종평균', val: '88.2', score: 88.2 },
          { label: '저점대비 반등 업종평균', val: '80.1', score: 80.1 }
        ]
      }
    ]
  },
  {
    title: '같은 업종과 비교하면?',
    subTitle: '반도체 업종 안에서 SK하이닉스보다 고점 대비 하락폭이 작았던 종목의 비율, 그리고 저점 대비 반등폭이 작았던 종목의 비율',
    isScore: false,
    periodGroups: [
      {
        period: '1개월',
        ranges: [
          { label: '고점대비 하락 업종', val: '76.2', score: 76.2 },
          { label: '저점대비 반등 업종', val: '70.5', score: 70.5 }
        ]
      },
      {
        period: '3개월',
        ranges: [
          { label: '고점대비 하락 업종', val: '81.0', score: 81.0 },
          { label: '저점대비 반등 업종', val: '73.2', score: 73.2 }
        ]
      }
    ]
  }
])
</script>