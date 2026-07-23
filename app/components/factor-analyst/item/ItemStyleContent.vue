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
    <div class="itemStyleContent__content">
      <ISCS01 />
      <ISCS02 />
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'
import ISCS01 from '~/components/factor-analyst/item/sections/ISCS01.vue';
import ISCS02 from '~/components/factor-analyst/item/sections/ISCS02.vue';

</script>