<template>
  <v-row class="background align-center flex-column d-none d-lg-flex d-md-flex">
    <v-col cols="12" lg="4" md="4" class="d-none d-md-flex justify-start">
      <div class="d-flex justify-space-around w-100">
        <v-btn
          @click="scrollTo('images')"
          variant="text"
          class="bg-transparent text-h4"
          color="white"
          size="large"
          >Galerija</v-btn
        >
        <v-btn
          @click="scrollTo('contact')"
          variant="text"
          class="bg-transparent text-h4"
          size="large"
          color="white"
          >Kontakt</v-btn
        >
        <v-btn
          @click="scrollTo('info')"
          variant="text"
          class="bg-transparent text-h4"
          size="large"
          color="white"
          >O nama</v-btn
        >
      </div>
    </v-col>

    <v-col cols="12" lg="4" md="4" class="d-none d-md-flex justify-end">
      <v-img
        @click="backToTop"
        class="logo"
        height="170"
        src="/src/assets/images/mdEarthLogo5.png"
        alt="logo"
      ></v-img>
    </v-col>
  </v-row>
  <v-row class="mobile">
    <v-col cols="4" class="d-flex d-md-none align-center">
      <v-menu
        v-model="menu"
        close-on-content-click
        offset-y
        transition="scale-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn icon variant="text" v-bind="props" class="bg-transparent">
            <v-icon size="x-large">mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list density="compact">
          <v-list-subheader>Meni</v-list-subheader>
          <v-list-item @click="scrollTo('images')"
            ><v-icon class="me-2">mdi-image</v-icon>Galerija</v-list-item
          >
          <v-list-item @click="scrollTo('info')"
            ><v-icon class="me-2">mdi-information-outline</v-icon>O
            nama</v-list-item
          >
          <v-list-item @click="scrollTo('contact')"
            ><v-icon class="me-2">mdi-phone</v-icon>Kontakt</v-list-item
          >
        </v-list>
      </v-menu>
    </v-col>

    <v-col cols="4" class="d-flex d-md-none align-center">
      <v-img
        @click="backToTop"
        class="logo"
        max-height="100"
        src="/src/assets/images/mdEarthLogo5.png"
        alt="logo"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  scrollToSection: Function,
});
const menu = ref(false);
const scrollTo = (section) => {
  props.scrollToSection(section);
};

const items = [
  { title: "Info", section: "info" },
  { title: "Contact", section: "contact" },
  { title: "Images", section: "images" },
];

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.logo {
  cursor: pointer;
}
.background {
  background-image: url(../assets/images/WorkField.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}
</style>
