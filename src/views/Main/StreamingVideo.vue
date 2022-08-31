<template>
  <v-container fill-height fluid class="pa-0 ma-0 " ref="main" width="100%">
    <v-card width="100%" height="100%" class="d-flex" :color="colors.vid_bg">
        <!-- main menu drawer -->
      <v-navigation-drawer
      :color="colors.background"
      :mini-variant.sync="mini"
      mini-variant-width="56"
      clipped
      app
      ref="navDrawer"
      width="300"
      permanent
      >

        <!-- List menus -->
        <v-list-item class="px-2 my-4">
          <v-list-item-avatar>
            <v-img :src="users.src" ></v-img>
          </v-list-item-avatar>

          <v-list-item-title>
            <h3 style="color:#2F75BB">{{users.name}}</h3>
            <h5 class="pt-2">{{users.email}}</h5>
          </v-list-item-title>

          <v-btn
          icon
          @click.stop="mini = !mini"
          >
          <v-icon :color="colors.text">mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        
        <v-divider :color="colors.text" class="my-4"></v-divider>

        <v-list  two-line dense nav>
          <v-list-item-group
          >
            <v-list-item
            :color="colors.text"
            v-for="menu in menus"
            :key="menu.title">
              <v-list-item-icon class="my-6" >
                <v-icon >{{menu.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><h3>{{menu.title}}</h3></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            
            <!-- Gallery -->
            <v-list-item
            @click.prevent="showGallery">
              <v-list-item-icon class="my-6">
                <v-icon>mdi-image-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><h3>Gallery</h3></v-list-item-title>
              </v-list-item-content>

              <!-- Gallery component -->
              <ImageGallery 
              :showDialog="openGallery"
              @closeGallery="setOpenGallery"
              />
            </v-list-item>

            <!-- User Profile -->
            <v-list-item
            @click.prevent="showProfile">
              <v-list-item-icon class="my-6">
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><h3>My Account</h3></v-list-item-title>
              </v-list-item-content>

              <!-- User Profile component -->
              <UserProfile 
              :showProfile="openProfile"
              :username="users.name"
              :useremail="users.email"
              :userimgsrc="users.src"
              @closeUserProfile="setOpenProfile"
              />
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <!-- List menus -->
      </v-navigation-drawer>
      <!-- main menu drawer -->

      <!-- Video field -->
      <v-card width="100%" height="100%" tile class="d-flex justify-center " :color="colors.vid_bg">
        <video id="player" src="https://wiki.yoctoproject.org/wiki/images/a/a6/Big-buck-bunny_trailer.webm"  autoplay loop ></video>

        <!-- Video Overlat record button -->


      </v-card>
      <!-- Video field -->
    </v-card>

  </v-container>
</template>

<script>
import ImageGallery from '@/components/ImageGallery.vue'
import UserProfile from '@/components/UserProfile.vue';
export default {
    name: "StreamingVideo",
    data: () => {
        return {
            openProfile: false,
            openGallery: false,
            mini: true,
            colors: {
                background: "#fff",
                text: "#2F75BB",
                vid_bg: "#322d31"
            },
            menus: [
                { title: "Drone01", icon: "mdi-quadcopter" },
                { title: "Drone02", icon: "mdi-quadcopter" },
                { title: "Drone03", icon: "mdi-quadcopter" },
            ],
            users:{
              name: "Some Mans",
              email: "example@email.com",
              src:  "https://randomuser.me/api/portraits/men/85.jpg"
            }
        };
    },
    
    methods: {
        
        showGallery() {
            this.openGallery = true;
            console.log(this.openGallery)
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
        }
    },
    
    components: { ImageGallery, UserProfile }
}
</script>

<style>
:-webkit-scrollbar{
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
</style>