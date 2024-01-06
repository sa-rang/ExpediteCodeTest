<template>
    <div class="flex max-w-2xl flex-col items-center rounded-md border md:flex-row bg-white">
        <div class="h-full w-full md:h-[200px] md:w-[300px]">
            <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="Laptop" class="h-full w-full rounded-md object-cover" />
        </div>
        <div>
            <div class="p-4">
                <h1 class="inline-flex items-center text-lg font-semibold">
                    {{ data.title }}
                </h1>
                <p class="mt-3 text-sm text-gray-600">
                    {{ data.text }}
                </p>
                <div class="mt-4">
                    <div class="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                        <button type="button"
                            class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            v-if="rolePremission == 'ALL' || rolePremission == 'PUBLISH'"
                            @click.prevent="buttonClick('publish', data.articleId)">
                            Publish
                        </button>
                        <button type="button"
                            class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                            v-if="rolePremission == 'ALL' || rolePremission == 'EDIT'"
                            @click.prevent="buttonClick('edit', data.articleId)">
                            Edit
                        </button>
                        <button type="button"
                            class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            v-if="rolePremission == 'ALL'" @click.prevent="buttonClick('delete', data.articleId)">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: {
        type: Object,
        default: null
    },
    rolePremission: {
        type: String,
        default: ""
    }
})

const emit = defineEmits(['onAction'])

const buttonClick = (iEvent, iArticleId) => {
    emit("onAction", { iEvent, iArticleId })
}

</script>

<style scoped></style>