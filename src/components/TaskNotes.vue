<template>
  <main>
    <ToDoHeader />
    <div class="notes-section">
      <h3>Notes</h3>
      <p>{{ task.title }}</p>
      <div class="textarea">
        <textarea
          class="custom-textarea"
          ref="autoTextarea"
          @input="adjustTextareaHeight"
          v-model="message"
          :style="{ height: textareaHeight + 'px' }"
        ></textarea>
      </div>
      <button class="notes-button" @click="saveInput">Save</button>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import { useTaskStore } from "@/stores/TaskStore";
import ToDoHeader from "@/components/ToDoHeader.vue";

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const task = ref(null);
    task.value = props.task;
    const message = ref(null);
    message.value = props.task.notes;
    console.log("This is the message value:", message.value);
    const saveInput = () => {
      useTaskStore().addNotes(task.value.id, message.value);
    };
    const textareaHeight = ref(10);
    const autoTextarea = ref(null);
    const adjustTextareaHeight = () => {
      const textarea = autoTextarea.value;
      textarea.style.height = "auto"; // Reset the height to auto
      textarea.style.height = textarea.scrollHeight + "px"; // Set the height to the scrollHeight
    };
    onMounted(() => {
      adjustTextareaHeight(); // Call the function initially to set the correct height
    });
    return {
      task,
      message,
      textareaHeight,
      autoTextarea,
      adjustTextareaHeight,
      saveInput,
    };
  },
  components: { ToDoHeader },
};
</script>
<style scoped>

.notes-section {
  max-width: 37.5rem;
  margin: 0 auto;
}

.notes-section h3 {
  padding-top: 50px;
  font-size: 1.5em;
  margin-bottom: 5px;
}

.notes-section p {
  color: #333;
  margin-bottom: 20px;
}

.custom-textarea {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
}

.notes-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  font-family: "Poppins";
  border: 0;
  border-radius: 6px;
  background-color: orange;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.notes-button:hover {
  background-color: #fff;
  color: orange;
}

h3{
margin-top: 2.2rem;
}
.textarea {
    display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
}
.notes-button{
    margin-top: 1.3rem;
}
</style>
