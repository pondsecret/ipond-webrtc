<template>
  <v-card width="100%" height="100%"
  :img="assets.background" 
  class="d-flex justify-center align-center">
        <v-card height="790" max-width="1280" 
        width="1280"
        class="rounded-xl card-root"
        color="transparent">
        <v-row no-gutters justify="center">
            <v-col>
                <v-card outlined  class="d-flex justify-center"    color="transparent">
                    <img :src="assets.grouped_logo" class="grouped-img">
                </v-card>
                <div class="text-center">
                    <span class=" white--text  h5-text ">Welcome to Drone Security</span>
                </div>
                <div class="text-center mt-3">
                    <span class="white--text h5-text">Video streaming platform</span>
                </div>
                <div class="text-center" style="margin-top:72px;">
                    <span class="white--text " style="font-family:'Poppins'; letter-spacing: 0.9px; font-size: 20px;">Don't have an account?</span>
                </div>
                <div class="text-center mt-2">
                    <v-btn plain class="py-12 px-0">
                        <img :src="assets.signup_btn">
                    </v-btn>
                </div>
            </v-col>

            <v-col>
                <v-card outlined  class="d-flex" color="transparent">
                    Column2
                </v-card>
            </v-col>
        </v-row>
        </v-card>

    <v-overlay
    fixed
    opacity="0"
    style="width:100%; height:14%; top:86%; "
    class="d-flex justify-start">
        <span class="ml-13">ICS Security Drone v0.0.1</span>
    </v-overlay>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
            assets:{
                background: require('../assets/background.png'),
                grouped_logo: require('../assets/grouped_logo.png'),
                signup_btn: require('../assets/signup_btn.svg')
            }
        }
    },
}
</script>

<style>
.card-root {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(79, 128, 173, 0.1) 100%);
    backdrop-filter: blur(10px);
}

.grouped-img {
    margin-top:71px ;
}
.h5-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: 0.3px;

}
</style>