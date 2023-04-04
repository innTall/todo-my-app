<script setup>
import { useMutation } from '@vue/apollo-composable';
import { ref } from 'vue';
import { SIGNUP_USER } from '../graphql/mutations.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const { mutate: signup, loading, onDone } = useMutation(SIGNUP_USER);
const name = ref('');
const username = ref('');
const password = ref('');
const submit = () => {
  signup({
    input: {
      name: name.value,
      username: username.value,
      password: password.value
    }
  })
};
onDone(() => {
  router.push({ name: 'Login' })
});
</script>

<template>
  <div class="">
    <h1 class="">Todo App</h1>
    <form class="" @submit.prevent="submit">
      <input class="text-gray-600" v-model="name" :readonly="loading" type="text" placeholder="Name" required />
      <input class="text-gray-600" v-model="username" :readonly="loading" type="text" placeholder="Username" required />
      <input class="text-gray-600" v-model="password" :readonly="loading" type="password" placeholder="Password" required />
      <button :class="[ loading
          ? 'bg-gray-500 hover:bg-gray-500'
          : 'bg-blue-500 hover:bg-blue-600',
        'mt-2.5 py-2.5 rounded ' ]"
        :disabled="loading">
        Sign up
      </button>
    </form>
    <div class="">
      Already have an account?
      <RouterLink class="" :to="{ name: 'Login' }">
        Log in here
      </RouterLink>
    </div>
  </div>
</template>