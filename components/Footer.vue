<template>
    <footer class="flex flex-col justify-center items-start text-gray-200 lg:px-10 px-2">
        
        <div>
            <p class="md:text-3xl text-lg font-bold mb-8">Copyright © {{ currentYear }} | <a href="https://www.linkedin.com/in/abdelrahman-hany-abu-elnile" class="hover:text-gray-600" target='_blank'>Abdelrhman</a> </p>
        </div>

        <div class="flex flex-row justify-between items-center w-12">
            <a :href="icons.url" target='_blank' v-for="icons in toolsIcon" :key="icons.name">
                <Icon :name="icons.name" class="w-10 h-10 mx-2 text-slate-900" />
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
            name: 'logos:github-icon',
            url: 'https://github.com/AbdelrhmanAbuelnile'
        },
        {
            name: 'uil:linkedin',
            url: 'https://www.linkedin.com/in/abdelrahman-hany-abu-elnile'
        },
        {
            name: 'logos:upwork',
            url: 'https://www.upwork.com/freelancers/~01e19cc3af51978fc6'
        },
    ]
</script>

<style scoped>
    footer {
        background-image: url('../assets/icons/footer.svg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 500px;
    }
</style>