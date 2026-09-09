<template>
  <div class="itemStyleContent__section">
    <div class="itemStyleContent__section--title skeleton"></div>
    <div class="itemStyleContent__section--txt">
      <span class="skeleton w-full"></span>
      <span class="skeleton w-full"></span>
      <span class="skeleton w-40"></span>
    </div>
    <div class="itemStyleContent__section--content">
      <div 
        v-for="idx in 5" 
        :key="idx" 
        class="box"
      >
        <span class="round skeleton"></span>
        <div class="box-title text-center skeleton"></div>
        
        <div class="donut-chart">
          <button 
            v-for="cIdx in 2" 
            :key="cIdx" 
            class="chart"
          >

            <!-- 도넛차트 -->
            <div class="donut skeleton"></div>

            <div class="txt">
              <p class="skeleton"></p>
              <span class="skeleton"></span>
            </div>

          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'

</script>