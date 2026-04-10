<template>
  <div class="slot" @click="triggerUpload">
    <img 
      v-if="image" 
      :src="image" 
      :style="{ objectPosition: position }"
    />
    <span v-else>+</span>

    <input type="file" ref="fileInput" hidden @change="onFileChange" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const image = ref(null)
const fileInput = ref(null)

const triggerUpload = () => {
  fileInput.value.click()
}

const onFileChange = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    image.value = reader.result
  }
  reader.readAsDataURL(file)
}
</script>
<style scoped>
.slot {
  width: 100%;
  height: 220px;
  background: #eee;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden; 
  position: relative;

  cursor: pointer;
  font-size: 30px;
  color: #888;
  border-radius: 10px;
}

.slot span {
  font-size: 30px;
  color: #999;
}

.slot img {
  width: auto;
  height: auto; 
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  top: 0;
  left: 0;
  cursor: grab;
  
  display: block;
  margin: auto;
}

.slot:hover img {
  transform: scale(1.05);
}
</style>