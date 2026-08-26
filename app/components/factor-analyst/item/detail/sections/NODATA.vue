<template>
  <div class="content-section">
    <div class="no-data">
      <img width="20" src="~/assets/img/factor-analyst/detail/no-icon.png" alt="없음 아이콘">
      <p>해당 종목은 {{ title }} 분석에 필요한 <br />데이터가 없어요.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'

defineProps<{
  title: string
}>()

</script>