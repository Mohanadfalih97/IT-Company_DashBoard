import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/Signup", // تحويل المسار الأساسي إلى صفحة تسجيل الدخول
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin, // صفحة تسجيل الدخول
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup, // صفحة التسجيل
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard, // صفحة لوحة التحكم
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  // إعادة التوجيه لأي مسار غير معروف إلى صفحة تسجيل الدخول
  {
    path: "/:pathMatch(.*)*",
    redirect: "/signin",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
