<script setup>
import { useMutation } from '@vue/apollo-composable';
import { UPDATE_TODO, DELETE_TODO } from '../graphql/mutations.js';
import { ref } from 'vue';
const props = defineProps({ todo: Object });
const emit = defineEmits(['delete', 'deleted']);
const completed = ref(props.todo.completed)
const { mutate: save, onError: onUpdateError } = useMutation(UPDATE_TODO)
const {
  mutate: deleteTodo,
  onError: onDeleteError,
  onDone: onDeleteDone
} = useMutation(DELETE_TODO);
const toggle = () => {
  completed.value = !completed.value
  save({
    input: {
      todoId: props.todo.id,
      completed: completed.value
    }
  })
};
const onDelete = async () => {
  emit('delete')
  deleteTodo({
    todoId: props.todo.id
  })
};
onDeleteDone(() => {
  emit('deleted')
});
onUpdateError(() => {
  completed.value = props.todo.completed
  console.error('An error occurred while updating todos')
});
onDeleteError(() => {
  console.error('An error occurred while deleting todo')
});
</script>

<template>
  <div class="text-gray-100">
    <div class="">
      <button :class="[completed ? '' : '', '']" @click="toggle">
        <svg v-if="completed" style="" viewBox="0 0 24 24">
          <path fill="" d="" />
        </svg>
      </button>
      <span :class="[completed && '', '']">
        {{ todo.title }}
      </span>
    </div>
    <button class="" @click="onDelete">
      <svg style="" viewBox="0 0 24 24">
        <path fill="" d="" />
      </svg>
    </button>
  </div>
</template>