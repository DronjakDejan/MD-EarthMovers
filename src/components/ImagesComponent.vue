<template>
  <v-container fluid>
    <v-card elevation="0">
      <v-card-title
        primary-title
        class="text-md-h2 text-sm-h5 text-xs-h6 text-center"
      >
        Galerija
      </v-card-title>
      <v-row>
        <v-col
          v-for="(image, index) in images"
          :key="index"
          class="d-flex child-flex"
          cols="6"
          xs="6"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          @click="openDialog(image)"
        >
          <v-img
            :lazy-src="image"
            :src="image"
            aspect-ratio="1"
            class="bg-grey-lighten-2"
            cover
            alt="gallery-images"
          >
            <template v-slot:placeholder>
              <v-row align="center" class="fill-height ma-0" justify="center">
                <v-progress-circular
                  color="grey-lighten-5"
                  indeterminate
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="800">
        <v-img
          :src="selectedImage"
          :aspect-ratio="1"
          class="elevation-5"
          cover
          alt="Cover Image"
        />
      </v-dialog>
    </v-card>
  </v-container>
</template>

<script setup>
import slika1 from "@/assets/images/slika1.jpeg";
import slika2 from "@/assets/images/slika2.jpeg";
import slika3 from "@/assets/images/slika3.jpeg";
import slika4 from "@/assets/images/slika4.jpeg";
import slika5 from "@/assets/images/slika5.jpeg";
import slika6 from "@/assets/images/slika6.jpeg";
import slika7 from "@/assets/images/slika7.jpeg";
import slika8 from "@/assets/images/slika8.jpeg";
import slika9 from "@/assets/images/slika9.jpeg";
import slika10 from "@/assets/images/slika10.jpeg";
import slika11 from "@/assets/images/slika11.jpeg";
import slika12 from "@/assets/images/slika12.jpeg";
import slika13 from "@/assets/images/slika13.jpeg";
import slika14 from "@/assets/images/slika14.jpeg";
import slika15 from "@/assets/images/slika15.jpeg";
import slika16 from "@/assets/images/slika16.jpeg";
import slika17 from "@/assets/images/slika18.jpeg";
import slika18 from "@/assets/images/slika19.jpeg";
import slika19 from "@/assets/images/slika20.jpeg";
import slika20 from "@/assets/images/slika21.jpeg";
import slika21 from "@/assets/images/slika22.jpeg";
import slika22 from "@/assets/images/slika17.jpeg";
import slika23 from "@/assets/images/slika23.jpeg";
import slika24 from "@/assets/images/slika24.jpeg";

import { ref } from "vue";

const images = ref([
  slika1,
  slika2,
  slika3,
  slika4,
  slika5,
  slika6,
  slika7,
  slika8,
  slika9,
  slika10,
  slika11,
  slika12,
  slika13,
  slika14,
  slika15,
  slika16,
  slika17,
  slika18,
  slika19,
  slika20,
  slika21,
  slika22,
  slika23,
  slika24,
]);
const selectedImage = ref("");

const dialog = ref(false);

const openDialog = (image) => {
  selectedImage.value = image;
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
};
</script>
<style scoped>
.v-card {
  background-color: transparent;
}

.v-img {
  transition: transform 0.4s ease-in-out;
}

.v-img:hover {
  transform: scale(1.07);
}

.v-dialog .v-img {
  max-height: 90vh;
  object-fit: contain;
}

.v-img {
  transition: transform 0.4s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

.v-img:hover {
  transform: scale(1.07);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
}
</style>
