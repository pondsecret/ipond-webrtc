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
            <!-- <v-img :src="users.src" ></v-img> -->
            <v-avatar
            color="blue lighten-3">ICS</v-avatar>
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
          id="list-group">
            <!-- <v-list-item
            :color="colors.text"
            v-for="menu in menus"
            :key="menu.title">
              <v-list-item-icon class="my-6" >
                <v-icon >{{menu.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><h3>{{menu.title}}</h3></v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->
            
            <v-list-item 
            :color="colors.text"
            v-for="option, index in attach.streamList.options"
            :key="option.id"
            @click="start(index)">
              <v-list-item-icon class="my-6">
                <v-icon>mdi-quadcopter</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title><h3>{{ option.description }}</h3></v-list-item-title>
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
        <video id="player"  :srcObject.prop="attach.remote.stream"  playsinline autoplay loop ></video>

        <!-- Video Overlat record button -->
        <v-overlay
        absolute
        opacity="0"
        style="height:25px ; width:60px; left:94%; top:88%"
        :dark="False">
          <v-tooltip top >
            <template v-slot:activator="{on}">
              <v-btn
              rounded  
              v-on="on"
              style="opacity:0.9"
              @click="toggleRecord">
              <v-snackbar
              v-model="snackbar"
              app
              timeout="2000"
              top
              light
              color="success"
              content-class="d-flex justify-center"
              >
                {{!recording ? 'Stop Recording Stream!' : 'Recording Stream'}}
              </v-snackbar>
                <span class="text-h5">{{recording ? ' 00:00 ' : null}}</span>
                <v-icon v-if="recording === false" color="error">mdi-radiobox-marked</v-icon>
                <v-icon v-else color="error" class="ml-4">mdi-stop</v-icon>
              </v-btn>

              <v-snackbar
              v-model="h_snackbar"
              app
              timeout="20000"
              centered
              light
              color="light-blue darken-1"
              content-class="d-flex justify-center"
              >
                {{hangup ? 'Hanging up the Stream!' : 'Preparing incoming Stream'}}
              </v-snackbar>
            </template>
            <span v-if="recording === false">Start Record Video</span>
            <span  v-else >Stop Recording</span>
          </v-tooltip>

        </v-overlay>

      </v-card>
      <!-- Video field -->
      
    </v-card>

  </v-container>
</template>

<script>
import ImageGallery from '@/components/ImageGallery.vue'
import UserProfile from '@/components/UserProfile.vue';
import { Janus } from 'janus-gateway'

// webRTC server location
let JANUS_URL = 'https://34.143.225.243:8089/janus'
if(window.location.protocol === 'http:'){
   JANUS_URL = 'http://34.143.225.243:8088/janus'
}

export default {
    name: "StreamingVideo",
    data: () => {
        return {
            localVideo: document.getElementById('myVideo'),
            chunks: [],
            hangup: false,
            mediaRecorder: null,
            h_snackbar: false,
            vid_src: null,
            snackbar: false,
            recording: false,
            False : false,
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
              name: "ICS Team",
              email: "icsco.dev@gmail.com",
              src:  "https://randomuser.me/api/portraits/men/85.jpg"
            },
            attach:{
              plugin: null,
              message: {
                status: null
              },
              streamList: {
                selected: null,
                options: []
              },
              remote: {
                video: 0,
                track: {},
                stream: null,
              }
            },
            janusError: null
        };
    },
    mounted() {
      Janus.init({
        debug: true,
        dependencies: Janus.useDefaultDependencies(),
        callback: ()=>{
          // console.log("Connecting to Janus api with server ",JANUS_URL)
          this.connect(JANUS_URL)
        }
      })
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
        },
        toggleRecord(){
          this.recording = !this.recording
          this.snackbar = true
          if(this.recording  === true){
            this.startRecord()
          }else{
            console.log('Stop')
          }
        },

        // Janus Implement
        // Connect to Janus
        connect(server){
          this.janus = new Janus({server,
            // Call on success callback
            success: ()=>{
              console.log("Connected")
              this.attachPlugin()
            },
            // Call on error callback
            error: (err)=>{
              console.log("Error establish connection to Janus server! Please check the server status.")
              this.onError("Failed to connect Janus server ",err)
            },
            destroyed: ()=>{
              console.log("Destroyed")
            }
          })
        },

        // Attach Plugin
        attachPlugin() {
          this.janus.attach({
            plugin:   "janus.plugin.streaming",
            opaqueId: 'thisisopaqueid',
            // on Attach plugin success
            success: (pluginHandle) => {
              this.attach.plugin = pluginHandle
              console.log("Attach Plugin Success")
              this.updateStreamsList()
            },
            // on Attach plugin error
            error: (err) => {
              this.onError("Error attaching plugin...! ",err)
            },
            iceState: (state) => {
              console.log("ICE state changed to ",state)
            },
            webrtcState: (on) => {
              console.log("Janus says our WebRTC PeerConnection is " + (on ? "up" : "down") + " now")
            },
            slowLink: (uplink, lost, mid) => {
              console.log("Janus reports problems " + (uplink ? "sending" : "receiving") +
                        " packets on mid " + mid + " (" + lost + " lost packets)")
            },
            onmessage: (msg, jsep) => {
              // Get message 
              let result = msg.result
              if(result){
                if(result.status){
                  this.attach.message.status = result.status
                }
              }
              // Handle error message
              else if(msg.error){
                this.onError(msg.error)
                return;
              }

              // Handle jsep
              if(jsep){
                Janus.debug("Handling SDP as Well.... ",jsep)
                let stereo = (jsep.sdp.indexOf("stereo=1") !== -1 )
                this.attach.plugin.createAnswer({
                  jsep: jsep,
                  media: {
                    audioSend: false,
                    videoSend: false,
                    data:      true,
                  },
                  customizeSdp: (jsep) => {
                    if(stereo && jsep.sdp.indexOf("stereo=1") == -1 ) {
                      jsep.sdp = jsep.sdp.replace("useinbandfec=1", "useinbandfec=1;stereo=1")
                    }
                  },
                  success: (jsep) => {
                    Janus.debug("Got SDP!", jsep)
                    let body = { request: "start"}
                    this.attach.plugin.send({
                      message: body,
                      jsep: jsep
                    })
                  },
                  error: (error) => {
                    this.onError("WebRTC Error: ",error)
                    alert("WebRTC error... " , error)
                  }
                })
              }
            },
            onremotetrack: (track , mid, on) => {
              Janus.debug("Remote track (mid=" + mid + ") " + (on ? "added" : "removed") + ":", track)
              // New track was added 
              if(track.kind === "video") {
                this.attach.remote.video += 1 
                this.attach.remote.stream = new MediaStream()
                this.attach.remote.stream.addTrack(track.clone())
                this.attach.remote.track.mid = this.attach.remote.stream
                Janus.log("Created remote video stream:", this.attach.remote.stream)
              }
            },

            oncleanup: () => {
              this.onCleanupCall()
            }
          })
        },
      // Stream List updater
      updateStreamsList() {
        this.attach.plugin.send ({
          message: { request: "list"},
          success: (result) => {
            if(!result) {
              this.onError("Got no response to our query for available streams.")
            }
            console.log("Updating StreamList....",result)
            this.attach.streamList.options = result.list
            // if (result.list.length) {
            //   this.attach.streamList.selected = this.attach.streamList.options[1].id
            // }
          }
        })
      },
      // stop stream
      stop() {
        
        this.h_snackbar = true
        this.attach.plugin.send({ message: { request: "stop" } } )
      },
      // start stream
      start(idx){
        // this.stop()
        if(this.attach.remote.stream !== null){
          this.stop()
        }
        // this.attach.streamList.selected = this.attach.streamList.options[index].id
        
        this.h_snackbar = true
        this.attach.streamList.selected = this.attach.streamList.options[idx].id
        this.vid_src = this.attach.remote.stream
        this.attach.plugin.send({ message: { request: "watch", id: this.attach.streamList.selected } })
      },
      // Clean up parameter
      onCleanupCall(){
        Janus.log("Cleaning up.....!")
        this.attach.remote.stream = null
        this.attach.remote.video = 0
        this.attach.remote.track = {}
        this.attach.message.status = null
        this.janusError = null
      },

      // Handle Janus Errors
      onError(msg, err='') {
        Janus.error(msg, err)
        this.janusError = msg + err
        alert(this.janusError, function(){
          window.location.reload()
        })
      },
      // Record zone
      async startRecord() {
        const options = {
            videoBitsPerSecond : 2500000,
            mimeType : 'video/webm;codecs=h264'
          }
        if(!MediaRecorder.isTypeSupported(options.mimeType)){
          alert('mimeType: '+ options.mimeType + " Not supported")
          return ;
        }

        // get MediaStream Object 
        const mediaStreamObj = this.attach.remote.stream
        if(!mediaStreamObj){
          alert("Cannot initialize mediaStreamObj")
          return
        }

        // create MediaRecorder Object 
        this.mediaRecorder = new MediaRecorder(mediaStreamObj, options)
        console.log(this.mediaRecorder)

        this.setListener()
      },

      
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