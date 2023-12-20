<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i @click="taskStore.deleteTask(task.id)" class="material-icons">
        delete
      </i>
      <i
        @click="taskStore.toggleFav(task.id)"
        class="material-icons"
        :class="{ activeLike: task.isFav }"
      >
        favorite
      </i>
      <i
        @click="taskStore.toggleDone(task.id)"
        class="material-icons"
        :class="{ activeDone: task.completed }"
      >
        done
      </i>
      <router-link :to="{ name: 'TaskNotesView', params: { id: task.id } }">
        <i class="material-icons"> edit_note </i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/TaskStore";
import { RouterLink } from "vue-router";

export default {
  props: ["task"],
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>

