<template>
    <div class="h-fit px-4 flex flex-row justify-center items-center flex-wrap py-5 mt-28 mb-20 gap-4">
        <div 
            class="w-10/12 md:w-4/12 lg:w-3/12"
            v-for="(data) in projectsData" :key="data.projectTitle">
            <Project :data="data" />
        </div>
    </div>
</template>

<script setup>
 const projectsData = [
    {
        projectTitle:'Tadhkirah',
        projectLink: 'https://tadhkirah.vercel.app/',
        projectImg: "../assets/icons/tadhkirah.png",
        projectDesc: 'Tadhkirah project is an Islamic project that allow you to read Quran, Hadith, tafser and azkar',
        projectTools: ['logos:nuxt-icon', 'logos:vue', 'logos:tailwindcss-icon'],
        projectCode: 'https://github.com/AbdelrhmanAbuelnile/Tadhkirah-full'
    },
    {
        projectTitle:'Weather app',
        projectLink: 'https://vue-weather-taupe.vercel.app',
        projectImg: "../assets/icons/weather.png",
        projectDesc: 'Weather project is app that allows you to know the weather in any city you like and save your fav to look at them without searching for them',
        projectTools: [ 'logos:vue', 'logos:tailwindcss-icon'],
        projectCode: 'https://github.com/AbdelrhmanAbuelnile/VueWeather'
    },
    {
        projectTitle:'Sourdough',
        projectLink: 'https://sourdough-figma.vercel.app/',
        projectImg: "../assets/icons/sourdouh.png",
        projectDesc: 'Sourdough is a landing page demo for any company in your mind or for even just a service',
        projectTools: ['logos:nuxt-icon', 'logos:vue', 'logos:tailwindcss-icon'],
        projectCode: 'https://github.com/AbdelrhmanAbuelnile/Sourdough-Figma'
    },
    {
        projectTitle:'X O',
        projectLink: 'https://tic-tac-toe-psi-nine.vercel.app/',
        projectImg: "../assets/icons/XO.jpeg",
        projectDesc: "X | O project is from it's name is Tic Tac Toe game that you can play with your friends offline",
        projectTools: ['logos:vue', 'logos:tailwindcss-icon'],
        projectCode: 'https://github.com/AbdelrhmanAbuelnile/Tic-Tac-Toe'
    },
    {
        projectTitle:'Rock, Paper, Scissors',
        projectLink: 'https://rock-paper-scissors-nine-sandy.vercel.app/',
        projectImg: "../assets/icons/RBS.jpeg",
        projectDesc: "it's simply a Rock paper scissors game vs the computer",
        projectTools: ['logos:vue', 'logos:tailwindcss-icon'],
        projectCode: 'https://github.com/AbdelrhmanAbuelnile/Rock-Paper-Scissors'
    },
 ]
</script>

<style scoped>

</style>