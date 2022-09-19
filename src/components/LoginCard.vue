<template>
  <v-card class="root-card rounded-xl" width="560" max-width="560" max-height="660">
    <v-row no-gutters justify="center">
      <v-col>
        <div class="text-center mt-16">
          <h3>User Login</h3>
        </div>
        <div class="text-center mt-6">
          <h4>Enter your details to get sign in</h4>
          <h4 class="mt-4">to your account</h4>
        </div>
        <div class="text-center mt-12">
          <form action="">
            <input type="email" class="email-input"
            placeholder="Enter Email">
            <img :src="assets.circle" class="circle">

            <input type="password" 
            placeholder="Password"
            class="password-input mt-4">
            <img :src="assets.hide_eye" class="hide_eye">
          </form>
        </div>
        <div class="mt-4  mr-2" style="margin-left:72px">
          <h4>Forget password? <span><a href="" style="color:black; font-weight:600">Reset Now</a></span></h4>
        </div>
        <div class="text-center btn-ctn" >
          <button class="signin-btn" @click.prevent="gotoStream()">Sign in</button>
        </div>

        <div class="d-flex flex-row justify-center">
          <img :src="assets.line" class="line1">
          <h4>Or</h4>
          <img :src="assets.line" class="line1">
        </div>

        <div class="text-center btn-ctn" >
          <button class="google-btn">
            <img :src="assets.google" class="google">
            Sign in with Google</button>
        </div>
        <div class="text-center mb-10">
          <h4 class="team-text">Drone security team 2022 | by iCreativeSystems.co.,Ltd</h4>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
    name: 'LoginCard',
    data() {
      return {
        assets:{
          hide_eye: require('../assets/hide_eye.png'),
          circle: require('../assets/circle.png'),
          line: require('../assets/Line.png'),
          google: require('../assets/google.png')
        }
      }
    },
    methods: {
        gotoStream() {
            this.$router.push('/streaming')
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');


.team-text{
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
}
.google{
  margin-right: 22px;

}
.google-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width:100%;
  background: #5999E5;
  border-radius: 7px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 157%;
/* or 25px */

  letter-spacing: 0.1px;

/* other / white */

color: #FFFFFF;
}
.line1{
  width: 15px;
  height: 0px;
  border: 1px solid #212121;
  margin: 10px 
}
.signin-btn:hover {
  background: #4F7CB1;
}
.signin-btn{
  width: 100%;
  height:50px;
  background: #3C608B;
  color: #F5F6F8;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  border-radius: 7px;
  cursor: pointer;
}
.btn-ctn{
  margin-left:69px;
  margin-right: 69px;
  margin-top: 26px;
  margin-bottom: 26px;
}
.circle{
  position: absolute;
  margin-left: -40px;
  margin-top: 17px;
}
.hide_eye{
  position: absolute;
  margin-left: -40px;
  margin-top: 36px;
}

h3{
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
}
h4{
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
}
.email-input {
  box-sizing: border-box;

  width: 420px;
  height: 57px;
  padding: 1.5rem;
  font-size: 16px;
  background: #FFFFFF;
  /* grey / grey-300 */

  border: 2px solid #E0E0E0;
  border-radius: 7px;
}
.password-input{
  box-sizing: border-box;

  width: 420px;
  height: 57px;
  padding: 1.5rem;
  font-size: 16px;
  background: #FFFFFF;
  /* grey / grey-300 */

  border: 2px solid #E0E0E0;
  border-radius: 7px;

}
</style>