<template>
  <div class="detailContent">
    <div class="detailContent__wrap">
      <div class="detailContent__wrap--title">
        <h1>최근 1개월 수익률 TOP 5는?</h1>
      </div>
      <div class="detailContent__wrap--content">
        <div class="box">
          <div class="inner-box">
            차트 영역 <!--영역 보여주느라 넣어놨습니다 (생략해주세용)-->
          </div>
          <!-- <div class="chart-box">
            실제 차트는 여기 안에 넣어주세여
          </div> -->
          <div class="no-record">
            <img width="20" src="~/assets/img/factor-analyst/detail/no-icon.png" alt="아이콘">
            <p>해당 스타일+는 추천 스타일+ 선정이 되지 않아 스타일+ 기록이 없습니다.</p>
          </div>
          <div class="more-btn">
            <button>삼성전자 종목 스타일 더 보기</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="detailContent__wrap">
      <div class="detailContent__wrap--title">
        <h1>추천 스타일+ PICK5</h1>
      </div>
      <div class="detailContent__wrap--content">
        <div class="dateList">
          <div 
            v-for="(dateItem, dIdx) in dateRecords" 
            :key="dIdx" 
            class="date"
          >
            <span>{{ dateItem.dateText }}</span>
            <div class="item-group" :class="{ masking: dIdx === dateRecords.length - 1 }">
              <button 
                v-for="(stock, sIdx) in dateItem.stocks" 
                :key="sIdx"
              >
                <p>{{ stock }}</p>
              </button>
            </div>
          </div>
        </div>
        <div class="no-record bg-white">
          <img width="20" src="~/assets/img/factor-analyst/detail/no-icon.png" alt="아이콘">
          <p>해당 스타일+는 추천 스타일+ 선정이 되지 않아 스타일+ 기록이 없습니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'

const dateRecords = [
  {
    dateText: '6월 8일 금요일',
    stocks: ['삼성전자', '삼성전자', '아모레퍼시픽', '셀트리온', '아모레퍼시픽', '셀트리온', '삼성전자']
  },
  {
    dateText: '6월 7일 목요일',
    stocks: ['삼성전자', '삼성전자', '아모레퍼시픽', '셀트리온', '아모레퍼시픽', '셀트리온', '삼성전자']
  },
  {
    dateText: '6월 6일 수요일',
    stocks: ['삼성전자', '삼성전자', '아모레퍼시픽', '셀트리온', '아모레퍼시픽', '셀트리온', '삼성전자']
  }
]
</script>