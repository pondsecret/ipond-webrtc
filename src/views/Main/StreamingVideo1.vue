<template>
  <v-container fill-height fluid class="ma-0 pa-0 d-flex" width="100%">
    <v-app-bar
    :color="colors.appBar"
    app
    >
      <v-row no-glutters>
        <!-- icon and logo -->
        <v-col class="d-flex align-center">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <img :src="logo" width="90" class="ml-6" >
        </v-col>
        
        <!-- Current drone -->
        <v-col class="d-flex justify-center align-center">
          <v-card rounded-pill flat  >
            <v-app-bar-title class="pa-2 px-8" ><h3 style="color:midnightblue">{{selectedMenu}}</h3></v-app-bar-title>
          </v-card>
        </v-col>

        <!-- Account and Logout -->
        <v-col class="d-flex justify-end align-center">
          <v-menu
          bottom
          min-width="200px"
          rounded
          offset-y
          >
          <template v-slot:activator="{ on }">
            <v-btn
            icon
            x-large
            v-on="on"
            class="mr-2">
            
              <v-avatar
              color="#ffdd94"
              size="48">IP</v-avatar>
            </v-btn>
          </template>

          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar
                color="#ffdd94"
                size="56">
                IP
                </v-avatar>

                <h3 class="my-4">{{Users.name}}</h3>
                <p class="text-subtitle-1">{{Users.email}}</p>
                <v-divider class="my-3"></v-divider>

                <v-btn
                rounded
                depressed
                text
                >
                  <v-icon left>mdi-pencil</v-icon>
                  Edit Profile
                </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn 
                depressed
                rounded
                color="error"
                text
                @click.prevent="gotoLogin">
                  <v-icon left>mdi-logout</v-icon>
                  Logout
                </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
          </v-menu>
        </v-col>
        
      </v-row>

      
    </v-app-bar>
    <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    >
      <v-list  two-line dense nav>
          <v-list-item-group
          >
            <v-list-item
            :color="colors.text"
            v-for="menu in menus"
            :key="menu.title"
            @click="getSelected(menu)">
              <v-list-item-icon class="my-6" >
                <v-icon >{{menu.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><h3 >{{menu.title}}</h3></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            
            <v-list-item
            :color="colors.text"
            @click.prevent="showGallery">
              <v-list-item-icon class="my-6">
                <v-icon>mdi-image-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><h3>Gallery</h3></v-list-item-title>
              </v-list-item-content>
              
              <!-- Image Gallery -->
              <ImageGallery 
              :showDialog="openGallery"
              @closeGallery="setOpenGallery"
              />
              <!-- Image Gallery -->

            </v-list-item>
          </v-list-item-group>
        </v-list>

    </v-navigation-drawer>
    <iframe width="100%" height="100%"  src="https://www.youtube.com/embed/gQlMMD8auMs"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>

  </v-container>
</template>

<script>
import Logo from '../../assets/logo-no-textbg-svg.svg'
import ImageGallery from '@/components/ImageGallery.vue';
// import ImageGallery from '../../components/ImageGallery.vue'


export default {
    name: "StreamingVideo1",
    data() {
        return {
            openGallery: false,
            selectedMenu: "",
            drawer: false,
            logo: Logo,
            colors: {
                appBar: "#fff",
                text: "#2F75BB",
            },
            Users: {
                name: "iPOND",
                email: "ipond@ipond.com",
            },
            menus: [
                { title: "Drone01", icon: "mdi-quadcopter" },
                { title: "Drone02", icon: "mdi-quadcopter" },
                { title: "Drone03", icon: "mdi-quadcopter" },
            ]
        };
    },
    methods: {
        gotoLogin() {
            this.$router.push("/");
        },
        getSelected(selected) {
            this.selectedMenu = selected.title;
            this.drawer = false;
            console.log(selected);
        },
        showGallery() {
            this.openGallery = true;
            console.log(this.openGallery)
            return this.openGallery;
        },
        setOpenGallery(value){
          this.openGallery = value
        }
    },
    components: { ImageGallery }
}
</script>

<style>

</style>