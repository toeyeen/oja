<template>
  <div class="login">
    <div class="input">
      <BetaInput label="Email Address" v-model="state.form.email" type="text" />
      <BetaInput
        label="Password"
        v-model="state.form.password"
        type="password"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BetaInput from '../components/BetaInput.vue'
import { ref, reactive } from 'vue'

const state = reactive({
  form: freshLoginObject(),
})

function freshLoginObject() {
  return {
    email: '',
    password: '',
  }
}
const email = ref('')
</script>

<style lang="scss" scoped>
.login {
  max-width: 400px;
  margin: 5rem auto;
}
</style>
