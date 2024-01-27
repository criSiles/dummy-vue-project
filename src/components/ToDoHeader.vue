<template>
  <header>
    <div class="title">
      <img alt="Orange logo" src="../assets/orange.webp" />
      <h1>Silly Tasks</h1>
    </div>
      <router-link :to="{ name: 'Home' }">
        <i class="material-icons"> home </i>
      </router-link>
  </header>
</template>

<style scoped>
/* header */
header {
  position: fixed;
  top: 0;
  width: 100%;
  background: #e7e7e7;
  padding-bottom: 0.5rem;
  /* for the elements */
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
}

header img {
  max-width: 3rem;
  margin-left: 0.5rem;
}

header h1 {
  margin: 0;
  font-size: 2rem;
  padding-top: 1rem;
  color: #777;
}

i {
  margin-top: 0.6rem;
  font-size: 3.1rem;
  cursor: pointer;
  color: #777;
  margin-right: 0.5rem;
}

</style>
