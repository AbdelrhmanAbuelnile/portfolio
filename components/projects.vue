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
        projectImg: "/imgs/tadhkirah.png",
        projectDesc: 'Tadhkirah project is an Islamic project that allow you to read Quran, Hadith, tafser and azkar',
        projectTools: ['logos:nuxt-icon', 'logos:vue', 'logos:tailwindcss-icon'],
        projectCode: 'https://github.com/AbdelrhmanAbuelnile/Tadhkirah-full'
    },
    {
        projectTitle:'Google Meeting Clone',
        projectLink: 'https://google-meet-clone-phi.vercel.app/',
        projectImg: "/imgs/meeting.png",
        projectDesc: "it's simply a Rock paper scissors game vs the computer",
        projectTools: ['logos:nextjs', 'logos:react', 'logos:typescript-icon', 'logos:tailwindcss-icon'],
        projectCode: 'https://github.com/AbdelrhmanAbuelnile/google-meet-clone'
    },
    {
        projectTitle:'Elmazr3a Elsa3eda',
        projectLink: 'https://mazr3a-front.vercel.app/',
        projectImg: "/imgs/elmazr3a.png",
        projectDesc: "it's simply a Rock paper scissors game vs the computer",
        projectTools: ['logos:react', 'logos:tailwindcss-icon', 'logos:nodejs-icon-alt', 'logos:mongodb-icon', 'logos:postman-icon'],
        projectCode: 'https://github.com/Elmazr3a-elsa3eda/frontend'
    },
    {
        projectTitle:'Gamers Launge',
        projectLink: 'https://gamers-lounge.vercel.app/',
        projectImg: "/imgs/gamers.png",
        projectDesc: "it's simply a Rock paper scissors game vs the computer",
        projectTools: ['logos:nextjs', 'logos:react', 'logos:stripe', 'logos:strapi-icon', 'logos:tailwindcss-icon'],
        projectCode: 'https://github.com/AbdelrhmanAbuelnile/gamers-lounge'
    },
    {
        projectTitle:'Spec Novo',
        projectLink: 'https://specnovo-six.vercel.app/',
        projectImg: "/imgs/specnovo.png",
        projectDesc: 'Weather project is app that allows you to know the weather in any city you like and save your fav to look at them without searching for them',
        projectTools: [ 'logos:react', 'logos:tailwindcss-icon'],
    },
    {
        projectTitle:'AppStart',
        projectLink: 'https://appstart.vercel.app/',
        projectImg: "/imgs/Appstart.png",
        projectDesc: "X | O project is from it's name is Tic Tac Toe game that you can play with your friends offline",
        projectTools: ['logos:react', 'logos:tailwindcss-icon'],
    },
 ]
</script>

<style scoped>

</style>