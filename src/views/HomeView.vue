<template>
    <main>
        <ToDoHeader/>
        <!-- New task form-->
        <div class="new-task-form">
            <TaskForm />
        </div>

        <!-- Task list with details-->
        <TaskList :tasks="tasks" :loading="loading" />
    </main>
</template>

<script>
import ToDoHeader from "@/components/ToDoHeader.vue";
import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";
import { useTaskStore } from "@/stores/TaskStore";
import { storeToRefs } from 'pinia';

export default {
    name: "HomeView",
    components: {
    TaskForm,
    TaskList,
    ToDoHeader
},
    setup() {
        const taskStore = useTaskStore();
        const { tasks, loading } = storeToRefs(taskStore);

        taskStore.fetchTasks();

        return { taskStore, tasks, loading };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
