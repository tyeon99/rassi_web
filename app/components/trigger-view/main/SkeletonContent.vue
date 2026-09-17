<template>
  <div class="mainTabContent">
    <div class="tab-title">이슈와 함께 급상승했던 종목 분석을 확인해 보세요.</div>

    <div class="dateList">
      <div 
        v-for="didx in 2" 
        :key="didx" 
        class="list"
      >
        <span class="date skeleton"></span>

        <div class="item-group">

          <!-- 종목 카드 -->
          <div class="item">
            <div class="title">
              <div class="left">
                <img width="24" src="~/assets/img/trigger-view/main/item-img_no.png" alt="종목 이미지">
                <div class="name skeleton"></div>
              </div>
              <div class="right skeleton"></div>
            </div>
            <div class="txt">
              <p class="skeleton w-full h-5"></p>
              <p class="skeleton w-full h-5 mt-1"></p>
              <p class="skeleton w-40 h-5 mt-1"></p>
            </div>
          </div>

          <!-- 디테일 박스 리스트 -->
          <button 
            v-for="iidx in 3" 
            :key="iidx"
            class="detail-box"
          >
            <div class="title">
              <strong class="skeleton"></strong>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="txt mt-2">
              <p class="skeleton w-full h-4"></p>
              <p class="skeleton w-40 h-4 mt-1"></p>
            </div>
          </button>

        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>
