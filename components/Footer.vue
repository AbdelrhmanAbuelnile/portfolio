<template>
    <footer class="flex flex-row justify-between items-center text-gray-200 lg:px-10 px-2">
        
        <div>
            <p class="md:text-3xl text-lg font-bold mb-8">Copyright © {{ currentYear }} | <a href="https://www.linkedin.com/in/abdelrahman-hany-abu-elnile" class="hover:text-gray-600" target='_blank'>Abdelrhman</a> </p>
        </div>

        <div class="flex flex-row justify-between items-center w-fit px-4">
            <a :href="icons.url" target='_blank' v-for="icons in toolsIcon" :key="icons.name">
                <Icon :name="icons.name" :class="`w-14 h-10 mx-2 text-slate-400 hover:text-[${icons.color}] duration-300`" />
            </a>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentDate = ref(new Date());
const currentYear = ref(currentDate.value.getFullYear());

const toolsIcon = [
        {
            name: 'uil:linkedin',
            url: 'https://www.linkedin.com/in/abdelrahman-hany-abu-elnile',
            color:'#0072b1'
        },
        {
            name: 'uil:github',
            url: 'https://github.com/AbdelrhmanAbuelnile',
            color: '#333'
        },
        {
            name: 'bxl:upwork',
            url: 'https://www.upwork.com/freelancers/~01e19cc3af51978fc6',
            color: '#6fda44'
        },
    ]
</script>

<style scoped>
    footer {
        background-image: url('../assets/icons/footer.svg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 300px;
    }
</style>