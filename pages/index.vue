<template>
    <div class="bg-[#0F172A] w-full h-full scroll-smooth overflow-hidden">
        <Header />
        <div class="flex flex-col justify-center items-center w-full">
          <About />
          <Tools />
          <Services />
        </div>
        <Footer />
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'Abdelrhman | Home',
  description: "Welcome to my portfolio website! I'm Abdelrahman Hany, a dedicated software engineer specializing in front-end and mobile development. With expertise in Vue.js, Nuxt.js, Tailwind CSS, and Flutter, I create captivating web and mobile applications. Dive into my portfolio and explore the projects where I've leveraged the power of Vue.js and Nuxt.js to build responsive and scalable web applications with seamless navigation and interactive user interfaces. Additionally, I've honed my skills in crafting beautiful mobile experiences using Flutter, ensuring cross-platform compatibility and stunning UI designs. Through my work, I showcase the fusion of modern technologies and innovative design principles. Let's embark on this journey together, as I continue to push the boundaries of front-end and mobile development.",
  ogTitle: 'Abdelrahman Hany - Front-End & Mobile Developer Portfolio',
  ogDescription: "Discover the impressive portfolio of Abdelrahman Hany, a skilled software engineer specializing in front-end and mobile development. With expertise in Vue, Nuxt, Tailwind CSS, and Flutter, Abdelrahman creates captivating web and mobile applications that deliver seamless user experiences. Explore a collection of meticulously crafted projects showcasing elegant designs, smooth interactions, and innovative solutions. From responsive web applications powered by Vue and Nuxt to cross-platform mobile experiences developed with Flutter, Abdelrahman's work demonstrates the fusion of creativity and cutting-edge technologies. Dive in and be inspired by the possibilities of front-end and mobile development!",
  ogImage: '/favicon.ico',
  ogUrl: '[og:url]',
  twitterTitle: 'Abdelrahman Hany - Front-End & Mobile Developer Portfolio',
  twitterDescription: "Discover the impressive portfolio of Abdelrahman Hany, a skilled software engineer specializing in front-end and mobile development. With expertise in Vue, Nuxt, Tailwind CSS, and Flutter, Abdelrahman creates captivating web and mobile applications that deliver seamless user experiences. Explore a collection of meticulously crafted projects showcasing elegant designs, smooth interactions, and innovative solutions. From responsive web applications powered by Vue and Nuxt to cross-platform mobile experiences developed with Flutter, Abdelrahman's work demonstrates the fusion of creativity and cutting-edge technologies. Dive in and be inspired by the possibilities of front-end and mobile development!",
  twitterImage: '/favicon.ico',
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})
</script>

<style lang="scss" scoped>

</style>