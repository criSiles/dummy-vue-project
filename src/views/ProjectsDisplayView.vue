<template>
  <header>
    <GeneralHeader />
  </header>
  <h2>Projects</h2>
  <main class="container">
    <div class="card">
      <h3>To Do</h3>
      <p>
        This is a website where you can find a To Do list. In this part you
        could add a new to do, mark it as fav, delete it and add notes.
      </p>
      <router-link class="link" :to="{ name: 'ToDo' }"
        ><p>Click here to go to the web</p>
      </router-link>
    </div>
    <div class="card">
      <h3>Second Hand Shop</h3>
      <p>
        This is a second hand shop website. You can see all the products, make a
        search for a specific product and post a product to sell.
      </p>
      <router-link class="link" :to="{ name: 'ProjectsWip' }"
        ><p>Click here to go to the web</p>
      </router-link>
    </div>
    <div class="card">
      <h3>Flitter</h3>
      <p>
        This is a social media website where you can express yourself and see
        what other people are thinking or doing.
      </p>
      <router-link class="link" :to="{ name: 'ProjectsWip' }"
        ><p>Click here to go to the web</p>
      </router-link>
    </div>
    <GeneralFooter class="footer" />
  </main>
</template>
<script>
import GeneralHeader from "@/components/GeneralHeader.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
export default {
  name: "ProjectsDisplay",
  components: {
    GeneralHeader,
    GeneralFooter,
  },
};
</script>
<style scoped>
body {
  margin: 0;
  font-family: "Poppins";
  background: linear-gradient(to bottom, #f5f5f5, white);
}
.container {
  display: flex;
}

main > h2 {
  text-align: center;
  font-size: 1.5em;
  margin-top: 3rem;
}
.card {
  grid-column: span 4;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 6px;
  box-shadow: 3px 3px 12px 0px rgb(0, 0, 0, 0.2);
  /* right - bottom - difuse - all sides*/
  margin-right: 2rem;
  margin-left: 2rem;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.2);
}
.link {
  text-decoration: none;
  color: #0e2431;
}

.link:hover {
  color: #e25555;
}

.link p{
  font-weight: 600;
}
  .footer{
    position: absolute;
  }
@media screen and (max-width: 960px) {
  main > h2 {
    margin-top: 1.5rem;
    margin-bottom: -0.2rem;
  }
  .container {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .card {
    margin-bottom: 3rem;
  }
  .footer{
    position: relative;
  }
}
</style>
