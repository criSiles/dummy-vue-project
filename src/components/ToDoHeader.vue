<template>
  <header>
    <img alt="Vue logo" src="../assets/orange.webp" />
    <h1>Silly Tasks</h1>
  </header>
</template>

<style scoped>
/* header */
header {
  position: fixed;
  top: 0;
  width: 100%;
  background: #e7e7e7;
  padding-bottom: 1vh;
  border-bottom: 4px solid #ccc;
  /* for the elements */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

header img {
  max-width: 3em;
  transform: rotate(-8deg);
}

header h1 {
  margin: 0;
  font-size: 2em;
  padding-top: 1rem;
  margin-left: 1rem;
  color: #777;
  transform: rotate(2deg);
}
</style>
