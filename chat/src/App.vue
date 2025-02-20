<template>
<div class="view login" v-if="state.username === ''|| state.username === null">
  <form class="login-form" @submit.prevent="Login">
 <div class="form-inner">
  <h1>Login to firechat</h1>
    <label for="username">username</label>
    <input type="text" v-model="inputUsername" placeholder="Please enter your username" required />
    <input type="submit" value="Login" />
 </div>
  </form>
</div>
<div class="view chat" v-else>
  <h1>Chat View</h1>
</div>
</template>

<script>
import { reactive,onMounted,ref } from 'vue';

export default {
  setup(){
    const inputUsername =ref("");


    const state =reactive({
      username:"",
      messages:[]
    })


    const Login =()=>{
      if(inputUsername.value !="" || inputUsername.value !=null){
        state.username = inputUsername.value
inputUsername.value ="";
      }
    }
    return{
 inputUsername,
 Login,
 state
    }
  }
}
</script>

<style lang="scss">

</style>
