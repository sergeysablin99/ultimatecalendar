<script setup>
import CarouselCalendar from "@/components/CarouserlCalendar/CarouselCalendar.vue";
import {onMounted, provide, ref} from "vue";

let a = ref('0')
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

onMounted(() => {
  window.Telegram.WebApp.onEvent('mainButtonClicked', () => {
    webApp.sendData(registration.value)
    alert('send')
    a.value += 1
  })
})
</script>

<template>
  <CarouselCalendar/>
  <div>{{ a }}</div>
</template>

<!--suppress CssUnresolvedCustomProperty -->
<style>

:root {
  --bg-color: var(--tg-theme-bg-color, #ffffff);
  --text-color: var(--tg-theme-text-color, #000000);
  --hint-color: var(--tg-theme-hint-color, #8e8e93);
  --link-color: var(--tg-theme-link-color, #3b8fbb);
  --button-color: var(--tg-theme-button-color, #3b8fbb);
  --button-text-color: var(--tg-theme-button-text-color, #ffffff);
  --secondary-bg-color: var(--tg-theme-secondary-bg-color, #efeff4);

  --heading-font-size: 20px;
  --font-family: 'Roboto', sans-serif;
  --border-radius: 10%;

  font-family: var(--font-family);
}

</style>