<template>
  <div class="loader">
    <div class="loader-content">
      <v-icon size="64" color="white">mdi-excavator</v-icon>
      <v-progress-circular
        indeterminate
        size="64"
        color="white"
        class="mt-4"
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoaderComponent",
};
</script>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 165, 0, 0.9); /* Mutno narandžasta */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 1s ease-out;
}

.loader-content {
  text-align: center;
}

.loader.fade-out {
  animation: fadeOut 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
