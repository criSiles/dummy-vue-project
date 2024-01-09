<template>
  <body>
    <GeneralHeader />
    <ContactForm />
    <GeneralFooter class="footer"/>
  </body>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import GeneralHeader from "@/components/GeneralHeader.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
export default {
  name: "ContactView",
  components: { ContactForm, GeneralHeader, GeneralFooter },
};
</script>

<style>
.footer{
  position: relative;
}
</style>
