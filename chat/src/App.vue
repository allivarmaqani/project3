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
 <header>
  <button class="logout">logout</button>
  <h1>welocme,{{ state.username }}</h1>
 </header>
 <section class="chat-box">
 //message
 </section>
 <footer>
  <form @submit.prevent="SendMessage">
    <input type="text" v-model="inputMessage" placeholder="write a message..."/>
    <input type="submit" value="Send" >
  </form>
 </footer>
</div>
</template>

<script>
import { reactive,onMounted,ref } from 'vue';
import db from './db';

export default {
  setup(){
    const inputUsername =ref("");
    const inputMessage =ref("");

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

    const SendMessage =() =>{
      const messageRef = db.database().ref("messages");

      if(inputMessage.value ==="" || inputMessage.value ===null){
      return;
      }
      const message = {
        username:state.username,
        content: inputMessage.value
      }
      messageRef.push(message);
      inputMessage.value ="";
    }
    return{
 inputUsername,
 Login,
 state,
 inputMessage,
 SendMessage
    }
  }
}
</script>

<style lang="scss">

</style>
