<template>
  <div >
    <CommunicationContent />
    <p>{{param}}님 현재 페이지는 개발 진행중입니다. ^_^@@</p>
  </div>
</template>

<script>

import CommunicationContent from '@/components/comm/Communication.vue'

export default {
  name: 'Parameter',
  components: {
    // HelloWorld,
    // CommunicationContent: () => import('@/components/comm/Communication.vue'),
    CommunicationContent
  },
  computed: {
      param: function () {
          return this.$route.params;
      }
  }
}
</script>