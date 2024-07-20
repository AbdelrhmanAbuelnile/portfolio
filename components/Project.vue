<template>
    <div class="flex flex-col justify-center items-center gap-2 rounded-lg shadow-lg shadow-slate-950 hover:scale-105 px-2 w-11/12 mx-auto h-[380px] bg-slate-700 duration-150 hover:border-4 border-[#fa7066]">
        <div class="overflow-hidden">
            <a :href="data.projectLink" target="_blank">
                <img :src="data.projectImg" :alt="data.projectDesc" class="w-full h-44  rounded-lg">
            </a>
        </div>
        <div class="flex flex-col justify-start items-center gap-4 w-full">
            <h1 class="text-2xl text-slate-400 font-bold">{{data.projectTitle}}</h1>
            <p class="text-lg text-slate-400 font-semibold">Tools</p>
            <div
                class="flex flex-row gap-4 justify-center items-center"
            >
                <div v-for="icon in data.projectTools">
                    <Icon :name="icon" class="w-8 h-8" />
                </div>
            </div>
            <div class="flex flex-row justify-center items-center gap-4 w-1/4">
                <a v-if="data.projectCode" :href="data.projectCode" target="_blank" class=" rounded-full bg-green-400 p-2 flex items-center justify-center hover:bg-green-600 duration-100">
                    <Icon name="logos:github-icon" class="w-5 h-5" />
                </a>
                <a :href="data.projectLink" target="_blank" class="rounded-full bg-green-400 p-2 flex items-center justify-center hover:bg-green-600 duration-100">
                    <Icon name="ph:globe-simple-duotone" class="w-5 h-5" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: Object
})
</script>

<style scoped>

</style>