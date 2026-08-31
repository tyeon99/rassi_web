<template>
  <div id="wrap">
    <main id="main" class="main">
      <div class="version">

        <div class="version-top">
          <div class="title">
            <span>VERSION HISTORY</span>
            <strong>더 정확한 신호를 위해<br />AI는 오늘도 발전하고 있어요</strong>
          </div>
          <div class="txt">
            AI 업데이트 내역은 아래에서 확인할 수 있어요.<br />
            매일 더 정확하고 스마트해지는 주식AI를 라씨 매매비서 앱을 통해 만나보세요.
          </div>
        </div>
        <!-- // version-top -->

        <div class="version-box">
          <div class="left">
            <span>현재 버전</span>
            <strong>Ver 4.0.0</strong>
          </div>
          <div class="right">
            <span>누적 업데이트</span>
            <strong>38회</strong>
          </div>
        </div>
        <!-- // version-box -->

        <div class="version-history">
          <div 
            v-for="(yGroup, yIdx) in versionHistory" 
            :key="yIdx" 
            class="list"
          >
            <span class="year">{{ yGroup.year }}</span>
            
            <div class="txt-group">
              <div 
                v-for="(item, vIdx) in yGroup.history" 
                :key="vIdx" 
                class="item-wrap"
              >
                <div class="title">
                  <strong>{{ item.ver }}</strong>
                  <span>{{ item.date }}</span>
                </div>
                <div class="txt">
                  {{ item.desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- // version-list -->

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// style
import '~/assets/css/version.css'

const versionHistory = ref([
  {
    year: '2026',
    history: [
      {
        ver: 'Ver 4.0.0',
        date: '2026.03.28',
        desc: 'Refactoring the Entire Signal Flow'
      },
      {
        ver: 'Ver 3.8.2',
        date: '2026.01.15',
        desc: 'AI 매매신호 예측 알리미 엔진 고도화'
      }
    ]
  },
  {
    year: '2025',
    history: [
      {
        ver: 'Ver 3.5.0',
        date: '2025.11.02',
        desc: '딥러닝 기반 실시간 가상 매매 알고리즘 도입'
      },
      {
        ver: 'Ver 3.2.1',
        date: '2025.06.18',
        desc: '종목 포트폴리오 분석 속도 최적화'
      }
    ]
  },
  {
    year: '2024',
    history: [
      {
        ver: 'Ver 3.0.0',
        date: '2024.09.10',
        desc: '주식 AI 3.0 개편 및 프론트엔드 UI/UX 전면 수정'
      },
      {
        ver: 'Ver 2.7.0',
        date: '2024.02.14',
        desc: '수익률 추적 데이터 보정 시스템 탑재'
      }
    ]
  },
  {
    year: '2023',
    history: [
      {
        ver: 'Ver 2.5.0',
        date: '2023.10.05',
        desc: '서버 백엔드 아키텍처 개편 및 응답 속도 향상'
      },
      {
        ver: 'Ver 2.1.0',
        date: '2023.04.12',
        desc: '알림 모듈 및 커스텀 종목 감지 로직 추가'
      }
    ]
  },
  {
    year: '2022',
    history: [
      {
        ver: 'Ver 2.0.0',
        date: '2022.08.20',
        desc: '라씨 매매비서 AI 모델 V2 전격 전환'
      },
      {
        ver: 'Ver 1.8.0',
        date: '2022.01.08',
        desc: '실시간 시장 동향 빅데이터 분석 기능 추가'
      }
    ]
  },
  {
    year: '2021',
    history: [
      {
        ver: 'Ver 1.5.0',
        date: '2021.07.19',
        desc: '사용자 맞춤형 매매 타이밍 푸시 시스템 적용'
      }
    ]
  },
  {
    year: '2020',
    history: [
      {
        ver: 'Ver 1.0.0',
        date: '2020.03.02',
        desc: '주식 AI 매매비서 정식 서비스 런칭'
      }
    ]
  }
])
</script>