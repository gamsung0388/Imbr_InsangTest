<template>
  <div class="row">
    <div class="profile">
      <img :src="profileImg" />
    </div>
    <ImageSlot />
    <ImageSlot />
  </div>
</template>

<script setup>
import ImageSlot from './ImageSlot.vue';
import harang from '@/assets/harang.png'
import dorang from '@/assets/dorang.png'
import hodot from '@/assets/hodot.png'

const props = defineProps({
  name: String
})

const imgMap = {
  '별하랑': harang,
  '바또랑': dorang,
  '홍호돋': hodot
}

const profileImg = imgMap[props.name]
  
</script>
<style scoped>

.row {
  display: grid;
  grid-template-columns: 220px 1fr 1fr;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
}

.profile {
  width: 220px;
  height: 220px;
  overflow: hidden;
}

.profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>