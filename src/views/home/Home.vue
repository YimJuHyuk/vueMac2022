<template>
  <div >
    <HomeContent />
  </div>
</template>

<script>

import HomeContent from '@/components/home/Home.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    // HomeContent: () => import("@/components/home/Home.vue")
    HomeContent
  },
}
</script>