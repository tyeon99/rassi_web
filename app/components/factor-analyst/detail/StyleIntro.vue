<template>
  <div class="detailContent">
    <div class="detailContent__wrap">
      <div class="detailContent__wrap--title">
        <h1>스타일+를 구성하는 종목 스타일은?</h1>
      </div>
      <div class="detailContent__wrap--content">
        <div
          v-for="(box, idx) in introBoxes"
          :key="idx"
          class="box"
        >
          <div class="title">
            <strong>{{ box.title }}</strong>
            <span class="tag" :class="box.tagClass">{{ box.tagName }}</span>
          </div>
          <div class="txt">
            <p v-html="box.txt"></p>
          </div>
          <div class="bottom-btn">
            <button>
              <p>종목 스타일 확인하기</p>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- // -->
    <div class="detailContent__wrap">
      <div class="detailContent__wrap--title">
        <h1>어떤 종목들이 해당될까요?</h1>
      </div>
      <div class="detailContent__wrap--content">
        <div class="box">
          <div class="txt">
            <p>
              • 주가, 실적, 시장의 기대, 여기에 수급까지 모두 한 방향을 가리키는 가장 이상적인 강세 종목이에요.<br />
              • 현재 시장에서 가장 신뢰도가 높은 탄탄한 상승 구조를 가지고 있어요.<br />
              • 실수급이 확인되고 있어, 상승 추세가 이어질 논리가 매우 깔끔해요.<br />
              • 설령 중간에 조정이 오더라도, 다시 진입할 타이밍을 잡기 편한 구조예요.<br />
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- // -->
    <div class="detailContent__wrap">
      <div class="detailContent__wrap--title">
        <h1>스타일+ 활용 방법은?</h1>
      </div>
      <div class="detailContent__wrap--content">
        <div class="box">
          <div class="txt">
            <p>
              <strong>1. 포트폴리오의 중심축(core)으로 활용</strong>
              삼박자가 한 방향(우상향)으로 정렬된 가장 이상적인 강세 종목으로 지표 간의 엇박자가 없어 상승 구조의 신뢰도가 매우 높으므로, 현재 시장에서 포트폴리오를 안정적으로 이끌어갈 핵심 주도주로 편입하여 보유하는 전략이 유효해요.
            </p>
            <p>
              <strong>2. 메이저 수급을 추종하는 추세 매매</strong>
              단순한 기대감이나 테마성 소문이 아니라, 기관과 외국인의 '진짜 돈(실수급)'이 유입되며 상승 추세를 지탱하고 있을 확률이 높아요. 메이저 수급이라는 확실한 뒷배가 존재하므로, 추세가 꺾이기 전까지는 섣부른 고점 예측을 지양하고 상방을 열어둔 채 추세를 끝까지 누리는 전략도 좋아요.
            </p>
            <p>
              <strong>3. 일시적 조정을 '철저한 분할 매수' 기회로 포착</strong>
              상승 스토리와 실적, 수급의 삼박자가 워낙 뚜렷하기 때문에 주가가 일시적으로 숨을 고르더라도 복귀 탄력이 강한 편이예요. 주가가 눌릴 때 불안해하기보다, 기존 메이저 수급의 이탈 여부를 체크하며 지지선 부근에서 비중을 점진적으로 확대하는 '재진입 타이밍'으로 적극 활용하기 좋아요.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'

const introBoxes = [
  {
    title: '주가모멘텀',
    tagName: 'High',
    tagClass: 'high',
    txt: "실제 돈이 유입되는 '실수급'이 확인되고 있어, 상승 추세가 이어질 논리가 매우 깔끔해요.<br />단순히 말로만 하는 기대감이 아니라 기관이나 외국인 등의 진짜 매수세가 받쳐주고 있기 때문에, 주가 상승의 연속성과 펀더멘털의 지속성을 신뢰할 수 있습니다."
  },
  {
    title: '실적성장성',
    tagName: 'Mid Low',
    tagClass: 'midlow',
    txt: '최근 분기 실적이 시장의 추정치 범위 안에서 방어되고 있는 상태입니다.<br />폭발적인 성장은 아니지만 하방 경직성을 확보해주는 기초 체력 역할을 하고 있어 리스크 관리 측면에서 유리한 스타일입니다.'
  },
  {
    title: '밸류에이션',
    tagName: 'Low',
    tagClass: 'low',
    txt: '현재 주가 수준이 과거 평균 직전 자산 가치 대비 저평가 국면에 진입해 있습니다.<br />다만 모멘텀의 회복 속도가 다소 더디기 때문에 단기 차익보다는 장기적인 관점에서 분할로 접근하기 좋은 구간입니다.'
  },
  {
    title: '거래대금 집중도',
    tagName: 'ON',
    tagClass: 'on',
    txt: '시장 전체 거래대금의 상위권에 랭크되며 투자자들의 이목이 강하게 쏠리는 스타일입니다.<br />변동성이 확대되는 구간인 만큼 당일 주가 변동 리스크와 수급 유출입 신호를 실시간으로 정밀 모니터링해야 합니다.'
  },
  {
    title: '기관 수급 가속도',
    tagName: 'High',
    tagClass: 'high',
    txt: '연기금과 투신을 중심으로 한 메이저 수급의 순매수 강도가 연일 거세지고 있습니다.<br />유통 물량을 잠그며 올리는 전형적인 수급 우위 패턴으로, 추가적인 주가 슈팅의 개연성이 매우 높은 상태입니다.'
  }
]
</script>