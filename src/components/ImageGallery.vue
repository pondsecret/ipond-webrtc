<template>
  <v-dialog
      v-model="getShow"
      max-width="1400"
      min-height="300"
      color="#fff"
    >
      <v-container fill-height fluid class="d-flex ma-0 pa-0">
        <v-card width="100%" tile >
          <v-row no-gutters>
            <v-col
            cols="4"
            md="2">
              <v-card-title class="text-h4 font-weight-bold justify-center" >Gallery</v-card-title>
            </v-col>

            <v-col 
            >
              <v-btn class="my-4 pa-0 " absolute right icon @click="closeGallery" color="error">
                <v-icon class="text-h4">{{icons.closeWindow}}</v-icon>
              </v-btn>
            </v-col>
           
          </v-row>
          <v-divider class="my-4"></v-divider>
          <v-row no-gutters>
            <v-col
            cols="4"
            md="2"
            >
              <v-card width="100%" flat>
                <v-list nav dense>
                  <v-list-item-group>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-image-multiple</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title class="text-subtitle-1">Images</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-video</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title class="text-subtitle-1">Videos</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-col>
            <v-divider vertical class="mx-1"> </v-divider>
            <v-col
            >
              <v-card width="100%" flat >
                <v-row class="mx-6" no-gutters>
                  <v-card width="240" height="160" flat class="ma-4" v-for="i in 24" :key="i" clipped>
                    <v-img :src="imgs">
                    </v-img>
                    <v-card-title class="text-body-1 pa-0 my-2">{{imgs}}</v-card-title>
                  </v-card>
                </v-row>
              </v-card>
            </v-col>
          </v-row>

        </v-card>
      </v-container>
    </v-dialog>
</template>

<script>
import imgMockup from '../assets/scene00001.png'
export default {
    name: 'ImageGallery',
    props: {
      showDialog: {
        type: Boolean,
        required: true,
      }
    },
    data() {
      return {
        imgs: imgMockup,
        icons:{
          closeWindow: 'mdi-window-close'
        },
      }
    },
    computed:{
      getShow(){
        let localShow = this.showDialog
        return localShow
      }
    },
    methods: {
      closeGallery(){
        this.$emit('closeGallery',false)
      }
    },
    
}
</script>

<style>

</style>