<template>
  <div class="page">
    
    <div class="container">
      <div ref="captureWrapper">
        <div ref="captureArea" class="capture-area">
          <div class="header">
            <img src="/header.png" />
          </div>
          <div class="row-header">
            <div></div>
            <div class="label">첫인상</div>
            <div class="label">현인상</div>
          </div>  
          <div class="content">
            <CharacterBlock
              v-for="(item, index) in characters"
              :key="index"
              :data="item"
              :name="item.name"
              :imgFile="item.imgFile"
            />
          </div>          
        </div>
      </div>
      <button @click="capture">전체 이미지 다운로드</button>
    </div>   
  </div>  
</template>

<script setup>
import { ref } from 'vue'
import html2canvas from 'html2canvas'
import CharacterBlock from './components/CharacterRow.vue'

const captureArea = ref(null)

// 캐릭터 여러개
const characters = ref([
  { name: '별하랑', imgFile:'harang.png', first: null, current: null },
  { name: '바또랑', imgFile:'dorang.png', first: null, current: null },
  { name: '홍호돋', imgFile:'hodot.png', first: null, current: null }
])

const capture = async () => {
  const element = captureArea.value

  const canvas = await html2canvas(element, {
    useCORS: true,
    scale: 2,
    backgroundColor: '#ffffff',
    scrollX: 0,
    scrollY: 0,
    windowWidth: document.documentElement.scrollWidth,
    windowHeight: document.documentElement.scrollHeight
  })

  const link = document.createElement('a')
  link.download = 'imabangrang.png'
  link.href = canvas.toDataURL()
  link.click()
}
</script>

<style scoped>
.row-header {
  display: grid;
  grid-template-columns: 220px 1fr 1fr;
  margin: 10px 0 20px 0;
}

.label {
  text-align: center;
  font-weight: bold;
  font-size: 18px;

  color: white;
  text-shadow: 0 0 8px rgba(255,255,255,0.7);
}

.page {
  min-height: 100vh;
  background-size: cover;
}

.header {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.header img {
  width: 100%;
  max-width: 1000px;
  border-radius: 10px;
}

.container {
  text-align: center;
}

.capture-area {
  width: 1000px;
  margin: 0 auto;
  padding: 40px;
  
  background: url('@/assets/sky.png');
  backdrop-filter: blur(10px); /* ✨ 선택 */
  border-radius: 20px;

  position: relative;
  overflow: hidden;
  z-index: 10;
}

button {
  margin-top: 20px;
}
</style>