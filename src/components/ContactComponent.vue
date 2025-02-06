<template>
  <v-container class="contact-container" fluid>
    <v-card elevation="0" class="contact-card-wrapper">
      <v-card-title primary-title class="text-md-h2 text-center">
        Kontakt
      </v-card-title>

      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-card class="contact-card" elevation="0">
            <v-card-title>
              <v-icon class="contact-icon">mdi-phone</v-icon>
              Kontakt telefon
            </v-card-title>
            <v-card-text>
              <p class="number">061-3194-025</p>
              <v-btn
                variant="text"
                :href="'tel:+381613194025'"
                class="contact-button"
              >
                Pozovite
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card class="contact-card" elevation="0">
            <v-card-title>
              <v-icon class="contact-icon">mdi-email</v-icon>
              E:mail
            </v-card-title>
            <v-card-text>
              <p>office@mdearthmovers.com</p>
              <p>sr@mdearthmovers.com</p>
              <v-btn
                variant="text"
                :href="'mailto:office@mdearthmovers.com'"
                class="contact-button"
              >
                Pošaljite e-mail
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-4">
        <v-btn
          class="back-to-top-button"
          @click="scrollToTop"
          icon
          color="#fea201"
          width="56"
          height="56"
        >
          <v-icon size="32" color="white">mdi-chevron-up</v-icon>
        </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.contact-container {
  background-image: url(../assets/images/excavatorBackground1.jpg);
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
}
.contact-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 1;
}
.contact-card p {
  font-size: 1.7rem;
  font-weight: bold;
  color: #333;
}
.contact-card-wrapper {
  background-color: transparent;
  z-index: 2;
}

.contact-card {
  background: rgba(255, 255, 255, 0.3);
  width: auto;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  min-height: 200px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.contact-icon {
  margin-right: 10px;
  color: #fea201;
  font-size: 2.5rem;
}

.number {
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;
}

.contact-button {
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #fea201;
}

.contact-button:hover {
  text-decoration: underline;
}

.back-to-top-button {
  background-color: #fea201;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
}

.back-to-top-button:hover {
  background-color: #d98c00;
}

@media (min-width: 768px) {
  .contact-card {
    min-height: 250px;
    padding: 24px;
  }
}

@media (min-width: 1200px) {
  .contact-card {
    min-height: 300px;
    padding: 32px;
  }
}
@media (max-width: 767px) {
  .contact-card p {
    font-size: 1rem;
  }
}
</style>
