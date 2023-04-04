<script setup>
import Spinner from '../components/Spinner.vue'
import AddTodoInput from '../components/AddTodoInput.vue'
import { computed, ref, watch } from 'vue'
import TodoItem from '../components/TodoItem.vue'
import { useAuth } from '../store/auth.js'
import { useQuery } from '@vue/apollo-composable'
import { TODOS } from '../graphql/queries.js'
import { NetworkStatus } from '@apollo/client/core'
const { currentUser, logout } = useAuth()
const localTodos = ref([])
const { loading, result, refetch, networkStatus } = useQuery(TODOS, null, {
  notifyOnNetworkStatusChange: true
})
watch(result, () => {
  localTodos.value = result.value.todos
});
const isRefetching = computed(
  () => networkStatus.value === NetworkStatus.refetch
);
const onAdded = (newTodo) => {
  localTodos.value = [...localTodos.value, newTodo]
  refetch()
};
const onDelete = (todoId) => {
  localTodos.value = localTodos.value.filter((todo) => todo.id !== todoId)
};
</script>

<template>
  <div class="">
    <h1 class="">Todo App</h1>
    <div class="">
      <div>Hey<span class="">{{ currentUser.name }}</span></div>
      <button class="" @click="logout">
        Log out
      </button>
    </div>
    <div class="">
      <AddTodoInput @added="onAdded" />
      <div class="">
        <div v-if="loading && !isRefetching" class="">
          <Spinner class="w-5 mr-2.5" />
          Loading Todos
        </div>
        <div v-else-if="localTodos.length > 0" class="">
          <TodoItem v-for="todo in localTodos" :key="todo.id" :todo="todo" @delete="onDelete(todo.id)"
          @deleted="refetch" />
        </div>
        <div v-else class="">
          Your Todo List is Empty
        </div>
      </div>
    </div>
  </div>
</template>