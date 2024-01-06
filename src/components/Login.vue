<template>
    <div class="border p-5">
        Login

        <form class="flex  flex-col gap-2">
            <input
                class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text" placeholder="User Id" v-model="loginForm.username" />
            <input
                class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password" placeholder="Password" autocomplete="on" v-model="loginForm.password" />
            <button type="submit"
                class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                @click.prevent="login">
                Login
            </button>
        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useWidgetStore } from '../stores/widget'

const loginForm = ref({
    username: "",
    password: ""
})
const widgetStore = useWidgetStore()


const login = () => {
    //Static logic for example :: this should be validated from BE in real

    if (loginForm.value.username && loginForm.value.password && loginForm.value.password.toString() === "123") {
        //API call to BE here
        widgetStore.setLogin(loginForm.value.username)
    }
}

</script>

<style scoped></style>