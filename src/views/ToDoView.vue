<template>
    <main>
        <ToDoHeader/>
        <!-- New task form-->
        <div class="new-task-form">
            <ToDoForm />
        </div>

        <!-- Task list with details-->
        <ToDoList :tasks="tasks" :loading="loading" />
    </main>
</template>

<script>
import ToDoHeader from "@/components/ToDoHeader.vue";
import ToDoList from "@/components/ToDoList.vue";
import ToDoForm from "@/components/ToDoForm.vue";
import { useToDoStore } from "../stores/ToDoStore";
import { storeToRefs } from 'pinia';

export default {
    name: "ToDoView",
    meta:{
        hideFooter: true,
    },
    components: {
    ToDoForm,
    ToDoList,
    ToDoHeader
},
    setup() {
        const todoStore = useToDoStore();
        const { tasks, loading } = storeToRefs(todoStore);

        todoStore.fetchTasks();

        return { todoStore, tasks, loading };
    },
};
</script>

<style scoped>
/* This shouldn't be scoped and be there, I have to improve the CSS */
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
body {
  background: #f2f2f2;
  color: #444;
  margin: 0;
}
body * {
  font-family: "Poppins";
}

/* loading state */
.loading {
  max-width: 640px;
  border: 1px solid #ffd859;
  background: #ffe9a0;
  color: #3a3a3a;
  padding: 5px 0;
  text-align: center;
  margin: 30px auto;
}
.active {
  background-color: orange;
  color: white;
  border: 2px solid orange;
}
</style>
