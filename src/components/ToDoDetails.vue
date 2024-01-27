<template>
  <div class="task">
    <h3 :class="{ completed: task.completed }" >{{ task.title }}</h3>
    <div class="icons">
      <i @click="todoStore.deleteTask(task.id)" class="material-icons">
        delete
      </i>
      <i
        @click="todoStore.toggleFav(task.id)"
        class="material-icons"
        :class="{ activeLike: task.isFav }"
      >
        favorite
      </i>
      <i
        @click="todoStore.toggleDone(task.id)"
        class="material-icons"
        :class="{ activeDone: task.completed }"
      >
        done
      </i>
      <router-link :to="{ name: 'ToDoNotesView', params: { id: task.id } }">
        <i class="material-icons"> edit_note </i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useToDoStore } from "../stores/ToDoStore";
import { RouterLink } from "vue-router";

export default {
  props: ["task"],
  setup() {
    const todoStore = useToDoStore();

    return { todoStore };
  },
};
</script>

<style>
.completed{
  text-decoration: line-through;
}
</style>

