<template>
  <div v-if="task">
    <TaskNotes :task="task" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import TaskNotes from "@/components/TaskNotes.vue";
import { useTaskStore } from "@/stores/TaskStore";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "TaskNotesView",
  components: { TaskNotes },

  setup() {
    const taskStore = useTaskStore();

    // Get id from route params
    const route = useRoute();
    const id = parseInt(route.params.id);

    taskStore.fetchTasks();

    // Get task from store
    const task = computed(() => {
      if (taskStore.loading === false) {
        return taskStore.getTaskById(id);
      } else {
        return null;
      }
    });

    return {
      task,
    };
  },
};
</script>
