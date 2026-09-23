<template>
  <section class="mainSection">
    <div class="mainSection__title !mb-2">
      <h2 class="skeleton"></h2>
      <span class="date skeleton"></span>
    </div>
    <div class="mainSection__txt skeleton"></div>

    <div class="mainSection__content">
      <div class="today-recommend">
        <div class="recommend-title skeleton"></div>
        <div class="recommend-pagination skeleton"></div>
        <button class="itemList !p-0">
          <div class="inner-box">
            <div class="recommend-style skeleton"></div>
            <div class="recommend-item">
              <div class="circle skeleton"></div>
              <strong class="skeleton"></strong>
            </div>
          </div>
        </button>
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
import '~/assets/css/factor-analyst/common.css'

</script>