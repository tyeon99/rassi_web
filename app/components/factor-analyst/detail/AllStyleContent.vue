<template>
  <div class="allStyle">
    <div class="title">스타일⁺ 전체보기</div>
    <div class="style-group">
      <button 
        v-for="(box, idx) in styleList" 
        :key="idx" 
        class="box"
      >
        <div class="box-title">{{ box.title }}</div>
        <div class="box-txt">{{ box.txt }}</div>
        <div class="item-style">
          <a 
            v-for="(tag, tIdx) in box.tags" 
            :key="tIdx"
            @click.stop
          >
            {{ tag }}
          </a>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const styleList = ref([
    {
      title: '황금밸런스 스타일',
      txt: '좋은 기업의 체력과 강한 주가 흐름이 함께 나타나는 황금밸런스 스타일이에요',
      tags: ['퀄리티', '주가모멘텀']
    },
    {
      title: '알짜밸류 스타일',
      txt: '안정적인 기업 체력과 재평가 가능성을 함께 갖춘 가치형 스타일이에요',
      tags: ['퀄리티', '밸류에이션', '주주환원']
    },
    {
      title: '알짜저평가 스타일',
      txt: '기업 가치는 우수하지만 아직 시장의 관심이 부족한 스타일이에요',
      tags: ['퀄리티', '주가모멘텀']
    },
    {
      title: '숨은가치 스타일',
      txt: '높은 기업 가치에도 시장의 관심이 아직 부족한 저평가 스타일이에요',
      tags: ['퀄리티', '초저평가']
    },
    {
      title: '우직한 복리 스타일',
      txt: '우수한 기업 체력과 낮은 변동성을 바탕으로 꾸준한 성장이 기대되는 복리 스타일이에요',
      tags: ['퀄리티', '저변동성']
    },
    {
      title: '정크랠리 스타일',
      txt: '기업 가치는 우수하지만 아직 시장의 관심이 충분히 반영되지 않은 숨은 강자형 스타일이에요',
      tags: ['퀄리티', '주가모멘텀']
    },
    {
      title: '황금밸런스 스타일',
      txt: '좋은 기업의 체력과 강한 주가 흐름이 함께 나타나는 황금밸런스 스타일이에요',
      tags: ['퀄리티', '주가모멘텀']
    },
    {
      title: '알짜밸류 스타일',
      txt: '안정적인 기업 체력과 재평가 가능성을 함께 갖춘 가치형 스타일이에요',
      tags: ['퀄리티', '밸류에이션', '주주환원']
    },
    {
      title: '알짜저평가 스타일',
      txt: '기업 가치는 우수하지만 아직 시장의 관심이 부족한 스타일이에요',
      tags: ['퀄리티', '주가모멘텀']
    }
  ])
</script>