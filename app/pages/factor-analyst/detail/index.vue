<template>
  <div id="wrap">
    <BackHeader />
    <DetailTop />
    <DetailTab v-model="currentTab" />
    <main id="main" class="main">
      <div class="detailTab-content">
        <StyleItem v-if="currentTab === 'style-item'" />
        <StyleIntro v-else-if="currentTab === 'style-intro'" />
        <StyleRecord v-else-if="currentTab === 'style-record'" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// style
import '~/assets/css/factor-analyst/common.css'

import BackHeader from '~/components/factor-analyst/header/BackHeader.vue'
import DetailTop from '~/components/factor-analyst/detail/DetailTop.vue'
import DetailTab from '~/components/factor-analyst/detail/DetailTab.vue';
import StyleItem from '~/components/factor-analyst/detail/StyleItem.vue'
import StyleIntro from '~/components/factor-analyst/detail/StyleIntro.vue'
import StyleRecord from '~/components/factor-analyst/detail/StyleRecord.vue'

const currentTab = ref('style-item')

</script>