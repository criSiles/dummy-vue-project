<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Name:</label>
    <input type="name" required v-model="name" />

    <label>Mobile:</label>
    <input type="mobile" required v-model="mobile" />
    <div v-if="mobileError">{{ mobileError }}</div>

    <label> Role: </label>
    <select>
      <option value="developer">Web Developer</option>
      <option value="recruiter">Recruiter</option>
      <option value="student">Web Student</option>
    </select>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button>Send</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      role: "",
      terms: false,
      mobileError: "",
    };
  },
  methods: {
    handleSubmit(e) {
      this.mobileError =
        this.mobile.length == 9 ? "" : "The mobile has to be 9 numbers";
    },
  },
};
</script>

<style scoped>
form {
  font-family: "Poppins";
  max-width: 40rem;
  margin: 1.25rem auto;
  margin-top: 5rem;
  background: white;
  text-align: left;
  padding: 2rem;
  gap: 1rem;
  border-radius: 10px;
}
label {
  color: #555;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 1em;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 0.625rem;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.375rem;
  border-bottom: 1px solid #ddd;
  color: #555;
  font-size: 1em;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>
