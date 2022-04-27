<template>
  <div class="login">
    <form class="form">
      <div class="form__fullName">
        <BetaInput
          label="First Name"
          v-model="state.form.firstName"
          type="text"
        />
        <BetaInput
          label="Last Name"
          v-model="state.form.lastName"
          type="text"
        />
      </div>
      <BetaInput
        label="Email Address"
        class="mb-2"
        v-model="state.form.email"
        type="text"
      />

      <BetaInput
        label="Phone Numebr"
        class="mb-2"
        v-model="state.form.phoneNumber"
        type="number"
      />

      <BetaInput
        label="Password"
        class="mb-2"
        v-model="state.form.password"
        type="password"
      />
      <BetaInput
        label="Confirm Password"
        class="mb-2"
        v-model="state.form.confirmPassword"
        type="password"
      />

      <BaseButton> Submit </BaseButton>
    </form>

    <p class="login__text">
      I have an account?
      <router-link :to="{ name: 'Login' }"> <span> Login </span> </router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import BetaInput from '../components/BetaInput.vue'
import BaseButton from '../components/BaseButton.vue'
import { ref, reactive } from 'vue'
import BaseIcon from '../components/BaseIcon.vue'
import BaseSelect from '../components/BaseSelect.vue'

const state = reactive({
  form: freshLoginObject(),
})

function freshLoginObject() {
  return {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
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

  @include vars.respond(tab-land) {
    &__fullName {
      gap: 12px;
      margin-bottom: 2rem;
      @include vars.fCenter;
    }
  }

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
