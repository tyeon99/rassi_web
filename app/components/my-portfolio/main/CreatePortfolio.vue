<template>
  <div class="mainSection !px-0">
    <div class="swiper createPortfolioSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <span class="slide-tag">라씨 매매비서의 제안</span>
          <div class="slide-title">
            1년에 <strong class="up">53%</strong>도 못 벌었다면,<br />
            그냥 따라만 하세요.
          </div>
          <div class="slide-txt">
            투자금만 설정하면 나머지는 라씨가 다 합니다.<br />
            고민은 빼고 따라만 하세요.
          </div>
          <div class="slide-txtbox">
            <p>
              <img width="16" src="~/assets/img/my-portfolio/main/checkbox-icon.png" alt="체크박스">
              <span>전략 고르고 투자금 입력, 그게 끝!</span>
            </p>
            <p>
              <img width="16" src="~/assets/img/my-portfolio/main/checkbox-icon.png" alt="체크박스">
              <span>종목과 비중은 라씨가 다 알려드려요</span>
            </p>
            <p>
              <img width="16" src="~/assets/img/my-portfolio/main/checkbox-icon.png" alt="체크박스">
              <span>리밸런싱도 라씨가 알아서 다 알려드려요</span>
            </p>
          </div>
          <div class="slide-button">
            <button>나만의 포트폴리오 만들기</button>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide-title">
            따라하는 법? 이게 전부예요.
          </div>
          <div class="slide-txt">
            클릭 두번이면 끝. 어려운 건 라씨가 다 합니다.
          </div>
          <div class="inner-box">
            <div class="txt-group">
              <p>
                <img width="18" src="~/assets/img/my-portfolio/main/txt-num1.png" alt="1">
                <span>수익률이 마음에 드는 전략 고르기</span>
              </p>
              <p>
                <img width="18" src="~/assets/img/my-portfolio/main/txt-num2.png" alt="2">
                <span>투자금 설정 후 포트폴리오 만들기 신청</span>
              </p>
              <p>
                <img width="18" src="~/assets/img/my-portfolio/main/txt-num3.png" alt="3">
                <span>오후 3시, 포트폴리오 완성</span>
              </p>
              <p>
                <img width="18" src="~/assets/img/my-portfolio/main/txt-num4.png" alt="4">
                <span>완성되면 알림으로 바로 전송</span>
              </p>
              <p>
                <img width="18" src="~/assets/img/my-portfolio/main/txt-num5.png" alt="5">
                <span>리밸런싱일? 알림대로 따라만 하면 끝!</span>
              </p>
            </div>
            <button>
              <p>활용 방법 자세히 보기</p>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import '~/assets/css/my-portfolio/common.css'

interface SwiperCore {
  realIndex: number
}

let swiperInstance: SwiperCore | null = null

onMounted(() => {
  const initSwiper = () => {
    if (typeof window !== 'undefined') {
      interface CustomWindow extends Window {
        Swiper?: new (
          element: string | HTMLElement,
          options?: Record<string, unknown>
        ) => SwiperCore
      }

      const globalWithSwiper = window as CustomWindow

      if (globalWithSwiper.Swiper) {
        swiperInstance = new globalWithSwiper.Swiper('.createPortfolioSwiper', {
          loop: false,
          slidesPerView: 1.05,
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        })
        return
      }
    }
    setTimeout(initSwiper, 50)
  }

  initSwiper()
})
</script>