<script setup>
import CarouselCalendar from "@/components/CarouserlCalendar/CarouselCalendar.vue";
import {provide, ref} from "vue";

let registration = ref({
  date: null,
  slot: null,
})

function registrationUpdate(date, slot) {
  registration.value.date = date
  registration.value.slot = slot
}

let webApp = window.Telegram.WebApp

provide('registration', {registration, registrationUpdate})
provide('webApp', webApp)

webApp.MainButton.onClick(() => {
  // webApp.sendData(registration.value)
  alert('send')
  webApp.close()
})

webApp.onEvent("themeChanged", () => alert("theme changed"))
</script>

<template>
  <CarouselCalendar/>
</template>

<!--suppress CssUnresolvedCustomProperty -->
<style>

:root {
  --bg-color: #232e39; /* var(--tg-theme-bg-color, #232e39); */
  --text-color: #ffffff; /* var(--tg-theme-text-color, #ffffff); */
  --hint-color: #7f8c97; /* var(--tg-theme-hint-color, #7f8c97); */
  --link-color: #6ab0d7; /* var(--tg-theme-link-color, #6ab0d7); */
  --button-color: #60b0e1; /* var(--tg-theme-button-color, #60b0e1); */
  --button-text-color: #ffffff; /* var(--tg-theme-button-text-color, #ffffff); */
  --secondary-bg-color: #161f25; /* var(--tg-theme-secondary-bg-color, #161f25); */

  --heading-font-size: 20px;
  --font-family: 'Roboto', sans-serif;
  --border-radius: 10%;

  font-family: var(--font-family);
  background-color: var(--bg-color);
}

</style>