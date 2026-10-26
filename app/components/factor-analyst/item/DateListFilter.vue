<template>
  <div class="dateListFilter">
    <!-- 라디오 버튼 영역 -->
    <div class="radio-group">
      <label>
        <input 
          v-model="searchType" 
          type="radio" 
          value="stock" 
          class="radio-input"
        />
        <span>Pick종목</span>
      </label>

      <label>
        <input 
          v-model="searchType" 
          type="radio" 
          value="style" 
          class="radio-input"
        />
        <span>파워스타일</span>
      </label>
    </div>

    <!-- 선택 타입별 우측 입력/선택 영역 -->
    <div class="input-group">
      <!-- Pick종목 선택 시: 검색창 -->
      <div v-if="searchType === 'stock'" class="search-box">
        <div class="input-box">
          <input 
            v-model="searchKeyword" 
            type="text" 
            class="search-input"
            @focus="isAutoCompleteOpen = true"
            @blur="hideAutoComplete"
          />
          <button type="button" class="search-btn">
            <img width="22" src="~/assets/img/factor-analyst/item/search-icon.png" alt="검색 아이콘">
          </button>
        </div>

        <div v-if="isAutoCompleteOpen && searchKeyword" class="autocomplete-list">
          <button 
            v-for="(item, idx) in filteredStockList" 
            :key="idx" 
            type="button"
            @mousedown="selectStock(item)"
          >
            <strong>{{ item.name }}</strong>
            <span class="code">{{ item.code }}</span>
          </button>
          <div v-if="filteredStockList.length === 0" class="empty">
            검색 결과가 없습니다.
          </div>
        </div>
      </div>

      <!-- 파워스타일 선택 시: 셀렉트 박스 -->
      <div v-else ref="selectBoxRef" class="select-box" @click="toggleSelectDropdown">
        <div class="select-trigger">
          <span>{{ selectedStyle || '파워스타일 선택' }}</span>
          <div class="arrow" :class="{ open: isSelectOpen }">
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.25832 5.70779C3.28508 5.74665 3.32089 5.77843 3.36265 5.80038C3.40442 5.82233 3.45089 5.8338 3.49807 5.8338C3.54526 5.8338 3.59173 5.82233 3.6335 5.80038C3.67526 5.77843 3.71107 5.74665 3.73782 5.70779L6.36282 1.91612C6.39321 1.87239 6.41103 1.82116 6.41434 1.76801C6.41766 1.71487 6.40635 1.66182 6.38163 1.61465C6.22858 1.47292 6.17633 1.45841 6.12307 1.4585H0.873074C0.819945 1.45872 0.767881 1.47341 0.722481 1.50101C0.677081 1.52861 0.640063 1.56806 0.615407 1.61512C0.590751 1.66218 0.579391 1.71507 0.582548 1.76811C0.585705 1.82115 0.603259 1.87232 0.633324 1.91612L3.25832 5.70779Z" fill="black" />
            </svg>
          </div>
        </div>
        <div v-if="isSelectOpen" class="select">
          <button
            v-for="(style, idx) in styleOptions"
            :key="idx"
            type="button"
            :class="{ active: selectedStyle === style }"
            @click.stop="onSelectStyle(style)"
          >
            {{ style }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const searchType = ref<'stock' | 'style'>('stock')
const searchKeyword = ref('')
const isAutoCompleteOpen = ref(false)

const isSelectOpen = ref(false)
const selectedStyle = ref('')
const selectBoxRef = ref<HTMLDivElement | null>(null)

const styleOptions = ref([
  '황금코어 스타일', '황금값어치 스타일', '발사대기 스타일', '가치점프 스타일', '조용한 강세 스타일', 
  '의심타파 스타일', '바닥탈출 스타일', '저평가회복 스타일', '가격선행 스타일', '알짜밸류 스타일', 
  '습은 가치 스타일', '열기주의 스타일', '재평가대기 스타일', '모험형 강세 스타일', '우직한 복리 스타일', 
  '장기동면 스타일', '체력방전 스타일', '흙속의 진주 스타일', '차분한 환원 스타일', '양날의 검 스타일', 
  '몸값부담 스타일', '공포바닥 스타일'
])

const dummyStockList = [
  { name: 'SK하이닉스', code: '000660' },
  { name: 'LG전자', code: '066570' },
  { name: '삼성전자', code: '005930' }
]

const filteredStockList = computed(() => {
  if (!searchKeyword.value) return []
  return dummyStockList.filter(s => 
    s.name.includes(searchKeyword.value) || s.code.includes(searchKeyword.value)
  )
})

const selectStock = (item: { name: string; code: string }) => {
  searchKeyword.value = item.name
  isAutoCompleteOpen.value = false
}

const hideAutoComplete = () => {
  setTimeout(() => {
    isAutoCompleteOpen.value = false
  }, 200)
}

// 셀렉트 박스 토글
const toggleSelectDropdown = () => {
  isSelectOpen.value = !isSelectOpen.value
}

// 스타일 선택 시
const onSelectStyle = (style: string) => {
  selectedStyle.value = style
  isSelectOpen.value = false
}

// 외부 영역 클릭 시 드롭다운 닫기
const handleClickOutside = (event: MouseEvent) => {
  if (selectBoxRef.value && !selectBoxRef.value.contains(event.target as Node)) {
    isSelectOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>