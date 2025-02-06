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
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "MD Earth Movers",
        url: "https://md-earthmovers.com",
        logo: "https://md-earthmovers.com/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+381613194025",
          contactType: "customer service",
        },
        description:
          "MD Earth Movers - Izgradnja fekalne kanalizacione mreže, vodovoda i optičkih kablova.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Srbija",
          addressCountry: "RS",
        },
      }),
    },
  ],
  title: "MD Earth Movers - Građevinska Oprema i Usluge",
  meta: [
    {
      name: "description",
      content:
        "MD Earth Movers - Lider u izgradnji fekalne kanalizacione mreže, vodovodnih instalacija i postavljanju optičkih kablova. Kvalitetni i profesionalni građevinski radovi.",
    },
    {
      name: "keywords",
      content:
        "građevinska firma, fekalna kanalizacija, vodovodne instalacije, optički kablovi, MD Earth Movers, iskopavanje, građevinski radovi",
    },
    {
      property: "og:title",
      content: "MD Earth Movers - Građevinska Oprema i Usluge",
    },
    {
      property: "og:description",
      content:
        "Lider u izgradnji kanalizacione mreže, vodovodnih instalacija i optičkih kablova. Dugogodišnje iskustvo i kvalitetni radovi.",
    },
    {
      property: "og:image",
      content: "/images/mdEarth.jpeg",
    },
    {
      property: "og:url",
      content: "https://md-earthmovers.com",
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
<style >
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
