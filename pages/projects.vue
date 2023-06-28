<template>
    <div class=" h-screen overflow-x-hidden">
        <Header />
        <projects />
        <Footer />
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'Projects',
  description: 'Explore the impressive projects by Abdelrahman Hany, showcasing expertise in front-end and mobile development.',
  ogTitle: 'Abdelrahman Hany - Projects',
  ogDescription: 'Explore the impressive projects by Abdelrahman Hany, showcasing expertise in front-end and mobile development.',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Abdelrahman Hany - Projects',
  twitterDescription: 'Explore the impressive projects by Abdelrahman Hany, showcasing expertise in front-end and mobile development.',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
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