<template>
  <!-- Task buttons-->
  <div class="tasks-section">
    <button
      :class="{ active: currentView === 'all' }"
      @click="showAllTasks"
    >
      All tasks
    </button>

    <button
      :class="{ active: currentView === 'fav' }"
      @click="showFavTasks"
    >
      Fav tasks
    </button>

    <button
      :class="{ active: currentView === 'done' }"
      @click="showDoneTasks"
    >
      Done tasks
    </button>
  </div>

  <!-- Task list -->
  <div class="task-list">
    <div v-if="!loading">
      <div v-for="task in paginatedTasks" :key="task.id">
        <ToDoDetails :task="task" />
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>

    <PaginationItem
      :currentPage="currentPage"
      :totalPages="totalPages"
      @page-changed="onPageChanged"
    />
  </div>
</template>

<script>
import PaginationItem from "./PaginationItem.vue";
import ToDoDetails from "./ToDoDetails.vue";
import { ref, computed } from "vue";

export default {
  components: {
    ToDoDetails,
    PaginationItem,
  },
  props: ["tasks", "loading"],
  setup(props) {
    console.log("SETUP");

    // --------------------------------
    // Variables
    // --------------------------------
    const PAGE_SIZE = 4;
    const currentPage = ref(1);

    const currentView = ref("all");

    // --------------------------------
    // Computed
    // --------------------------------

    const filteredTasks = computed(() => {
      console.log("tasks changed", props.tasks);
      console.log("currentView", currentView.value);

      let tempTasks = props.tasks;

      switch (currentView.value) {
        case "fav":
          tempTasks = tempTasks.filter((task) => task.isFav);
          console.log("fav tasks", tempTasks);
          break;
        case "done":
          tempTasks = tempTasks.filter((task) => task.completed);
          break;
        case "all":
          break;
        default:
          break;
      }

      console.log("tempTasks", tempTasks);

      return tempTasks;
    });

    const paginatedTasks = computed(() => {
      var start = (currentPage.value - 1) * PAGE_SIZE;
      var end = start + PAGE_SIZE;

      var result = [];
      if (filteredTasks.value.length !== 0) {
        result = filteredTasks.value.slice(start, end);
      }

      return result;
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredTasks.value.length / PAGE_SIZE);
    });

    // --------------------------------
    // Methods
    // --------------------------------

    const showAllTasks = () => {
      currentView.value = "all";
    };

    const showFavTasks = () => {
      currentView.value = "fav";
    };

    const showDoneTasks = () => {
      currentView.value = "done";
    };

    const onPageChanged = (page) => {
      console.log("Page changed to: " + page);
      currentPage.value = page;
    };

    console.log("currentPage", currentPage.value);
    console.log("total pages", totalPages.value);

    return {
      currentView,
      showAllTasks,
      showFavTasks,
      showDoneTasks,
      filteredTasks,
      onPageChanged,
      currentPage,
      totalPages,
      paginatedTasks,
    };
  },
};
</script>

<style>
.task-list {
  max-width: 40rem;
  margin: 1.25rem auto;
}

.task {
  padding: 0.375rem 1.25rem;
  background: white;
  margin-top: 1.25rem;
  margin-left: 2vw;
  margin-right: 2vw;
  border-radius: 0.25rem;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task h3 {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.task .icons {
  text-align: right;
  display: flex;
  flex-direction: row;
}

.task i {
  font-size: 1.4em;
  margin-left: 6px;
  cursor: pointer;
  color: #bbb;
}

.task i.activeLike {
  color: #ff005d;
}

.task i.activeDone {
  color: green;
}
.tasks-section {
  list-style-type: none;
  margin: 0.3125vw; /* Responsive measurement */
  padding: 0.625vw; /* Responsive measurement */
  overflow: hidden;
  display: flex;
  justify-content: center;
  gap: 0.25vw; /* Responsive measurement */
}

.tasks-section button {
  display: inline-block;
  background: orange;
  border: 0;
  padding: 0.625rem;
  margin-left: 1vw;
  margin-bottom: 0.5rem;
  font-family: "Poppins";
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 1.1em;
  color: white;
  transition: background-color 0.3s, color 0.3s;
}

.tasks-section button:hover {
  background-color: white;
  color: orange;
}

.tasks-section button:active {
  background-color: white;
  color: orange;
}

.tasks-section button:focus {
  outline: none;
}
</style>
