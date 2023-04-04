<script setup>
import AddTodoInput from '../components/AddTodoInput.vue';
import TodoItem from '../components/TodoItem.vue';
</script>

<template>
  <div class="">
    <h1 class="">Todo App</h1>
    <div class="">
      <div>Hey<span class="">User Name</span></div>
      <button class="">
        Log out
      </button>
    </div>
    <div class="">
      <AddTodoInput />
      <div class="">
        <div class="">
          <TodoItem />
        </div>
      </div>
    </div>
  </div>
</template>