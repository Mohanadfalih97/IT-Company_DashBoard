<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router"; // استيراد Vue Router
import Sidenav from "./examples/Sidenav";
import Signup from "./views/Signup.vue"; // استيراد صفحة تسجيل الدخول

// الوصول إلى Vuex Store وRouter
const store = useStore();
const router = useRouter();

// حساب القيم من Vuex
const showSidenav = computed(() => store.state.showSidenav);
const layout = computed(() => store.state.layout);
const isAuthenticated = computed(() => store.state.isAuthenticated); // حالة تسجيل الدخول

// إعادة التوجيه بعد تسجيل الدخول
const handleLogin = () => {
  store.commit("setAuthenticated", true); // تحديث حالة تسجيل الدخول
  router.push("/dashboard-default"); // التوجيه إلى لوحة التحكم
};
</script>

<template>
  <!-- إذا لم يكن المستخدم مسجل الدخول -->
  <Signup v-if="!isAuthenticated" @login="handleLogin" />

  <!-- إذا كان المستخدم مسجل الدخول -->
  <div v-else>
    <div
      v-show="layout === 'landing'"
      class="landing-bg h-100 bg-gradient-primary position-fixed w-100"
    ></div>

    <sidenav v-if="showSidenav" />

    <main
      class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
    >
      <router-view />
    </main>
  </div>
</template>
