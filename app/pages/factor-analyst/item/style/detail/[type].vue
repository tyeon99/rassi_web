<template>
  <div id="wrap">
    <CloseHeader class="itemStyleDetailHeader" />
    <main id="main" class="main">

      <component
        :is="activeContentComponent"
        v-if="activeContentComponent"
      />

    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// style
import '~/assets/css/factor-analyst/common.css'
import CloseHeader from '~/components/factor-analyst/header/CloseHeader.vue'

import QualityContent from '~/components/factor-analyst/item/detail/QualityContent.vue'
import StockMomentumContent from '~/components/factor-analyst/item/detail/StockMomentumContent.vue'
import EarningsMomentumContent from '~/components/factor-analyst/item/detail/EarningsMomentumContent.vue'
import OutlookContent from '~/components/factor-analyst/item/detail/OutlookContent.vue'
import ValuationContent from '~/components/factor-analyst/item/detail/ValuationContent.vue'
import SupplyContent from '~/components/factor-analyst/item/detail/SupplyContent.vue'
import ShareholderContent from '~/components/factor-analyst/item/detail/ShareholderContent.vue'
import UnderratedContent from '~/components/factor-analyst/item/detail/UnderratedContent.vue'
import LowVolContent from '~/components/factor-analyst/item/detail/LowVolContent.vue'
import OversoldContent from '~/components/factor-analyst/item/detail/OversoldContent.vue'

const route = useRoute()

const currentType = computed(() => route.params.type as string)

const contentMap: Record<string, Component> = {
  'quality': QualityContent,
  'stock-momentum': StockMomentumContent,
  'earnings-momentum': EarningsMomentumContent,
  'outlook': OutlookContent,
  'valuation': ValuationContent,
  'supply': SupplyContent,
  'shareholder': ShareholderContent,
  'underrated': UnderratedContent,
  'low-vol': LowVolContent,
  'oversold': OversoldContent
}

const activeContentComponent = computed(() => contentMap[currentType.value] || null)
</script>