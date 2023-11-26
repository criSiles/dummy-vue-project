<template>
  <main>
    <ToDoHeader/>
    <div class="notes-section">
      <h3>Notes</h3>
      <p>{{ task.title }}</p>
      <textarea class="custom-textarea" ref="autoTextarea" @input="adjustTextareaHeight" v-model="message" :style="{ height: textareaHeight + 'px'}">
      </textarea>
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
            textarea.style.height = 'auto'; // Reset the height to auto
            textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to the scrollHeight
        };
        onMounted(() => {
            adjustTextareaHeight(); // Call the function initially to set the correct height
        });
        return {
            task, message, textareaHeight, autoTextarea, adjustTextareaHeight, saveInput
        };
    },
    components: { ToDoHeader }
};
</script>
