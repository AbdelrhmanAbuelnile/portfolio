<template>
	<div
		class="h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full px-4 md:py-16 lg:px-16"
	>
		<div class="flex flex-col justify-center items-start w-11/12 mb-6">
			<div class="text-slate-300 flex flex-col justify-start items-start">
				<h1 class="text-2xl font-medium mb-2 md:text-2xl lg:text-3xl">
					Hi there
				</h1>
				<p class="text-2xl font-semibold mb-2 md:text-2xl lg:text-4xl">
					My name is
					<span class="danceB text-3xl md:text-4xl lg:text-5xl"
						>Abdelrahman</span
					>
				</p>
				<v-typical
					class="blink"
					:steps="[
						' Freelancer',
						2000,
						' Front-End developer',
						2000,
						' Full-Stack developer',
						2000,
					]"
					:loop="Infinity"
					:cursor="true"
					:wrapper="'h2'"
				></v-typical>
				<ClientOnly>
					<SocialLinks />
				</ClientOnly>
			</div>
		</div>

		<div class="lg:w-2/5">
			<img
				src="https://res.cloudinary.com/dqdt57lxl/image/upload/v1754844762/Abdelrahman_Hany_Abuelnile_hc1qqy.webp"
				alt="Abdelrhaman Hany Abuelnile image"
				class="rounded-xl"
				loading="lazy"
				width="400"
				height="400"
			/>
		</div>
	</div>
</template>

<script>
import VTypical from "vue-typical";

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
	background: linear-gradient(
		90deg,
		rgb(160, 35, 198) 0%,
		rgb(226, 29, 111) 100%
	);
	background-clip: text;
	animation: move 2s linear infinite;
	background-size: 500%;
}

@keyframes move {
	0% {
		background-position: 0 100%;
	}

	50% {
		background-position: 100% 0;
	}

	100% {
		background-position: 0 100%;
	}
}

.blink {
	font-size: 1.875rem;
	line-height: 2.25rem;
	margin-bottom: 1rem;
	font-weight: 700;
}

.blink::after {
	content: "|";
	animation: blink 1s infinite step-start;
}

@keyframes blink {
	50% {
		opacity: 0;
	}
}

@media (min-width: 768px) {
	.blink {
		font-size: 2.25rem;
		line-height: 2.75rem;
	}
}
@media (min-width: 1024px) {
	.blink {
		font-size: 3.75rem /* 60px */;
		line-height: 1;
	}
}
</style>
