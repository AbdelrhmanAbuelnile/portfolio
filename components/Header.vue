<template>
    <header class="w-full flex flex-row justify-between items-center bg-slate-800 py-4 px-4 lg:px-8 fixed z-20 scroll-smooth">

        <div class=" text-white font-bold text-2xl lg:text-4xl ">
            <NuxtLink to="/">Abdelrahman</NuxtLink>
        </div>

        <div class="lg:block max-md:hidden flex md:flex-row md:justify-between md:items-center font-semibold capitalize text-gray-200 text-2xl ">
            <NuxtLink to="/" class="mr-4 hover:text-gray-600 duration-150">home</NuxtLink>
            <NuxtLink to="/projects" class="mr-4 hover:text-gray-600 duration-150">projects</NuxtLink>
        </div>

        <div class="links md:hidden capitalize text-white text-2xl px-2">
            <button @click="show = !show">
                <Icon name="ic:sharp-menu" class="text-2xl"/>
            </button>
            <ul v-if="show">
                <li><NuxtLink to="/" class="">home</NuxtLink></li>
                <li><NuxtLink to="/projects" class="">projects</NuxtLink></li>
            </ul>
        </div>

    </header>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<style scoped>
    .links {
        position: relative;
        z-index: 999;
    }

    .links ul {
        list-style: none;
        margin: 0;
        padding: 0;
        background-color: #1d2a49;
        position: absolute;
        right: 0;
        min-width: 200px;
        top: calc(100% + 15px);
        z-index: 1;
    }
    .links ul::before {
        content: "";
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent #3f4b5d transparent;
        position: absolute;
        right: 10px;
        top: -20px;
    } 
    .links ul li a {
        display: block;
        text-decoration: none;
        padding: 15px;
    }
    .links ul li:not(:last-child) a {
        border-bottom: 1px solid #ccc;
    }
</style>