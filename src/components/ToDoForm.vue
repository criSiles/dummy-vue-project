<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Add a to do" v-model="newTask" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useToDoStore } from "../stores/ToDoStore";

// Composition API
export default {
  setup() {
    const newTask = ref("");
    const handleSubmit = () => {
      console.log("submit");
      console.log(newTask.value);

      useToDoStore().addTask({
        id: Math.floor(Math.random() * 10000),
        title: newTask.value,
        completed: false,
      });
      newTask.value = "";

      console.log(useToDoStore().tasks);
    };
    return {
      newTask,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
form {
  max-width: 40rem;
  margin: 1.25rem auto; /* Responsive measurement */
  margin-top: 5rem;

  display: grid;
  grid-template-columns: 3fr 1fr; /* Adjusted grid-template-columns ratio */
  gap: 1rem; /* You can use rem for better scalability on different devices */
  padding: 1rem; /* Add some padding to the form */
  margin-top: 5.5rem;
  padding-bottom: 0.4rem;
}

form button {
  background: orange;
  border: 0;
  padding: 0.625rem; /* Responsive measurement */
  font-family: "Poppins";
  border-radius: 0.375rem; /* Responsive measurement */
  cursor: pointer;
  font-size: 1em;
  color: white;
  transition: background-color 0.3s, color 0.3s;
}

form button:hover {
  background-color: #fff;
  color: orange;
}

form input {
  border: 0;
  padding: 0.625rem; /* Responsive measurement */
  border-radius: 0.375rem; /* Responsive measurement */
  color: #555;
  font-size: 1em;
  width: 100%; /* Make the input take the full width of the container */
}
</style>
