<template>
    <div class="primaryColor h-screen">
        <Header />
        <div>
            uses
        </div>
        <Footer />
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'Uses',
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
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