<template>
      <div class="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full  mt-16 px-4 mb-10 md:py-24 lg:px-16">

            <div class="flex flex-col justify-center items-start w-11/12 mb-6 ">

              <div class="text-slate-300 flex flex-col justify-start items-start">
                  <h1 class="text-2xl font-medium mb-2 md:text-2xl lg:text-3xl">Hi there</h1>
                  <p class="text-2xl font-semibold mb-2 md:text-2xl lg:text-4xl">My name is <span class="danceB text-3xl md:text-4xl lg:text-5xl">Abdelrahman</span></p>
                  <v-typical
                    class="blink text-3xl md:text-4xl lg:text-6xl font-bold textColor dance mb-4"
                    :steps="[' Freelancer', 2000, ' Front-End developer', 2000, ' Mobile developer', 2000]"
                    :loop="Infinity"
                    :wrapper="'h2'"
                  ></v-typical>

                  <div class="flex flex-row justify-between items-center w-44">
                      <a href="https://www.linkedin.com/in/abdelrahman-hany-abu-elnile" target='_blank'>
                        <Icon name="uil:linkedin" class="w-10 h-10 text-slate-400 hover:text-[#0072b1]" />
                      </a>
                      <a href="https://github.com/AbdelrhmanAbuelnile" target='_blank'>
                        <Icon name="uil:github" class="w-10 h-10 text-slate-400 mx-4 hover:text-[#333]" />
                      </a>
                      <a href="https://www.upwork.com/freelancers/~01e19cc3af51978fc6" target='_blank'>
                        <Icon name="logos:upwork" class="w-20 h-20 text-slate-400 hover:text-[#6fda44]" />
                      </a>
                  </div>
                  <div class="flex flex-row mt-4">
                    <NuxtLink to="/projects" class="btn mr-4">Projects</NuxtLink>
                    <NuxtLink to="https://drive.google.com/file/d/102ln3i4LNMGB87sY1tO4N0lta-UAlIug/view?usp=sharing" target="_blank" class="btn">Download CV</NuxtLink>

                  </div>
              </div>

            
            </div>
        
          <div class="lg:w-3/5">
              <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  class="rounded-xl">
          </div>
      </div>
    
</template>

<script >
import VTypical from 'vue-typical';

export default {
  components: {
    VTypical,
  },
};

</script>

<style scoped>

.danceB {
	color: transparent;
	background: #003cff;
	background: linear-gradient(90deg, rgb(160, 35, 198) 0%, rgb(226, 29, 111) 100%);
	background-clip: text;
	animation: move 2s linear infinite;
	background-size: 500%;
}
.dance{
	color: transparent;
	background: rgb(250,112,102);
	background: linear-gradient(90deg, rgb(177, 29, 223) 0%, rgb(255, 57, 22) 50%), rgb(226, 29, 111) 100%;
	background-clip: text;
	animation: move 4s linear infinite;
	background-size: 500%;
}
.btn {
	background-size: 250%;
    animation: danceCard 4s linear infinite;
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
.blink::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>