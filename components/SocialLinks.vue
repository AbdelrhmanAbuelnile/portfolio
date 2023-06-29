<template>
  <div class="flex flex-col justify-center items-center">

    <div class="flex flex-row justify-start gap-5 w-full items-center">
      <a
        href="https://www.linkedin.com/in/abdelrahman-hany-abu-elnile"
        target="_blank"
      >
        <Icon
          name="uil:linkedin"
          class="w-10 h-10 text-slate-400 hover:text-[#0072b1]"
        />
      </a>
      <a href="https://github.com/AbdelrhmanAbuelnile" target="_blank">
        <Icon
          name="uil:github"
          class="w-10 h-10 text-slate-400 hover:text-[#333]"
        />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~01e19cc3af51978fc6"
        target="_blank"
      >
        <Icon
          name="logos:upwork"
          class="w-20 h-10 text-slate-400 hover:text-[#6fda44]"
        />
      </a>
    </div>

    <div class="flex flex-row mt-4">
      <NuxtLink to="/projects" class="btn mr-4">Projects</NuxtLink>
      <NuxtLink
        to="https://drive.google.com/file/d/102ln3i4LNMGB87sY1tO4N0lta-UAlIug/view?usp=sharing"
        target="_blank"
        class="btn"
        >Download CV</NuxtLink
      >
    </div>

  </div>
</template>

<script setup></script>

<style scoped>
.btn {
	background-size: 250%;
    animation: danceCard 4s linear infinite;
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
</style>
