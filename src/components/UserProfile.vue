<template>
  <v-dialog
  v-model="getShow"
  persistent
  max-width="720"
  >
    <v-container fluid class="d-flex ma-0 pa-0">
        <v-card width="100%" tile>
            <v-row no-gutters>
                <v-col>
                    <div class="d-flex">
                        <v-card-title class="text-h4 font-weight-bold" id="card-title">
                            Edit Profile
                        </v-card-title>
                        <v-icon color="dimgray">mdi-pencil</v-icon>
                    </div>
                    <v-divider></v-divider>
                    <div class="ma-4 ">
                        <v-form
                        lazy-validation>
                            <v-text-field
                            :label="username"></v-text-field>

                            <v-text-field
                            :label="useremail"></v-text-field>

                            <v-btn color="green accent-2 " >Browse Image</v-btn>
                            <div class="my-4 d-flex justify-space-between">
                                <v-btn color="primary"> Save </v-btn>
                            
                                <v-btn color="error"
                                @click.prevent="closeUserProfile"
                                >Close</v-btn>
                                
                            </div>
                        </v-form>
                    </div>
                    
                </v-col>
                <v-divider vertical class="mx-2"></v-divider>
                <v-col
                cols="6"
                md="4"
                >   
                    <div class="d-flex justify-center pt-6">
                        <v-avatar
                        size="90">
                            <v-img :src="userimgsrc"></v-img>
                        </v-avatar>
                    </div>
                    <div class="d-flex justify-center mb-n4">
                        <v-card-title>
                            {{username}}
                        </v-card-title>
                    </div>
                    <div class="d-flex justify-center ma-0 pa-0">
                        <v-card-title class="text-subtitle-1 pa-0 mb-4">
                            {{useremail}}
                        </v-card-title>
                    </div>
                    
                </v-col>

            </v-row>
        </v-card>
    </v-container>
  </v-dialog>
</template>

<script>


export default {
    name: 'UserProfile',
    props:{
        showProfile:{
            type: Boolean,
            default: false,
            required: true
        },
        username: {
            type: String,
            default: '',
            required: true
        },
        useremail: {
            type: String,
            required: true
        },
        userimgsrc: {
            type: String,
            required: true
        }
    },
    computed:{
        getShow(){
            let localShow = this.showProfile
            return localShow
        }
    },
    methods: {
        closeUserProfile(){
            this.$emit('closeUserProfile',false)
        }
    },
}
</script>

<style>
#card-title {
    color:dimgray;
}
</style>