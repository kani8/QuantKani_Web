<template>
  <q-layout view="lHh Lpr fFf" class="q-ma-md" style="height: 100%">
    <q-page-container>
      <div class="logo-container">
        <router-link class="logo drawer-item-logo" to="/">
          Quant<span>Kani</span>
        </router-link>
      </div>
      <q-page class="row justify-center items-center" style="min-height: 50em">
        <div class="register-container">
          <h3 class="q-mb-lg centered">Register</h3>
          <q-form @submit.prevent="register" class="q-gutter-md">
            <q-input
              outlined
              v-model="firstName"
              label="First Name"
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
              v-model="lastName"
              label="Last Name"
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
            <q-input
              outlined
              type="password"
              v-model="confirmPassword"
              label="Confirm Password"
              lazy-rules
              :rules="[
                (val) => (val && val === password) || 'Passwords must match',
              ]"
              color="red"
              label-color="black"
              text-volor="white"
              input-color="white"
              bg-color="white"
              class="my-input-class"
            />
            <div class="centered-button">
              <q-btn type="submit" color="red" label="Done" />
            </div>
          </q-form>
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
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../server/firebase";
import axios from "axios";
import { FirebaseError } from "firebase/app";
import { useQuasar } from "quasar";
import { Dialog } from "quasar";

export default defineComponent({
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const router = useRouter();
    const $q = useQuasar();
    const dialogVisible = ref(false);
    const dialogMessage = ref("");

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

    const register = async () => {
      if (password.value !== confirmPassword.value) {
        console.error("Password and confirm password don't match!");
        return;
      }

      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );

        const displayName = `${firstName.value} ${lastName.value}`;

        await updateProfile(user, { displayName });

        await axios.post("http://localhost:5000/user/register", {
          uid: user.uid,
          displayName,
          email: email.value,
        });

        await sendEmailVerification(user);

        router.push({ name: "Signin" });
      } catch (error) {
        handleRegistrationError(error as FirebaseError);
      }
    };

    return {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      register,
      dialogVisible,
      dialogMessage,
    };
  },
});
</script>

<style scoped>
.register-container {
  max-width: 200em;
}

h3.centered {
  font-size: 2rem;
  color: white;
  padding-bottom: 0.3em;
  text-align: center;
  transition: transform 0.3s, color 0.3s;
}
h3.centered:hover {
  transform: scale(1.1);
}

.my-input-class {
  width: 20em;
}

.centered-button {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}

.logo-container {
  text-align: center; /* Center the logo */
  width: 100%;
}

.logo {
  font-size: 2.5rem !important;
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
