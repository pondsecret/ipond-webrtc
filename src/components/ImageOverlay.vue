<template>
    <v-card width="240" height="160" flat class="mx-4 my-8"  clipped
            @mouseover="hovering = true" @mouseleave="hovering = false">
                <v-img :src="getImgSrc" >
                </v-img>
                <v-fade-transition>
                <v-overlay
                        v-if="hovering === true"
                        absolute
                        color="transparent"
                    >
                        <button @click="showImg"><img :src="zoom" ></button>
                    </v-overlay>
                </v-fade-transition>
                <v-card-title class="text-body-1 pa-0 my-2">{{getImgSrc}}</v-card-title>
                
                
                <v-dialog
                v-model="show"
                persistent
                width="60%">

                    <v-container fill-height fluid class="ma-0 pa-0">
                        <v-card width="100%" height="100%" class="ma-0 pa-0">
                            <div class="root-dialog">
                                <img :src="getImgSrc">
                                <button class="close-icon" @mouseover="hoverclose = true" @mouseleave="hoverclose = false" 
                                @click="closeImg"> 
                                    <img v-if="hoverclose === false" :src="assets.close">
                                    <img v-if="hoverclose === true" :src="assets.close_hover">
                                </button>
                            </div>
                        </v-card>
                    </v-container>
                </v-dialog>

            </v-card>
</template>

<script>
export default {
    name: 'ImageOverlay',
    data() {
        return {
            zoom: require("../assets/zoom-in.png"),
            hovering: false,
            show: false,
            hoverclose: false, 
            assets:{
                close: require('../assets/close.png'),
                close_hover: require('../assets/close_hover.png')
            }
        }
    },
    props:{
        imgSrc: {
            type: String,
            required: true,
        }
    },
    computed:{
        getImgSrc(){
            let localImgSrc = this.imgSrc
            return localImgSrc
        }
    },
    methods:{
        showImg(){
            this.show = true
        },
        closeImg(){
            this.show = false
        }
    }
}
</script>

<style>
.root-dialog{
    height: 640px;
    color: #ffffff;
    border-radius: 14px;
    overflow:hidden;
}
</style>