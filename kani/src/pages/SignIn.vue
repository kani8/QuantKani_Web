<template>
  <q-layout view="lHh Lpr fFf" class="q-ma-md" style="height: 100%">
    <q-page-container>
      <div class="logo-container">
        <router-link class="logo drawer-item-logo" to="/">
          Quant<span>Kani</span>
        </router-link>
      </div>
      <q-page class="row justify-center items-center" style="min-height: 50em">
        <div class="signin-container">
          <h3 class="q-mb-lg">Log In</h3>
          <q-form @submit.prevent="signIn" class="q-gutter-md">
            <q-input
              outlined
              type="email"
              v-model="email"
              label="Email"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Required']"
              color="red"
              label-color="black"
              text-volor="white"
              input-color="white"
              bg-color="white"
              class="my-input-class"
            />
            <q-input
              outlined
              type="password"
              v-model="password"
              label="Password"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Required']"
              color="red"
              label-color="black"
              text-volor="white"
              input-color="white"
              bg-color="white"
              class="my-input-class"
            />

            <q-btn type="submit" color="red" label="Sign In" />
            <q-btn
              outline
              type="button"
              color="white"
              label="Register"
              class="q-ml-md"
              @click="register"
            />
          </q-form>
          <q-btn
            class="q-mt-md"
            color="blue"
            label="Sign In with Google"
            @click="signInWithGoogle"
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const email = ref("");
    const password = ref("");

    const signIn = () => {
      console.log("Email:", email.value);
      console.log("Password:", password.value);
      // Implement your authentication logic here
    };

    const register = () => {
      // Implement your registration logic here
    };

    const signInWithGoogle = () => {
      // Implement your Google sign-in logic here
    };

    return {
      email,
      password,
      signIn,
      register,
      signInWithGoogle,
    };
  },
});
</script>

<style scoped>
.signin-container {
  max-width: 2ooem;
}

h3 {
  color: white;
  padding-bottom: 0.3em;
  transition: transform 0.3s, color 0.3s;
}
h3:hover {
  transform: scale(1.1);
}

.my-input-class {
  width: 20em;
}

.logo-container {
  text-align: center; /* Center the logo */
  width: 100%;
}

.logo {
  font-size: 5rem;
  display: inline-block;
  vertical-align: middle;
  color: white;
  transition: color 0.5s;
}

.logo span {
  color: red;
}

.logo:hover {
  color: red;
}

.logo:hover span {
  color: white;
}
</style>
