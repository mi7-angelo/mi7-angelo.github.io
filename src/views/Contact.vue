<template>
  <section>
    <h1>Contact Me</h1>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" placeholder="Your Name" required />
      <input type="email" v-model="email" placeholder="Your Email" required />
      <textarea v-model="message" placeholder="Your Message" rows="4" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

function submitForm() {
  alert('Message sent!')
  console.log({ name: name.value, email: email.value, message: message.value })
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
}
input, textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 0.6rem;
  border: none;
  background-color: #007BFF;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
