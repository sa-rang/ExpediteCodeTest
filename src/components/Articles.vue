<template>
    <div class="border p-5 bg-orange-100 ">
        Article Container Component
        <div class="flex flex-wrap flex-col gap-2 mt-2">
            <Card v-for="eachArticle in allArticleList" :key="eachArticle.articleId" :data="eachArticle"
                :role-premission="rolePremission" @onAction="handleArticleAction" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import Card from './Card.vue';
import { useWidgetStore } from '../stores/widget'

const widgetStore = useWidgetStore()
const allArticleList = computed(() => widgetStore.articleList);
const rolePremission = computed(() => widgetStore.rolePermission);

const handleArticleAction = (iData) => {
    console.log(iData)
}

</script>

