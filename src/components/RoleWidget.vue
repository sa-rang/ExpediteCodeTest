
<template>
  <div class="widget">
    <div class="w-[300px] rounded-md border">
      <div class="p-4">
        <h1 class="text-lg font-semibold">Role Widget</h1>
        <p class="mt-3 text-sm text-gray-600 pb-2">
          Select the role to see Actions on Articles based on Role
        </p>
        <button type="button"
          class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-1 m-"
          v-for="each in roles" :key="each.roleId" @click.prevent="selectRole(each)"
          :class="{ 'bg-green-200': selectedRole && each.roleId == selectedRole.roleId }">
          {{ each.name }}
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  roles: {
    type: Array,
    default: []
  },
})

const emit = defineEmits(['roleChange'])

const selectedRole = ref(null)

const selectRole = (iRole) => {
  selectedRole.value = iRole
  emit("roleChange", iRole)
}

</script>

<style scoped></style>
