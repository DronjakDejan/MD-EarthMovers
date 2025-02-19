<template>
  <div class="background">
    <AnimationComponent v-if="isLoading" />

    <v-row class="align-center" justify="center">
      <v-col>
        <HeaderComponent :scrollToSection="scrollToSection"></HeaderComponent>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <InfoComponent class="section" ref="infoPartRef"></InfoComponent>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <ImagesComponent class="section" ref="imagesPartRef"></ImagesComponent>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <ContactComponent
          class="section"
          ref="contactPartRef"
          @scrollToTop="scrollToTop"
        ></ContactComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <footer>
          <AppFooter />
        </footer>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import ContactComponent from "./ContactComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
import InfoComponent from "./InfoComponent.vue";
import ImagesComponent from "./ImagesComponent.vue";
import AnimationComponent from "./AnimationComponent.vue";
import { ref, onMounted } from "vue";

const imagesPartRef = ref(null);
const infoPartRef = ref(null);
const contactPartRef = ref(null);
const isLoading = ref(true);

const scrollToSection = (section) => {
  const sectionRef = {
    info: infoPartRef,
    contact: contactPartRef,
    images: imagesPartRef,
  }[section];

  if (sectionRef && sectionRef.value) {
    sectionRef.value.$el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>

<style scoped>
.background {
  background: linear-gradient(#fea201 0%, #ffffff 50%);
  height: 100%;
  color: white;
}

.section {
  display: block;
  padding: 16px;
  scroll-margin-top: 20px;
}

.v-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

.scroll-to-top-button {
  margin-top: 16px;
  text-align: center;
}
</style>
