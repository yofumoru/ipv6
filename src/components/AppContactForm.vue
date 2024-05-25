<template>
  <div class="container">
    <h1>Contact Us</h1>
    <form @submit.prevent="handleSubmit">
      <div class="input-wrapper">
        <input type="text" id="name-input" v-model="form.name" required placeholder=" " class="text-input">
        <label for="name-input" class="text-label">Name</label>
      </div>
      <div class="input-wrapper">
        <input type="email" id="email-input" v-model="form.email" required placeholder=" " class="text-input">
        <label for="email-input" class="text-label">Email address</label>
      </div>
      <div class="input-wrapper">
        <textarea id="message-input" v-model="form.message" required placeholder=" " class="text-input textarea-input"></textarea>
        <label for="message-input" class="text-label">Message</label>
      </div>
      <button type="submit" class="submit-button">Submit</button>
    </form>
    <div v-if="submitted" class="alert alert-success mt-3">Form submitted successfully!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      if (this.form.name && this.form.email && this.form.message) {
        this.submitted = true;
      } else {
        alert('Please fill out all fields.');
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.input-wrapper {
  position: relative;
  margin-bottom: 25px;
  width: 100%;
  box-sizing: content-box;
}

.text-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  border: 1px solid #c2c8d0;
  border-radius: 6px;
  box-sizing: border-box;
  color: #2d333a;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.5;
  outline: none;
  padding: 16px;
  transition: box-shadow .2s ease-in-out, border-color .2s ease-in-out;
  width: 100%;
  margin: 0;
}

.textarea-input {
  height: 150px;
  resize: none; /* Disable drag */
}

.text-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

.text-label {
  position: absolute;
  top: 26px;
  left: 16px;
  background-color: #fff;
  color: #6f7780;
  font-size: 16px;
  font-weight: 400;
  pointer-events: none;
  padding: 1px 6px;
  transform: translateY(-50%);
  transform-origin: 0;
  transition: transform .15s ease-in-out, top .15s ease-in-out, padding .15s ease-in-out;
  z-index: 1;
}

.text-input:focus + .text-label,
.text-input:not(:placeholder-shown) + .text-label {
  top: 10px;
  transform: translateY(-100%);
  background-color: #fff;
  padding: 0 6px;
}

.submit-button {
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color .3s;
}

.submit-button:hover {
  background-color: #0056b3;
}

.alert-success {
  padding: 12px;
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
  border-radius: 6px;
  margin-top: 20px;
}
</style>