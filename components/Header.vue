<template>
    <header class="w-full flex flex-row justify-between items-center bg-slate-800 py-6 px-4 lg:px-8 fixed z-20 scroll-smooth">

        <div class=" text-white font-bold text-2xl lg:text-4xl ">
            <NuxtLink to="/">Abdelrahman</NuxtLink>
        </div>

        <div class="lg:block max-md:hidden flex md:flex-row md:justify-between md:items-center font-semibold capitalize text-gray-200 text-2xl ">
            <NuxtLink to="/" class="mr-4 hover:text-gray-600 duration-150">home</NuxtLink>
            <NuxtLink to="/projects" class="mr-4 hover:text-gray-600 duration-150">projects</NuxtLink>
        </div>

        <div class="links md:hidden capitalize text-gray-400 text-2xl px-2">
            <span id="menu" class=" w-6 cursor-pointer">
                <span class="bg-white mb-2"></span>
                <span class="bg-white mb-2"></span>
                <span class="bg-white"></span>
            </span>
            <ul>
                <li><NuxtLink to="/" class="">home</NuxtLink></li>
                <li><NuxtLink to="/projects" class="">projects</NuxtLink></li>
            </ul>
        </div>

    </header>
</template>

<script setup>

</script>

<style scoped>
    .links {
        position: relative;
        z-index: 999;
    }
    
    header #menu span:nth-child(2){
        width: 100%;
    }
    
    header #menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
    }
    
    header #menu span {
        background-color: #fff;
        height: 2px;
    }
    
    header #menu span:first-child{
        width: 50%;
        transition: 0.3s;
    }
    
    header #menu span:nth-child(2){
        width: 100%;
    }
    
    header #menu span:last-child{
        width: 50%;
        transition: 0.3s;
    }
    
    header #menu:hover span:first-child{
        width: 100%;
    }
    
    header #menu:hover span:last-child{
        width: 100%;
    }
    .links ul {
        list-style: none;
        margin: 0;
        padding: 0;
        background-color: #0f172a;
        position: absolute;
        right: 0;
        min-width: 200px;
        top: calc(100% + 15px);
        display: none;
        z-index: 1;
    }
    .links ul::before {
        content: "";
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent #3f4b5d transparent;
        position: absolute;
        right: 5px;
        top: -20px;
    } 
    .links:hover ul{
        display: block;
    }
    .links ul li a {
        display: block;
        text-decoration: none;
        padding: 15px;
        transition: 0.3s;
    }
    .links ul li a:hover{
        padding-left: 25px;
    }
    .links ul li:not(:last-child) a {
        border-bottom: 1px solid #ccc;
    }
    /* header {
        background-image: url('../assets/icons/waves.svg');
        background-repeat: no-repeat;
        background-size: cover;
    } */
</style>