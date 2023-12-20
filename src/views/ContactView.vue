<template>
  <body>
    <GeneralHeader />
    <ContactForm />
  </body>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import GeneralHeader from "@/components/GeneralHeader.vue";
export default {
  name: "ContactView",
  components: { ContactForm, GeneralHeader },
};
</script>
