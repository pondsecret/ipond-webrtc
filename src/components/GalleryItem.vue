<template>
  <v-card color="gray" width="100%"  flat  class="_root" >
    <v-card width="100%" flat >
        <v-row class="mx-6 five-cols" no-gutters>
            <v-col
            v-for="img in imgs" :key="img"
             cols="sm">
                <ImageOverlay   
                :imgSrc="img"
                />
            </v-col>
        </v-row>
    </v-card>
  </v-card>
</template>

<script>

import ImageOverlay from './ImageOverlay.vue'



export default {
    name: "GalleryItem",
    data() {
        return {
            i1: require('../assets/20220918-105910-071206.jpg'),
            i2: require('../assets/20220918-110016-463352.jpg'),
            imgs: [require('../assets/20220918-105910-071206.jpg'),require('../assets/20220918-110016-463352.jpg')],
        };
    },
    methods:{
        
    },
    
    components: { ImageOverlay }
}
</script>

<style>
.five-cols {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
</style>