<template>
  <div class="login">
    <form class="form">
      <BetaInput
        class="mb-2"
        label="Email Address"
        v-model="state.form.email"
        type="text"
      />
      <BetaInput
        label="Password"
        class="mb-2"
        v-model="state.form.password"
        type="password"
      />
      <div class="form__forget">
        <BaseIcon name="lock" :size="16" class="form__forget-icon" />

        <p>Forgot password?</p>
      </div>
      <BaseButton> Submit </BaseButton>
    </form>

    <p class="login__text">
      Don't have an account?
      <router-link :to="{ name: 'Register' }">
        <span> Create Account </span>
      </router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import BetaInput from '../components/BetaInput.vue'
import BaseButton from '../components/BaseButton.vue'
import { ref, reactive } from 'vue'
import BaseIcon from '../components/BaseIcon.vue'

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
@use '../style/main.scss' as vars;
.login {
  max-width: 400px;
  margin: 5rem auto;

  &__text {
    cursor: pointer;
    text-align: center;
    margin: 2.4rem auto;
    font-size: 14px;
    letter-spacing: 1px;

    span:hover {
      color: vars.$primary-color;
    }
  }
}

.form {
  font-size: 14px;
  letter-spacing: 1px;

  &__forget {
    display: flex;
    cursor: pointer;
    margin-bottom: 2rem;

    :hover {
      color: vars.$primary-color;
    }
    &-icon {
      margin-right: 0.8rem;
    }
  }
}
</style>
