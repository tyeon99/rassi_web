<template>
  <div id="wrap">
    <BackHeader />
    <main id="main" class="main">
      <PaymentContent />
    </main>
    <footer id="footer" class="paymentFooter">
      <div class="title">안내사항</div>
      <div class="txt">
        ① 모든 결제는 구글 플레이 스토어를 통해 진행되며, 등록한 결제 수단을 이용하여 결제가 가능합니다. <br />
        ② 모든 상품은 결제와 동시에 서비스 사용이 가능하므로 서비스가 개시된 결제 상품에 대한 취소시 환불 금액은 없습니다.<br />
        ③ 정기결제(구독형 상품)의 경우, 구독 기간에 대한 약정이 없으며 언제든 구글 플레이 스토어를 통해 갱신에 대한 해지가 가능합니다.<br />
        ④ 정기결제(구독형 상품)를 해지하셔도 결제월 이용기간까지 서비스 사용이 가능하며, 결제된 상품에 대한 환불 금액은 없습니다. <br />
        ⑤ 정기결제(구독형 상품)의 갱신은 서비스 만료 24시간 안에 구글 플레이 계정을 통해 결제가 이루어집니다.<br />
        ⑥ 세금이 포함되어 있습니다. (국가간 세율에 따라 결제금액의 차이가 있을 수 있습니다.)<br />
        ⑦ 결제 프로모션은 사용하신 내역에 따라 혜택이 제한될 수 있습니다.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'
import BackHeader from '~/components/factor-analyst/header/BackHeader.vue';
import PaymentContent from '~/components/factor-analyst/payment/PaymentContent.vue';

</script>