<template>
    <v-container class="ma-0 pa-0" fill-height fluid width="100%">
        <!-- Background -->
        <v-card width="100%" height="100%" tile class="d-flex justify-center" :color="colors.vid_bg">
             <video id="player" src="https://wiki.yoctoproject.org/wiki/images/a/a6/Big-buck-bunny_trailer.webm"  autoplay loop ></video>
            
            <!-- menu btn -->
            <v-overlay
            opacity="0"
            style="width:6%; height:6%;"
            class="mx-6 mt-1 mb-0"
            dark="false"
            >
                <v-btn rounded style="opacity:0.8;" 
                @click.stop="toggle = !toggle"
                absolute
                class="d-flex align-center">
                    <v-icon>mdi-menu</v-icon>
                    <span>
                        <v-icon class="mx-4 " v-show="selected_icon != null ? true : false">{{selected_icon}}</v-icon>
                        <v-text class="text-subtitle-1 font-weight-bold">{{selected}}</v-text>
                    </span>
                </v-btn>
            </v-overlay>

            <v-overlay
            opacity="0"
            style="width:15%; height:6%; top:35%"
            class="my-16 mx-6 justify-start"
            dark="false"
            v-show="toggle"
            absolute
            z-index="4">
                <v-card
                class="d-flex-row scroll "
                max-width="300"
                max-height="600"
                style="opacity:0.95">
                    <v-list-item>
                        <v-list-item-avatar size="64" class="ma-4">
                            <v-img :src="users.src" ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-title>
                            <h3 style="color:#2F75BB">{{users.name}}</h3>
                            <h4 class="pt-2">{{users.email}}</h4>
                        </v-list-item-title>
                    </v-list-item>

                    <v-divider class="my-4 mx-2"></v-divider>

                    <v-list dense  >
                        <v-subheader class="mt-n4 text-h6 mb-2 ml-3">
                            Registered Drones
                        </v-subheader>
                        <v-list-item-grop >
                            <v-list-item
                            v-for="menu in menus"
                            :key="menu.title">
                            <v-btn depressed class="d-flex justify-start mb-4 py-6" width="100%" color="#8AC5FE"
                            @click="getSelected(menu)">
                                <v-icon color="#fff">{{menu.icon}}</v-icon>
                                <v-text class="mx-6 white--text text-subtitle-1 font-weight-bold" >{{menu.title}}</v-text>
                            </v-btn>
                            </v-list-item>

                            <v-list-item >
                                <v-btn depressed class="d-flex justify-start mb-4 py-6" width="100%" color="#8AC5FE"
                                @click.prevent="showGallery">
                                    <v-icon color="#fff">mdi-image-multiple</v-icon>
                                    <v-text class="mx-6 white--text text-subtitle-1 font-weight-bold" >Gallery</v-text>
                                </v-btn>

                                <!-- Gallery component -->
                                    <ImageGallery 
                                    :showDialog="openGallery"
                                    @closeGallery="setOpenGallery"
                                    />
                            </v-list-item>

                            <!-- User Profile -->
                            <v-list-item>
                                <v-btn depressed class="d-flex justify-start mb-4 py-6" width="100%" color="#8AC5FE"
                                    @click.prevent="showProfile">
                                    <v-icon color="#fff">mdi-account</v-icon>
                                    <v-text class="mx-6 white--text text-subtitle-1 font-weight-bold" >My Account</v-text>
                                </v-btn>
                                    <!-- User Profile component -->
                                    <UserProfile 
                                    :showProfile="openProfile"
                                    :username="users.name"
                                    :useremail="users.email"
                                    :userimgsrc="users.src"
                                    @closeUserProfile="setOpenProfile"
                                    />
                            </v-list-item>
                        </v-list-item-grop>
                    </v-list>

                </v-card>
                
            </v-overlay>

            <v-overlay
            absolute
            opacity="0"
            style="height:5%; width:5%; left:94%; top:93%"
            dark="false">
                <v-btn
                rounded
                style="opacity:0.8"
                @click="toggleFullscreen('player')">
                    <v-icon class="text-h4">mdi-fullscreen</v-icon>
                </v-btn>

            </v-overlay>
        </v-card>
    </v-container>
</template>

<script>
import ImageGallery from '@/components/ImageGallery.vue'
import UserProfile from '@/components/UserProfile.vue';

export default {
    name: "StreamingVideo2",
    data() {
        return {
            openProfile: false,
            openGallery: false,
            toggle:true,
            selected_icon: null,
            selected: '',
            colors: {
                vid_bg: "#322d31"
            },
            users:{
              name: "Some Mans",
              email: "example@email.com",
              src:  "https://randomuser.me/api/portraits/men/85.jpg"
            },
            menus: [
                { title: "Drone01", icon: "mdi-quadcopter" },
                { title: "Drone02", icon: "mdi-quadcopter" },
                { title: "Drone03", icon: "mdi-quadcopter" },
            ],
        }
    },
    methods: {
        getSelected(select){
            this.selected = select.title
            this.selected_icon = select.icon
            this.setToggle()
        },
        setToggle(){
            this.toggle = false
        },
        showGallery() {
            this.openGallery = true;
            return this.openGallery;
        },
        setOpenGallery(value){
          this.openGallery = value
        },
        showProfile(){
          this.openProfile = true;
          return this.openProfile
        },
        setOpenProfile(value){
          this.openProfile = value
        },
        toggleFullscreen(id){
            let element = document.getElementById(id)
            if(element.mozRequestFullScreen){
                element.mozRequestFullScreen()
            }else if(element.webkitRequestFullScreen){
                element.webkitRequestFullScreen()
            }
        }
    },
    components: { ImageGallery, UserProfile }
}
</script>

<style>
.scroll {
   overflow-y: scroll;
}
::-webkit-scrollbar{
    width:2px;
}
::-webkit-scrollbar-track {
	
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
/* .inner-container {
    display: inline-block;
    position: relative;
    width: 100%;
    height:100%;
}
.video-overlay {
    position: absolute;
    left: 0px;
    top: 0px;
    margin: 10px;
    padding: 5px 5px;
    font-size: 20px;
    font-family: Helvetica;
    color: #FFF;
    z-index:999;
}
video {
    width: 100%;
    height: 100%;
    z-index: -1;
} */
</style>