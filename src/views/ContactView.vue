<template>
  <div class="all-container">
    <header role="banner">
      <GeneralHeader />
    </header>
    <main role="main">
      <ContactForm />
    </main>
    <footer role="contentinfo">
      <GeneralFooter/>
    </footer>
  </div>
</template>
<script scoped>
import ContactForm from "@/components/ContactForm.vue";
import GeneralHeader from "@/components/GeneralHeader.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
export default {
  name: "ContactView",
  components: { ContactForm, GeneralHeader, GeneralFooter },
};
</script>

<style scoped>

.all-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  margin: 0;
  font-family: "Poppins";
  background: linear-gradient(to bottom, #f2f2f2, white);
}

</style>
