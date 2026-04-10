import Home from '@/App.vue'

const router = createRouter({
  history: createWebHistory('/lmbr_InsangTest/'),
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})