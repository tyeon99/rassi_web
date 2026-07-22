<template>
  <div id="wrap">
    <BackHeader />
    <MainTab />
    <main id="main" class="main">
      <ItemStyleContent />
    </main>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'
import BackHeader from '~/components/factor-analyst/header/BackHeader.vue';
import ItemStyleContent from '~/components/factor-analyst/item/ItemStyleContent.vue';
import MainTab from '~/components/factor-analyst/main/MainTab.vue';

</script>