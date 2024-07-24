import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Articles from "@/views/Articles.vue";
import Categories from "@/views/Categories.vue";
import Collections from "@/views/Collections.vue";
import CategoryDetail from "@/views/categories/CategoryDetail.vue";
import CategoryList from "@/views/categories/CategoryList.vue";
import ArticleDetail from "@/views/articles/ArticleDetail.vue";
import ArticleList from "@/views/articles/ArticleList.vue";
import CollectionDetail from "@/views/collections/CollectionDetail.vue";
import UserCollections from "@/views/collections/UserCollections.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/lessons',
        component: Articles,
    },
    {
        path: '/categories',
        component: Categories
    },
    {
        path: '/collections',
        component: Collections
    },
    {
        path: '/articles',
        name: 'ArticleList',
        component: ArticleList
    },
    {
        path: '/articles/:id',
        name: 'ArticleDetail',
        component: ArticleDetail,
        props: true
    },
    {
        path: '/categories',
        name: 'CategoryList',
        component: CategoryList
    },
    {
        path: '/categories/:id',
        name: 'CategoryDetail',
        component: CategoryDetail,
        props: true
    },
    {
        path: '/collections',
        name: 'UserCollections',
        component: UserCollections
    },
    {
        path: '/collections/:id',
        name: 'CollectionDetail',
        component: CollectionDetail,
        props: true
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
