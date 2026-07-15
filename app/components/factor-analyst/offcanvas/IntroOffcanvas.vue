<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" 
    @click="closeIntroOffcanvas"
  >
    <div
      class="offcanvas-content animate__animated animate__faster"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }" 
      @click.stop
    >
      <div class="offcanvas-close">
        <button @click="closeIntroOffcanvas">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.41425 7.00025L13.7072 1.70725C14.0982 1.31625 14.0982 0.68425 13.7072 0.29325C13.3162 -0.09775 12.6842 -0.09775 12.2933 0.29325L7.00025 5.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L5.58625 7.00025L0.29325 12.2933C-0.09775 12.6842 -0.09775 13.3162 0.29325 13.7072C0.48825 13.9022 0.74425 14.0002 1.00025 14.0002C1.25625 14.0002 1.51225 13.9022 1.70725 13.7072L7.00025 8.41425L12.2933 13.7072C12.4882 13.9022 12.7443 14.0002 13.0002 14.0002C13.2562 14.0002 13.5122 13.9022 13.7072 13.7072C14.0982 13.3162 14.0982 12.6842 13.7072 12.2933L8.41425 7.00025Z" fill="black"/>
          </svg>
        </button>
      </div>

      <div class="offcanvas-body introOffcanvas">
        <div class="txt-wrap">
          <div class="txt-group">
            <div class="title">
              <strong>추천 스타일⁺</strong>
              <span>현재 시장에서 좋은 성과가 기대되는 스타일⁺</span>
            </div>
            <div class="box">
              <div class="p-group">
                <p>
                  하루에 2개씩 1M·3M 기대수익률이 높을 것으로 예상되는 추천 스타일⁺와 Pick 5 종목을 제공합니다.<br /><br />

                  추천 스타일⁺는 강한 주가 흐름, 개선되는 실적, 긍정적인 수급 등 여러 종목 스타일이 함께 나타나는 종목을 중심으로 선별합니다.<br /><br />

                  또한 추천된 Pick 5 종목은 추천 이후 1개월 동안의 성과를 추적하여, 제시된 목표수익률과 실제 달성한 최대 평균 수익률까지 함께 확인할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div class="txt-group">
            <div class="title">
              <strong>스타일⁺</strong>
              <span>매일 오전 업데이트되는 종목 분석 리포트</span>
            </div>
            <div class="box">
              <div class="p-group">
                <p>
                  10개의 종목스타일을 종합 분석해 종목과 연관된 23가지 스타일⁺ 유형으로 제공하며, 종목을 쉽고 직관적으로 이해할 수 있도록 도와줍니다.<br /><br />

                  스타일⁺에 해당하는 종목을 스코어 순으로 확인할 수 있으며, 스타일의 상세 설명과 활용 방법, 구성 종목의 분석 내용을 함께 제공합니다. 최근 1개월 동안 높은 수익률을 기록한 TOP 5 종목도 확인할 수 있습니다.
                </p>
              </div>
              <div class="p-group">
                <strong>활용 방법</strong>
                <p>
                  스타일⁺는 종목의 현재 특징을 이해하고, 유사한 투자 패턴의 종목을 찾는 데 활용할 수 있습니다.<br /><br />

                  • 스타일의 특징과 투자 포인트 확인<br />
                  • 스타일에 속한 종목을 스코어 순으로 비교<br />
                  • 구성 종목의 상세 데이터 확인<br />
                  • 최근 1개월 수익률 TOP 5 종목 확인<br /><br />

                  스타일별 특징과 성과를 함께 확인하면 현재 시장에서 어떤 종목이 주목받고 있는지 더욱 쉽게 파악할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div class="txt-group">
            <div class="title">
              <strong>종목 스타일</strong>
              <span>현재 시장에서 좋은 성과가 기대되는 팩터 스타일</span>
            </div>
            <div class="box">
              <div class="p-group">
                <p>
                  10개의 종목스타일을 통해 현재 종목이 어떤 신호를 보이고 있는지 한 눈에 확인할 수 있습니다.<br /><br />

                  각 종목스타일을 선택하면 해당 신호가 포착된 이유와 주요 분석 내용을 확인할 수 있습니다.<br /><br />

                  또한 해당 종목이 속한 스타일⁺를 함께 제공하여, 비슷한 특징을 가진 종목과 스타일의 상세 설명, 활용 방법까지 함께 확인할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isOffcanvasAni: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close-introOffcanvas'])

const closeIntroOffcanvas = () => {
  emit('close-introOffcanvas')
}
</script>