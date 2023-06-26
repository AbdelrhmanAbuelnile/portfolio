<template>
  <div class="w-full h-screen flex justify-center items-center primaryColor">
        <div class="secondaryColor p-10 rounded-3xl flex flex-col justify-center items-center w-2/4">
        <div class="h-2/4 w-3/4 md:w-2/4 md:h-2/6 lg:w-1/4 lg:h-2/4 mx-auto text-center">
            <p class=" mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
            <p class="mt-7 text-6xl ">Ooops.</p>
            <p class=" mt-7">{{ error.message }}</p>
            <button class="btn my-7" @click="handleClearError">Go Home...</button>
        </div>
    </div>
  </div>
</template>

<script setup>
  defineProps(['error']) 

  const handleClearError = () => clearError({ redirect: '/'})
</script>