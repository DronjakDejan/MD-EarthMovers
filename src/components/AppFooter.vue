<template>
  <v-footer class="footer">
    <v-row
      ><v-col class="text-center mt-4" cols="12">
        © {{ new Date().getFullYear() }} —
        <strong>MD Earth Movers doo Beograd .All Rights Reserved</strong>
      </v-col>
      <v-col class="d-flex justify-center" cols="12">
        <v-img
          alt="G-symbol"
          max-height="50"
          max-width="50"
          src="/src/assets/images/slikaG11.png"
        ></v-img>
      </v-col> </v-row
  ></v-footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background-color: #252908;
  color: aliceblue;
}
</style>
