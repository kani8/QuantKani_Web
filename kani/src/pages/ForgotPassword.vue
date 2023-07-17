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
          <h3 class="q-mb-lg" style="color: white">Reset Password</h3>
          <q-form @submit.prevent="resetPassword" class="q-gutter-md">
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
            <q-btn
              type="submit"
              color="red"
              label="Reset Password"
              class="q-mt-md"
            />
            <q-space />
            <q-btn
              outline
              type="button"
              color="white"
              label="Back to Sign In"
              class="q-mt-md"
              to="/signin"
            />
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../server/firebase"; // Ensure you adjust this import to your file structure

export default defineComponent({
  setup() {
    const email = ref("");
    const dialogVisible = ref(false);
    const dialogTitle = ref("");
    const dialogMessage = ref("");

    const resetPassword = async () => {
      try {
        await sendPasswordResetEmail(auth, email.value);
        dialogTitle.value = "Success";
        dialogMessage.value = "Password reset email sent.";
        dialogVisible.value = true;
      } catch (error) {
        console.error("Error sending password reset email: ", error);
        dialogTitle.value = "Error";
        dialogMessage.value =
          "An error occurred while sending the password reset email.";
        dialogVisible.value = true;
      }
    };

    return {
      email,
      resetPassword,
      dialogVisible,
      dialogTitle,
      dialogMessage,
    };
  },
});
</script>

<style scoped>
.signin-container {
  max-width: 2ooem;
}

h3 {
  font-size: 2rem;
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
  font-size: 2.5rem;
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
