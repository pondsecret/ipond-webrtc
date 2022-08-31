<template>
  <v-app>
    <v-main>
        <v-container fill-height fluid >
            <v-row align="center" justify="center">
                <v-col cols="12" md="6" sm="6">
                    <v-card class="elevation-6 rounded-lg" >
                        <v-row no-gutters>
                            <v-col cols="6" md="6" sm="6" class="amber lighten-1  rounded-lg rounded-r-0">
                               
                            </v-col>
                            <v-divider vertical>
                            </v-divider>
                            <v-col md="6" sm="6">
                               <div class="d-flex justify-center my-10">
                                <v-img
                                :src="icons.logo"
                                max-width="56">
                                </v-img>
                                <h2 class="ml-4 mt-3">ICS AI Streaming</h2>
                               </div>
                               
                               <v-form
                                ref="form"
                                lazy-validation
                                class=" ma-6">
                                    <v-text-field
                                    :rules="emailRules"
                                    label="E-mail"
                                    outlined
                                    required>
                                    </v-text-field>
                                    <v-text-field
                                    type="password"
                                    label="Password"
                                    :rules="passwordRules"
                                    outlined
                                    required>
                                    </v-text-field>
                                    <v-container class="d-flex justify-space-between">
                                        <div>
                                            <input type="checkbox" >
                                            <label class="text-body ml-2">Remember me</label>
                                        </div>
                                        <div>
                                            <a href="">forget password?</a>
                                        </div>
                                    </v-container>
                                    <v-btn color="primary" width="100%" class="mt-2" @click.prevent="gotoStream()">Sign in</v-btn>
                                    <v-container class="d-flex justify-space-between pa-0">
                                        <v-btn class="mt-4"
                                        outlined
                                        width="48%">
                                        <v-img
                                        :src="icons.google"
                                        max-width="16"
                                        class="mr-1"></v-img>
                                        Google Account
                                        </v-btn>
                                        <v-btn class="mt-4"
                                        outlined
                                        width="48%">
                                            Register Now
                                        </v-btn>
                                    </v-container>
                               </v-form>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>    
    </v-main>
  </v-app>
</template>

<script>
export default{
    data:() => ({
        icons: {
            logo: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-ai-artificial-intelligence-kiranshastry-lineal-color-kiranshastry-6.png",
            google: "https://gitlab.com/assets/auth_buttons/google_64-9ab7462cd2115e11f80171018d8c39bd493fc375e83202fbb6d37a487ad01908.png"
        },
        emailRules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
      passwordRules:[
        value => !!value || 'Required'
      ]
    }),
    methods: {
        gotoStream() {
            this.$router.push('/streaming')
        }
    }
}
</script>
