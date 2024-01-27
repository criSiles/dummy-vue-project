<template>
  <div class="all-container" role="main">
    <header>
      <GeneralHeader />
    </header>
    <main>
      <section>
        <h2>Projects</h2>
        <div class="card-container">
          <article class="card">
            <h3>To Do</h3>
            <p>
              This is a website where you can find a To Do list. In this part
              you could add a new to do, mark it as fav, delete it and add
              notes.
            </p>
            <nav>
              <router-link class="link" :to="{ name: 'ToDo' }"
                ><p>Click here to go to the web</p>
              </router-link>
            </nav>
          </article>
          <article class="card">
            <h3>Second Hand Shop</h3>
            <p>
              This is a second hand shop website. You can see all the products,
              make a search for a specific product and post a product to sell.
            </p>
            <nav>
              <router-link class="link" :to="{ name: 'ProjectsWip' }"
                ><p>Click here to go to the web</p>
              </router-link>
            </nav>
          </article>
          <article class="card">
            <h3>Flitter</h3>
            <p>
              This is a social media website where you can express yourself and
              see what other people are thinking or doing.
            </p>
            <nav>
              <router-link class="link" :to="{ name: 'ProjectsWip' }"
                ><p>Click here to go to the web</p>
              </router-link>
            </nav>
          </article>
        </div>
      </section>
    </main>

    <footer>
      <GeneralFooter />
    </footer>
  </div>
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
.all-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100svh;
  margin: 0;
  font-family: "Poppins";
  background: linear-gradient(to bottom, #f2f2f2, white);
  padding-bottom: 3rem;
}

.card-container {
  display: flex;
}

main > h2 {
  text-align: center;
  font-size: 1.5em;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
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

.link p {
  font-weight: 600;
}

footer {
  margin-bottom: -1.5rem;
}
@media screen and (max-width: 960px) {
  /* main > h2 {
    margin-top: 1.5rem;
    margin-bottom: -0.2rem;
  } */
  .card-container {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .card {
    margin-bottom: 3rem;
  }
}
</style>
