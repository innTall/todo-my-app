<script setup></script>

<template>
  <div class="">
    <h1 class="">Todo App</h1>
    <form class="">
      <input class="text-gray-600" type="text" placeholder="Name" required />
      <input class="text-gray-600" type="text" placeholder="Username" required />
      <input class="text-gray-600" type="password" placeholder="Password" required />
      <button class="">Sign up</button>
    </form>
    <div class="">
      Already have an account?
      <RouterLink class="" :to="{ name: 'Login' }">
        Log in here
      </RouterLink>
    </div>
  </div>
</template>