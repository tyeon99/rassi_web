<template>
  <div id="wrap">
    <BackTitleHeader title="퀄리티 종목 스타일 전체 보기" />
    <main id="main" class="main">
      <ItemStyleListContent />
    </main>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'
import BackTitleHeader from '~/components/factor-analyst/header/BackTitleHeader.vue';
import ItemStyleListContent from '~/components/factor-analyst/item/ItemStyleListContent.vue';

</script>