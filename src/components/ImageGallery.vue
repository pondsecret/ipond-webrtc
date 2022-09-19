<template>
  <v-dialog
      v-model="getShow"
      persistent
      width="86%"
    >
      <v-container fill-height fluid  class="d-flex justify-center ma-0 pa-0">
        <v-card width="100%" height="100%" class="rounded-lg">
          <div class="root">
            <div class="root-top" clip="true">
              <h2 class="text1">Photo Gallery</h2>
              <h3  class="label-text " style="position: absolute;
                        left: 70%;
                        margin-top: 21px;
                        margin-right:10px">Select Drone</h3>
              <div class="root-combobox">
                <v-combobox
                :items="dronesList.name"
                solo
                class="mt-2"
                :flat="true"
                label="Choose drone"
                >
                </v-combobox>
              </div>
              <button class="close-icon" @mouseover="hover = true" @mouseleave="hover = false" @click="closeGallery"> 
                <img v-if="hover === false" :src="assets.close">
                <img v-if="hover === true" :src="assets.close_hover">
              </button>
            </div>

            <div class="root-main">
                <GalleryItem  class="gallery" />
            </div>
          </div>

        </v-card>
      </v-container>
    </v-dialog>
</template>

<script>
import GalleryItem from './GalleryItem.vue'
import imgMockup from '../assets/scene00001.png'
export default {
    name: 'ImageGallery',
    props: {
      showDialog: {
        type: Boolean,
        required: true,
      },
      
    },
    data() {
      return {
        imgs: imgMockup,
        icons:{
          closeWindow: 'mdi-window-close'
        },
        dronesList: {
          name:['Serene X8', 'ICS Mavic Ent.']
        },
        assets:{
          drone: require('../assets/carbon_drone.svg'),
          close: require('../assets/close.png'),
          close_hover: require('../assets/close_hover.png')
        },
        hover: false,
        
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
      },
      closeHover(){
        this.hover = true
      },
      closeOut(){
        this.hover = false
      }
    },
    components: {GalleryItem}
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.text1{
  position: absolute;
  left: 85px;
  top: 14px;
}

.label-text{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 24px */

  letter-spacing: 0.15px;

  /* text / secondary */

  color: rgba(0, 0, 0, 0.54);
}



.root-main{
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left:70px;
  margin-right:70px;
  overflow: auto;
  height: 756px;
}

h2{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  /* identical to box height, or 36px */

  letter-spacing: 0.15px;

/* Meprakun/gray-1 */

  color: #F5F6F8;
}

.root-combobox{
  width:160px;
  height:64px;
  position: absolute;
  left: 78%;
  margin-left: 12px;
}

.root-top{
  height: 64px;
  background: #5999E5;
  
}

.close-icon{
  position: absolute;
  right:18px;
  top:15.34px;
}

.gallery{
  margin-bottom: 40px;
}

.root{
  height: 820px;
  color: #ffffff;
  border-radius: 14px;
  overflow:hidden;
}
</style>
<!-- <v-row no-gutters>
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
          </v-row> -->