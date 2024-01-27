import { defineStore } from "pinia";
import deafultData from "../../data/db.json";

// const urlDB = "http://localhost:5999/tasks";

/** Model
 * @typedef {Object} Task
 * @property {number} id - The task's id.
 * @property {string} title - The task's title.
 * @property {string} description - The task's description.
 * @property {boolean} completed - Whether the task is completed.
 */

export const useToDoStore = defineStore("todoStore", {
  state: () => ({
    tasks: [],
    name: "ToDo Store",
    loading: true,
  }),
  getters: {
    getTaskById: (state) => (id) => {
      console.log("All the tasks:", state.tasks);
      console.log("Getting the task with id:", id);

      // String to number
      id = parseInt(id);

      const task = state.tasks.find((t) => t.id === id);

      if (task === undefined) {
        console.log("The task does not exist");
        return;
      }

      console.log("Found task:", task);
      return task;
    },
  },
  // TODO: Make a loading button to make the fetch of the database.
  actions: {
    async fetchTasks() {
      this.loading = true;
      var data;

      if (this.tasks.length > 0) {
        console.log("Tasks already loaded");
        this.loading = false;
        return;
      } else {
        // Checks local storage
        this.loadTasks();

        if (this.tasks.length > 0) {
          console.log("Tasks loaded from local storage");
          this.loading = false;
          return;
        } else {
          data = deafultData.tasks;

          //   console.log("Loading tasks from DB");
          //   const res = await fetch(urlDB);
          //   data = await res.json();
        }

        console.log("Data has arrived!", data);
      }
      this.tasks = data;
      this.loading = false;
    },

    loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      if (tasks) {
        this.tasks = tasks;
      }
    },

    async addTask(task) {
      // Check if the task already exists
      const taskExists = this.tasks.find((t) => t.id === task.id);

      if (taskExists) {
        console.log("The task already exists");
        return;
      } else if (task.title.length === 0) {
        console.log("You cannot add an empty To Do");
        return;
      } else {
        this.tasks.push(task);
      }

      // Update the local storage
      localStorage.setItem("tasks", JSON.stringify(this.tasks));

      // Update the DB
      console.log("Adding the task:", task);
      // const res = await fetch(urlDB, {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(task),
      // });

      // if (res.error) {
      //   console.log(res.error);
      // }
    },

    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
      console.log("Deleting the task with id:", id);

      // Update the local storage
      localStorage.setItem("tasks", JSON.stringify(this.tasks));

      // const res = await fetch(urlDB + "/" + id, {
      //   method: "DELETE",
      // });

      // if (res.error) {
      //   console.log(res.error);
      // }
    },

    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;

      console.log("The fav has changed", task);

      // Update the local storage
      localStorage.setItem("tasks", JSON.stringify(this.tasks));

      // const res = await fetch(urlDB + "/" + id, {
      //   method: "PATCH",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify({ isFav: task.isFav }),
      // });

      // if (res.error) {
      //   console.log(res.error);
      // }
    },

    async toggleDone(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.completed = !task.completed;

      console.log("The completed has changed", task);

      // Update the local storage
      localStorage.setItem("tasks", JSON.stringify(this.tasks));

      // const res = await fetch(urlDB + "/" + id, {
      //   method: "PATCH",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify({ completed: task.completed }),
      // });

      // if (res.error) {
      //   console.log(res.error);
      // }
    },

    async addNotes(id, notes) {
      const task = this.tasks.find((t) => t.id === id);

      if (task === undefined) {
        console.log("The task does not exist");
        return;
      }

      task.notes = notes;

      // Update the local storage
      localStorage.setItem("tasks", JSON.stringify(this.tasks));

      // Update the DB
      // const res = await fetch(urlDB + "/" + id, {
      //   method: "PATCH",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify({ notes: task.notes }),
      // });
    },
  },
});
