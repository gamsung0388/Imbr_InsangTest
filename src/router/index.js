import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // 🔥 이걸로
  routes: [...]
})

export default router