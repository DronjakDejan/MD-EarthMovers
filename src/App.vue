<template>
  <v-app>
    <v-main>
      <MainPage />
    </v-main>
  </v-app>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  htmlAttrs: {
    lang: "sr",
  },
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "MD Earth Movers",
        url: "//https://mdearthmovers.rs",
        logo: "https://mdearthmovers.rs/logo.png",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+381613194025",
            contactType: "customer service",
            availableLanguage: ["Serbian"],
            areaServed: "RS",
          },
        ],
        description:
          "MD Earth Movers - Izgradnja fekalne kanalizacione mreže, vodovodnih instalacija i optičkih kablova.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Beograd",
          addressCountry: "RS",
          postalCode: "11000",
        },
      }),
    },
  ],
  title: "MD Earth Movers - Građevinske usluge",
  meta: [
    {
      name: "description",
      content:
        "MD Earth Movers - Lider u izgradnji fekalne kanalizacione mreže, vodovodnih instalacija i postavljanju optičkih kablova. Kvalitetni i profesionalni građevinski radovi.",
    },
    {
      name: "keywords",
      content:
        "MD Earth movers, građevinska firma, fekalna kanalizacija, vodovodne instalacije, optički kablovi, MD Earth Movers, iskopavanje, građevinski radovi",
    },
    {
      property: "og:title",
      content: "MD Earth Movers - Građevinske usluge",
    },
    {
      property: "og:description",
      content:
        "Lider u izgradnji kanalizacione mreže, vodovodnih instalacija i optičkih kablova. Dugogodišnje iskustvo i kvalitetni radovi.",
    },
    {
      property: "og:image",
      content: "/assets/images/mdEarth.jpeg",
    },
    {
      property: "og:url",
      content: "https://mdearthmovers.rs",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
});
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  scroll-behavior: smooth;
  font-family: "Roboto", sans-serif;
}
img {
  max-width: 100%;
  height: auto;
}
@media (max-width: 1024px) {
  html,
  body {
    overflow-x: hidden;
  }
}
</style>
