<template>
  <div >
    <CommunicationContent />
    <p>현재 페이지는 개발 진행중입니다.</p>
  </div>
</template>

<script>

import CommunicationContent from '@/components/comm/Communication.vue'

export default {
  name: 'Communication',
  components: {
    // HelloWorld,
    // CommunicationContent: () => import('@/components/comm/Communication.vue'),
    CommunicationContent
  },
}
</script>