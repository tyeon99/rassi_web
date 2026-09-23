<template>
  <section class="mainSection">
    <div class="mainSection__title">
      <h2 class="skeleton"></h2>
    </div>
    <div class="mainSection__content">
      <div class="current-recommend">
        <div class="box">
          <div class="title skeleton"></div>
          <div class="txt">
            <p class="skeleton"></p>
            <strong class="skeleton"></strong>
          </div>
        </div>
        <div class="box">
          <div class="title skeleton"></div>
          <div class="txt">
            <p class="skeleton"></p>
            <strong class="skeleton"></strong>
          </div>
        </div>
        <div class="box">
          <div class="title skeleton"></div>
          <div class="txt">
            <p class="skeleton"></p>
            <strong class="skeleton"></strong>
          </div>
        </div>
      </div>
      
      <div class="style-all">
        <button>
          <p class="skeleton"></p>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const recentList = ref([
  { title: '삼성전자가나', rate: +22.22 },
  { title: 'LG전자가나다라마바', rate: +22.22 },
  { title: '삼성전자가나', rate: -5.12 }
])
</script>