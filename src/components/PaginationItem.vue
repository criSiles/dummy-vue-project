<template>
  <ul class="pagination">
    <li class="pagination-item">
      <button class="pagination-button" type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
        First
      </button>
    </li>

    <li class="pagination-item">
      <button class="pagination-button" type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
        Previous
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li v-for="page in pages" :key="page.name" class="pagination-item">
      <button class="pagination-button" type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }">
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="pagination-item">
      <button class="pagination-button" type="button" @click="onClickNextPage" :disabled="isInLastPage">
        Next
      </button>
    </li>

    <li class="pagination-item">
      <button class="pagination-button" type="button" @click="onClickLastPage" :disabled="isInLastPage">
        Last
      </button>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PaginationItem",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      const pages = [];
      const startPage = this.currentPage - 2;
      const endPage = this.currentPage + 2;

      for (let i = startPage; i <= endPage; i++) {
        if (i >= 1 && i <= this.totalPages) {
          pages.push({
            name: i,
            isDisabled: this.isPageActive(i),
          });
        }
      }
      console.log("This.totalpages", this.totalPages);

      return pages;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit("page-changed", 1);
    },
    onClickPreviousPage() {
      this.$emit("page-changed", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("page-changed", page);
    },
    onClickNextPage() {
      this.$emit("page-changed", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("page-changed", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
});
</script>

<style>
/* Pagination */
.pagination {
  list-style-type: none;
  margin: 0.3125vw; /* Responsive measurement */
  padding: 0.625vw; /* Responsive measurement */
  overflow: hidden;
  display: flex;
  justify-content: center;
  gap: 0.25vw; /* Responsive measurement */
}

.pagination-item {
  display: inline-block;
}

.pagination-button:hover {
  background-color: white;
  color: orange;
}

.pagination-button:active {
  background-color: white;
  color: orange;
}

.pagination-button:focus {
  outline: none;
}

.pagination-button {
  margin-top: 1rem;
  background: orange;
  border: 0;
  padding: 10px;
  font-family: "Poppins";
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  color: white;
  transition: background-color 0.3s, color 0.3s;
}
</style>