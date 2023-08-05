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
            <router-link to="/forgotPassword" class="forgot-password-link"
              >Forgot password?</router-link
            >
            <div class="q-mt-md">
              <q-btn type="submit" color="red" label="Sign In" />
              <q-btn
                outline
                type="button"
                color="white"
                label="Register"
                class="q-ml-md"
                to="/registerUser"
              />
            </div>
          </q-form>
        </div>
        <q-dialog v-model="dialogVisible">
          <q-card>
            <q-card-section>
              <div class="text-h6">Error</div>
              <div>{{ dialogMessage }}</div>
            </q-card-section>
            <q-card-actions>
              <q-btn flat label="OK" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../server/firebase"; // Ensure you adjust this import to your file structure
import { FirebaseError } from "firebase/app";

export default defineComponent({
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter(); // Initialize router
    const dialogVisible = ref(false);
    const dialogMessage = ref("");

    const signIn = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        // Redirect to the home page after successful login
        router.push({ name: "journey" });
      } catch (error) {
        const firebaseError = error as FirebaseError;
        console.error("Error signing in: ", firebaseError);
        handleSignInError(firebaseError);
      }
    };

    const handleSignInError = (error: FirebaseError) => {
      switch (error.code) {
        case "auth/wrong-password":
        case "auth/user-not-found":
          dialogMessage.value = "Incorrect email or password.";
          dialogVisible.value = true;
          break;
        default:
          console.error("Error signing in: ", error);
      }
    };

    const register = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        // Redirect to the home page after successful registration
        router.push({ name: "journey" });
      } catch (error) {
        const firebaseError = error as FirebaseError;
        console.error("Error registering user: ", firebaseError);
        handleRegistrationError(firebaseError);
      }
    };

    const handleRegistrationError = (error: FirebaseError) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          dialogMessage.value =
            "The email address is already in use by another account.";
          dialogVisible.value = true;
          break;
        default:
          console.error("Error registering user: ", error);
      }
    };

    return {
      email,
      password,
      signIn,
      register,
      dialogVisible,
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
