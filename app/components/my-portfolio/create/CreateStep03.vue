<template>
  <div class="createStep">

    <div class="step-section">
      <div class="title">이렇게 만들어요</div>

      <div class="list-box">
        <p v-for="(item, idx) in summaryList" :key="idx">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
        </p>
      </div>

      <div class="guide">
        <p>* 포트폴리오 생성과 리밸런싱은 모두 오후 3시에 진행돼요.</p>
        <p>* 리밸런싱일이 휴장일이면 직전 영업일에 리밸런싱해요.</p>
      </div>

    </div>

    <div class="step-section">
      <div class="create-box">
        <img width="54" src="~/assets/img/my-portfolio/create/create-img.png" alt="">
        <strong>회원님을 위한<br />포트폴리오를 만들어요</strong>
        <p>
          종목은 오늘 오후 3시에 한 번에 담겨요. <br />
          오늘 3시에 확정된 종목과 수량을<br />
          알림으로 보내드릴게요.
        </p>
      </div>
    </div>

    <div class="step-section">
      <div class="info-box gray">
        <div class="checkbox">
          <button type="button" @click="toggleCheck">
            <img 
              width="20" 
              :src="isChecked ? checkboxCheckedImg : checkboxImg" 
              :alt="isChecked ? '체크박스 선택됨' : '체크박스 미선택'"
            >
          </button>
        </div>
        <p>
          <strong>꼭 확인하세요!</strong><br />
          모의 운용이라 실제 계좌로 주문되지 않는 점을 확인해 주세요. 종목이 확정되면 이용 중인 증권사에서 직접 주문하세요.
        </p>
      </div>
    </div>

    <div class="create-btn">
      <button :disabled="!isChecked">확인</button>
      <a href="#">
        <span>다른 전략으로도 만들어 보기</span>
        <img width="18" src="~/assets/img/my-portfolio/create/right-arrow.png" alt="오른쪽 화살표">
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/my-portfolio/common.css'

import checkboxImg from '~/assets/img/my-portfolio/create/checkbox.png'
import checkboxCheckedImg from '~/assets/img/my-portfolio/create/checkbox_checked.png'

interface SummaryItem {
  label: string
  value: string
}

const isChecked = ref(false)

const summaryList = ref<SummaryItem[]>([
  { label: '전략', value: '황금값어치' },
  { label: '투자금', value: '100,000,000원' },
  { label: '리밸런싱', value: '매월 10일 오후 3시' },
  { label: '종목 편입', value: '오늘 오후 3시' },
  { label: '다음 리밸런싱', value: '10월 23일 (수)' }
])

const toggleCheck = () => {
  isChecked.value = !isChecked.value
}
</script>