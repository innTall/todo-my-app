<script setup>
import { ref } from 'vue';
import { useAuth } from '../store/auth.js';
import { useRouter } from 'vue-router';
const router = useRouter();
const { login } = useAuth();
const username = ref('');
const password = ref('');
const showErrorMessage = ref(false);
const loggingIn = ref(false);
const submit = async () => {
  loggingIn.value = true
  try {
    await login({
      username: username.value,
      password: password.value
    })
    router.push({ name: 'Home' })
  } catch (err) {
    showErrorMessage.value = true
  }
  loggingIn.value = false
};
</script>

<template>
  <div class="">
    <div v-if="showErrorMessage" class="">
      Your username or password is incorrect
    </div>
    <h1 class="">Todo App</h1>
    <form class="" @submit.prevent="submit">
      <input class="text-gray-600" v-model="username" :readonly="loggingIn" type="text" placeholder="Username" required />
      <input class="text-gray-600" v-model="password" :readonly="loggingIn" type="password" placeholder="Password" required />
      <button :class="[ loggingIn
        ? 'bg-gray-500 hover:bg-gray-500'
        : 'bg-blue-500 hover:bg-blue-600',
        'mt-2.5 py-2.5 rounded '
      ]" :disabled="loggingIn">
        Log in
      </button>
    </form>
    <div class="">
      Don't have an account?
      <RouterLink class="" :to="{name: 'Signup'}">
        Sign up here
      </RouterLink>
    </div>
  </div>
</template>