

<template>
  <header>
    <div class="flex items-center justify-center gap-x-3">
      <h1 class="text-xl font-bold text-center mt-5 ">Expedite code test application</h1>
      <button type="button" v-if="isLogin"
        class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-1 m-"
        @click="logout">
        Logout
      </button>
    </div>
  </header>

  <main class="flex flex-col justify-center items-center p-5">
    <div v-if="!isLogin" class="w-1/4">
      <Login />
    </div>
    <div v-else class="flex flex-col justify-center items-center p-5">
      <div class="mb-5" v-if="isAdmin">
        <RoleWidget @roleChange="handleRoleChange" :roles="roleData" />
      </div>
      <div>
        <Wrapper />
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import RoleWidget from './components/RoleWidget.vue';
import Wrapper from './components/Wrapper.vue';
import Login from "./components/Login.vue"

import { useWidgetStore } from './stores/widget'
const widgetStore = useWidgetStore()

const isLogin = computed(() => widgetStore.isUserLogin);
const isAdmin = computed(() => widgetStore.isUserAdmin);
const roleData = computed(() => widgetStore.roleList);

const handleRoleChange = (iRole) => {
  widgetStore.setRolePermission(iRole)
}

const logout = () => {
  widgetStore.setLogout()
}

</script>

<style scoped></style>
