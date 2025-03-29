<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link :to="{ name: 'home' }" class="inline-flex  items-center h-full px-5 hover:bg-purple-100"  >
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link :to="{ name: 'byName' }" class="inline-flex  items-center px-2 h-full transition-colors hover:bg-purple-100">
        Search Meals
      </router-link>
      <router-link :to="{ name: 'byLetter' }" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
        Meals By Letter
      </router-link>
    </div>
    <button @click="Login" class="px-4 py-2 bg-blue-500 text-white rounded-md">Login</button>
  </header>
</template>

<script setup>
import Swal from "sweetalert2";

async function Login() {
  const { value: email } = await Swal.fire({
    title: "Input email address",
    input: "email",
    inputLabel: "Your email address",
    inputPlaceholder: "Enter your email address"
  });

  if (email) {
    Swal.fire(`Entered email: ${email}`);
  }
}
</script>
