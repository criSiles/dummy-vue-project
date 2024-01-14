<template>
  <div v-if="task">
    <ToDoNotes :task="task" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import ToDoNotes from "@/components/ToDoNotes.vue";
import { useToDoStore } from "../stores/ToDoStore";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "ToDoNotesView",
  components: { ToDoNotes },

  setup() {
       const todoStore = useToDoStore();

    // Get id from route params
    const route = useRoute();
    const id = parseInt(route.params.id);

    todoStore.fetchTasks();

    // Get task from store
    const task = computed(() => {
      if (todoStore.loading === false) {
        return todoStore.getTaskById(id);
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
