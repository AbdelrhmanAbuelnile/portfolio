<template>
    <div class="flex flex-col justify-center items-center mt-1">
        
        <!-- <svg id="visual" class=" mb-10 h-28 md:h-36 lg:h-96" viewBox="0 0 1200 5" width="screen" height="450" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1200" height="450" fill="#0C2147"></rect><path d="M0 138L28.5 137.5C57 137 114 136 171.2 137.5C228.3 139 285.7 143 342.8 148.3C400 153.7 457 160.3 514.2 155.7C571.3 151 628.7 135 685.8 128C743 121 800 123 857.2 125.2C914.3 127.3 971.7 129.7 1028.8 128.5C1086 127.3 1143 122.7 1171.5 120.3L1200 118L1200 0L1171.5 0C1143 0 1086 0 1028.8 0C971.7 0 914.3 0 857.2 0C800 0 743 0 685.8 0C628.7 0 571.3 0 514.2 0C457 0 400 0 342.8 0C285.7 0 228.3 0 171.2 0C114 0 57 0 28.5 0L0 0Z" fill="#fa7268"></path><path d="M0 117L28.5 117.2C57 117.3 114 117.7 171.2 122.2C228.3 126.7 285.7 135.3 342.8 131.3C400 127.3 457 110.7 514.2 109.8C571.3 109 628.7 124 685.8 133.5C743 143 800 147 857.2 141.3C914.3 135.7 971.7 120.3 1028.8 113.8C1086 107.3 1143 109.7 1171.5 110.8L1200 112L1200 0L1171.5 0C1143 0 1086 0 1028.8 0C971.7 0 914.3 0 857.2 0C800 0 743 0 685.8 0C628.7 0 571.3 0 514.2 0C457 0 400 0 342.8 0C285.7 0 228.3 0 171.2 0C114 0 57 0 28.5 0L0 0Z" fill="#ef5f67"></path><path d="M0 96L28.5 100C57 104 114 112 171.2 108.8C228.3 105.7 285.7 91.3 342.8 89.3C400 87.3 457 97.7 514.2 104.5C571.3 111.3 628.7 114.7 685.8 108.2C743 101.7 800 85.3 857.2 78.5C914.3 71.7 971.7 74.3 1028.8 79.7C1086 85 1143 93 1171.5 97L1200 101L1200 0L1171.5 0C1143 0 1086 0 1028.8 0C971.7 0 914.3 0 857.2 0C800 0 743 0 685.8 0C628.7 0 571.3 0 514.2 0C457 0 400 0 342.8 0C285.7 0 228.3 0 171.2 0C114 0 57 0 28.5 0L0 0Z" fill="#e34c67"></path><path d="M0 78L28.5 74.8C57 71.7 114 65.3 171.2 59.5C228.3 53.7 285.7 48.3 342.8 47C400 45.7 457 48.3 514.2 49.5C571.3 50.7 628.7 50.3 685.8 50.7C743 51 800 52 857.2 53.3C914.3 54.7 971.7 56.3 1028.8 55.5C1086 54.7 1143 51.3 1171.5 49.7L1200 48L1200 0L1171.5 0C1143 0 1086 0 1028.8 0C971.7 0 914.3 0 857.2 0C800 0 743 0 685.8 0C628.7 0 571.3 0 514.2 0C457 0 400 0 342.8 0C285.7 0 228.3 0 171.2 0C114 0 57 0 28.5 0L0 0Z" fill="#d53867"></path><path d="M0 22L28.5 23.3C57 24.7 114 27.3 171.2 30.2C228.3 33 285.7 36 342.8 37.8C400 39.7 457 40.3 514.2 38.7C571.3 37 628.7 33 685.8 30C743 27 800 25 857.2 24.7C914.3 24.3 971.7 25.7 1028.8 30C1086 34.3 1143 41.7 1171.5 45.3L1200 49L1200 0L1171.5 0C1143 0 1086 0 1028.8 0C971.7 0 914.3 0 857.2 0C800 0 743 0 685.8 0C628.7 0 571.3 0 514.2 0C457 0 400 0 342.8 0C285.7 0 228.3 0 171.2 0C114 0 57 0 28.5 0L0 0Z" fill="#c62368"></path></svg> -->

        <h1 class="danceB font-bold text-7xl mb-10">Tools</h1>
        <div class="px-4 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-1 md:gap-3 m-auto mb-10 lg:mb-28">
    
            <div
                v-for="icon in toolsIcon"
                :key="icon.name"
                class="thirdColor rounded-lg flex p-2 md:p-4 justify-center items-center shadow-lg m-2 md:m-4  manga-r">
                <Icon :name="icon.name" class="w-16 h-16" />
            </div>
    
        </div>
        <!-- <svg id="rev" class="h-28  md:h-36 lg:h-96" viewBox="0 0 1200 5" width="screen" height="450" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1200" height="450" fill="#0C2147"></rect><path d="M0 138L28.5 137.5C57 137 114 136 171.2 137.5C228.3 139 285.7 143 342.8 148.3C400 153.7 457 160.3 514.2 155.7C571.3 151 628.7 135 685.8 128C743 121 800 123 857.2 125.2C914.3 127.3 971.7 129.7 1028.8 128.5C1086 127.3 1143 122.7 1171.5 120.3L1200 118L1200 0L1171.5 0C1143 0 1086 0 1028.8 0C971.7 0 914.3 0 857.2 0C800 0 743 0 685.8 0C628.7 0 571.3 0 514.2 0C457 0 400 0 342.8 0C285.7 0 228.3 0 171.2 0C114 0 57 0 28.5 0L0 0Z" fill="#fa7268"></path><path d="M0 117L28.5 117.2C57 117.3 114 117.7 171.2 122.2C228.3 126.7 285.7 135.3 342.8 131.3C400 127.3 457 110.7 514.2 109.8C571.3 109 628.7 124 685.8 133.5C743 143 800 147 857.2 141.3C914.3 135.7 971.7 120.3 1028.8 113.8C1086 107.3 1143 109.7 1171.5 110.8L1200 112L1200 0L1171.5 0C1143 0 1086 0 1028.8 0C971.7 0 914.3 0 857.2 0C800 0 743 0 685.8 0C628.7 0 571.3 0 514.2 0C457 0 400 0 342.8 0C285.7 0 228.3 0 171.2 0C114 0 57 0 28.5 0L0 0Z" fill="#ef5f67"></path><path d="M0 96L28.5 100C57 104 114 112 171.2 108.8C228.3 105.7 285.7 91.3 342.8 89.3C400 87.3 457 97.7 514.2 104.5C571.3 111.3 628.7 114.7 685.8 108.2C743 101.7 800 85.3 857.2 78.5C914.3 71.7 971.7 74.3 1028.8 79.7C1086 85 1143 93 1171.5 97L1200 101L1200 0L1171.5 0C1143 0 1086 0 1028.8 0C971.7 0 914.3 0 857.2 0C800 0 743 0 685.8 0C628.7 0 571.3 0 514.2 0C457 0 400 0 342.8 0C285.7 0 228.3 0 171.2 0C114 0 57 0 28.5 0L0 0Z" fill="#e34c67"></path><path d="M0 78L28.5 74.8C57 71.7 114 65.3 171.2 59.5C228.3 53.7 285.7 48.3 342.8 47C400 45.7 457 48.3 514.2 49.5C571.3 50.7 628.7 50.3 685.8 50.7C743 51 800 52 857.2 53.3C914.3 54.7 971.7 56.3 1028.8 55.5C1086 54.7 1143 51.3 1171.5 49.7L1200 48L1200 0L1171.5 0C1143 0 1086 0 1028.8 0C971.7 0 914.3 0 857.2 0C800 0 743 0 685.8 0C628.7 0 571.3 0 514.2 0C457 0 400 0 342.8 0C285.7 0 228.3 0 171.2 0C114 0 57 0 28.5 0L0 0Z" fill="#d53867"></path><path d="M0 22L28.5 23.3C57 24.7 114 27.3 171.2 30.2C228.3 33 285.7 36 342.8 37.8C400 39.7 457 40.3 514.2 38.7C571.3 37 628.7 33 685.8 30C743 27 800 25 857.2 24.7C914.3 24.3 971.7 25.7 1028.8 30C1086 34.3 1143 41.7 1171.5 45.3L1200 49L1200 0L1171.5 0C1143 0 1086 0 1028.8 0C971.7 0 914.3 0 857.2 0C800 0 743 0 685.8 0C628.7 0 571.3 0 514.2 0C457 0 400 0 342.8 0C285.7 0 228.3 0 171.2 0C114 0 57 0 28.5 0L0 0Z" fill="#c62368"></path></svg> -->
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
const toolsIcon = [
        {
            name: 'logos:javascript',
        },
        {
            name: 'logos:typescript-icon',
        },
        {
            name: 'logos:react',
        },
        {
            name: 'logos:nextjs-icon',
        },
        {
            name: 'logos:vue',
        },
        {
            name: 'logos:nuxt-icon',
        },
        {
            name: 'logos:tailwindcss-icon',
        },
        {
            name: 'logos:nodejs-icon-alt',
        },
        {
            name: 'logos:express',
        },
        {
            name: 'logos:mongodb-icon',
        },
        {
            name: 'logos:strapi-icon',
        },
        {
            name: 'logos:stripe',
        },
        {
            name: 'logos:postman-icon',
        },
        {
            name: 'logos:vercel-icon',
        },
        {
            name: 'logos:figma',
        },
        {
            name: 'logos:git-icon',
        },
        {
            name: 'logos:github-icon',
        },
    ]
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
.thirdColor {
	background-size: 500%;
    animation: danceCard 3s linear infinite;
}
#rev {
    transform: rotate(180deg);
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
@keyframes danceCard {
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
.manga-r:nth-child(6){
    transition-delay: 350ms;
}
.manga-r:nth-child(7){
    transition-delay: 400ms;
}
.manga-r:nth-child(8){
    transition-delay: 450ms;
}
.manga-r:nth-child(9){
    transition-delay: 500ms;
}
.manga-r:nth-child(10){
    transition-delay: 550ms;
}
.manga-r:nth-child(11){
    transition-delay: 600ms;
}
.manga-r:nth-child(12){
    transition-delay: 650ms;
}
.manga-r:nth-child(13){
    transition-delay: 700ms;
}
.manga-r:nth-child(14){
    transition-delay: 750ms;
}
.manga-r:nth-child(15){
    transition-delay: 800ms;
}
.manga-r:nth-child(16){
    transition-delay: 850ms;
}
.manga-r:nth-last-child(1){
    transition-delay: 900ms;
}
</style>