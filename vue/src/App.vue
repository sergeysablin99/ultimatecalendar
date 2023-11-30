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
let tp = webApp.themeParams

let bg_color = ref(tp.bg_color)
let text_color = ref(tp.text_color)
let hint_color = ref(tp.hint_color)
let link_color = ref(tp.link_color)
let button_color = ref(tp.button_color)
let button_text_color = ref(tp.button_text_color)
let secondary_bg_color = ref(tp.secondary_bg_color)

provide('registration', {registration, registrationUpdate})
provide('webApp', webApp)

webApp.MainButton.onClick(() => {
  // webApp.sendData(registration.value)
  alert('send')
  webApp.close()
})

webApp.onEvent("themeChanged", () => {
  bg_color.value = ref(tp.bg_color)
  text_color.value = ref(tp.text_color)
  hint_color.value = ref(tp.hint_color)
  link_color.value = ref(tp.link_color)
  button_color.value = ref(tp.button_color)
  button_text_color.value = ref(tp.button_text_color)
  secondary_bg_color.value = ref(tp.secondary_bg_color)
})
</script>

<template>
  <CarouselCalendar/>
</template>

<!--suppress CssUnresolvedCustomProperty -->
<style>

:root {
  --bg-color: var(--tg-theme-bg-color, #232e39);
  --text-color: var(--tg-theme-text-color, #ffffff);
  --hint-color: var(--tg-theme-hint-color, #7f8c97);
  --link-color: var(--tg-theme-link-color, #6ab0d7);
  --button-color: var(--tg-theme-button-color, #60b0e1);
  --button-text-color: var(--tg-theme-button-text-color, #ffffff);
  --secondary-bg-color: var(--tg-theme-secondary-bg-color, #161f25);

  --heading-font-size: 20px;
  --font-family: 'Roboto', sans-serif;
  --border-radius: 10%;

  font-family: var(--font-family);
  background-color: var(--bg-color);
}

</style>