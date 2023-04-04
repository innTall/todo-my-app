<script setup>
</script>

<template>
  <div class="">
    <h1 class="">Todo App</h1>
    <form class="">
      <input class="text-gray-600" type="text" placeholder="Username" required />
      <input class="text-gray-600" type="password" placeholder="Password" required />
      <button class="">
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