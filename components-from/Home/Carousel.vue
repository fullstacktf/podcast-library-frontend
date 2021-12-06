<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'http://i3.ytimg.com/vi/CPr0tQvMHFM/hqdefault.jpg',
          },
          {
            src: 'http://i3.ytimg.com/vi/4_1dGp8FwPo/hqdefault.jpg',
          },
          {
            src: 'https://www.youtube.com/watch?v=0ux0QmPWQ_I',
          },
          {
            src: 'http://i3.ytimg.com/vi/WDqXWA5pBUE/hqdefault.jpg',
          },
        ],
      }
    },
  }
</script>