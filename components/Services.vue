<template>
    <div class="flex flex-col justify-center items-center w-full my-10">
        <h1 class="danceB font-bold text-7xl mb-10">Services</h1>
        <div class="md:px-4 px-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3 lg:gap-4 mb-10 lg:mb-28 w-4/5">

            <div class="flex flex-col justify-center items-center rounded-md py-16 bg-gray-300 m-4 shadow-md shadow-indigo-400 manga-r delay-100">
                <Icon name="logos:figma" class="w-full h-20 mb-10" />
                <p class="text-indigo-600 text-center text-2xl font-bold">Implement figma design</p>
            </div>
            
            <div class="flex flex-col justify-center items-center rounded-md py-16 bg-gray-300 m-4 shadow-md shadow-indigo-400 manga-r delay-200">
                <Icon name="bi:ladder" class="w-full h-20 mb-10 text-[#e27209]" />
                <p class="text-indigo-600 text-2xl font-bold">Build from scratch</p>
            </div>

            <div class="flex flex-col justify-center items-center rounded-md py-16 bg-gray-300 m-4 shadow-md shadow-indigo-400 manga-r delay-300">
                <Icon name="bi:phone" class="w-full h-20 mb-10 text-fuchsia-500" />
                <p class="text-indigo-600 text-2xl font-bold">Mobile application</p>
            </div>

            <div class="flex flex-col justify-center items-center rounded-md py-16 bg-gray-300 m-4 shadow-md shadow-indigo-400 manga-r delay-[400ms]">
                <Icon name="bi:code-slash" class="w-full h-20 mb-10 text-green-600" />
                <p class="text-indigo-600 text-2xl font-bold">Simple landing page</p>
            </div>

            <div class="flex flex-col justify-center items-center rounded-md py-16 bg-gray-300 m-4 shadow-md shadow-indigo-400 manga-r delay-500">
                <Icon name="bi:wrench-adjustable" class="w-full h-20 mb-10 text-slate-700" />
                <p class="text-indigo-600 text-2xl font-bold">Code refactor</p>
            </div>

        </div>
    </div>
</template>

<script setup>
onMounted(() => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })

    const hiddenElementsRight = document.querySelectorAll('.manga-r')
    hiddenElementsRight.forEach((el) => observer.observe(el))

    const hiddenElementsleft = document.querySelectorAll('.manga-r')
    hiddenElementsleft.forEach((el) => observer.observe(el))

    const hiddenElementsUp = document.querySelectorAll('.manga-p')
    hiddenElementsUp.forEach((el) => observer.observe(el))

    const hiddenElementsDown = document.querySelectorAll('.manga-d')
    hiddenElementsDown.forEach((el) => observer.observe(el))

  } else {
    console.log('IntersectionObserver not supported')
  }
})
</script>

<style scoped>
.danceB {
	color: transparent;
	background: #003cff;
	background: linear-gradient(90deg, #fa7066 0%, #c62368 50%, #e82bd8 100%);
	background-clip: text;
	animation: move 4s linear infinite;
	background-size: 500%;
}

@keyframes move {
	0%{
		background-position: 0 100%;
	}
	
	50%{
		background-position: 100% 0;
	}

	100%{
		background-position: 0 100%;
	}
}
.manga-r {
    opacity: 0;
    transition: all 1.5s;
    transform: translateX(-100%);
    filter: blur(2px);
}
.show {
    opacity: 1;
    filter: blur(0px);
    transform: translateX(0);
}

.manga-r:first-child{
    transition-delay: 100ms;
}
.manga-r:nth-child(2){
    transition-delay: 150ms;
}
.manga-r:nth-child(3){
    transition-delay: 200ms;
}
.manga-r:nth-child(4){
    transition-delay: 250ms;
}
.manga-r:nth-child(5){
    transition-delay: 300ms;
}
</style>