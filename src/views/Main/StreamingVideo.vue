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
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>
            <h3 style="color:#2F75BB">Some Man</h3>
            <h5 class="pt-2">example@email.com</h5>
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
            
          </v-list-item-group>
        </v-list>

        <!-- List menus -->
      </v-navigation-drawer>
      <!-- main menu drawer -->

      <!-- Video field -->
      <iframe :width="vidWidth" height="100%"  src="https://www.youtube.com/embed/gQlMMD8auMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        
      </iframe>
      <!-- Video field -->
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: 'StreamingVideo',
  data: () => {
    return {
      vidWidth:1920-60,
      mini: true,
      colors:{
        background: '#fff',
        text: '#2F75BB',
        vid_bg: '#322d31'
      },
      
      menus:[
        {title: 'Drone01', icon: 'mdi-quadcopter'},
        {title: 'Drone02', icon: 'mdi-quadcopter'},
        {title: 'Drone03', icon: 'mdi-quadcopter'},
        {title: 'Gallery', icon: 'mdi-image-multiple'},
        {title: 'My Account', icon: 'mdi-account'},
      ]
    }
  },
  watch:{
    vidWidth(newVidWidth, oldVidWidth){
      if(newVidWidth != oldVidWidth){
        this.cal_video_width()
      }
      this.cal_video_width()
    }
  },
  methods:{
    cal_video_width(){
      console.log('Nav width ',this.$refs.navDrawer.clientWidth)
      return  this.vidWidth = this.$refs.main.clientWidth - this.$refs.navDrawer.clientWidth
    }
  }
}
</script>

<style>

</style>