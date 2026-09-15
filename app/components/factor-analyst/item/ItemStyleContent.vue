<template>
  <div class="itemStyleContent">
    <div class="itemStyleContent__top">
      <div class="item">
        <img width="30" src="~/assets/img/factor-analyst/main/item-circle.png" alt="종목 이미지">
        <p>SK하이닉스</p>
      </div>
      <div class="style">
        <p>
          종목 스타일 <span>3</span>개와 스타일⁺ <span>2</span>개 포착
        </p>
      </div>
    </div>

    <!-- 스켈레톤 itemStyleContent__top -->
    <div class="itemStyleContent__top">
      <div class="item">
        <img width="30" src="~/assets/img/factor-analyst/main/item-circle_no.png" alt="종목로고 디폴트">
        <p class="skeleton"></p>
      </div>
      <div class="style">
        <p class="skeleton"></p>
      </div>
    </div>

    <div class="itemStyleContent__content">
      <ISCS01Skeleton />
      <ISCS01 />
      <ISCS02 />
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'
import ISCS01 from '~/components/factor-analyst/item/sections/ISCS01.vue';
import ISCS02 from '~/components/factor-analyst/item/sections/ISCS02.vue';
import ISCS01Skeleton from '~/components/factor-analyst/item/sections/ISCS01Skeleton.vue';

</script>