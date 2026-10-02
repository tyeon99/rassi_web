<template>
  <section class="mainSection !px-0">
    <div class="mainSection__title !mb-2 !px-5">
      <h2 class="skeleton"></h2>
      <span class="date skeleton"></span>
    </div>
    <div class="mainSection__txt skeleton"></div>
    <div class="mainSection__content">
      <div ref="tabContainerRef" class="recommend-pagination01">
        <button class="skeleton"></button>
        <button class="skeleton"></button>
        <button class="skeleton"></button>
      </div>

      <div class="swiper recommendItemSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="itemList !p-5 box01">
              <div class="today-recommend">
                <div class="top">
                  <div class="pick skeleton"></div>
                  <span class="skeleton"></span>
                </div>

                <div class="item">
                  <div class="circle skeleton">
                  </div>
                  <div class="name">
                    <strong class="skeleton"></strong>
                    <span class="skeleton"></span>
                  </div>
                </div>

                <div class="txt">
                  <strong class="skeleton"></strong>
                  <div class="span-group">
                    <span class="skeleton"></span>
                    <span class="skeleton"></span>
                  </div>
                  <p class="skeleton w-full"></p>
                  <p class="skeleton w-[220px]"></p>
                </div>

                <button>
                  <p class="skeleton"></p>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pagination-group">
        <div class="recommend-pagination02">
          <div class="progress-bar skeleton"></div>
        </div>
        <div class="recommend-pagination03 skeleton"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'
</script>