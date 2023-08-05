import { reactive, toRefs, computed } from "vue";
import { auth } from "../server/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

interface User {
  displayName: string;
  email: string;
  uid: string;
  role: string;
}

const state = reactive({ user: null as User | null, isAdmin: false });

const adminUIDs = ["RThCIcF1WTZRT00EbR6gIOdIj3X2"]; // List of all the admin UIDs

onAuthStateChanged(auth, (userAuth) => {
  if (userAuth) {
    const userRole = adminUIDs.includes(userAuth.uid) ? "admin" : "guest";

    state.user = {
      displayName: userAuth.displayName || "",
      email: userAuth.email || "",
      uid: userAuth.uid,
      role: userRole,
    };
    state.isAdmin = state.user.role === "admin";
  } else {
    state.user = null;
    state.isAdmin = false;
  }
});

export default function useUserState() {
  const loggedIn = computed(() => state.user !== null);

  const logOut = async () => {
    await signOut(auth);
    state.user = null;
    state.isAdmin = false;
    return Promise.resolve();
  };

  return {
    ...toRefs(state),
    loggedIn: loggedIn,
    logOut,
  };
}
