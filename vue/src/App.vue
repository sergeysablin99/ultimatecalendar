<script setup>

import CarouselCalendar from "@/components/CarouserlCalendar/CarouselCalendar.vue";
</script>

<template>
  <CarouselCalendar/>
</template>

<style>

:root {
  --bg-color: var(--tg-theme-bg-color, white); /* todo override default colors */
  --text-color: var(--tg-theme-text-color, black);
  --hint-color: var(--tg-theme-hint-color, grey);
  --link-color: var(--tg-theme-link-color, blue);
  --button-color: var(--tg-theme-button-color, #4d4df6);
  --button-text-color: var(--tg-theme-button-text-color, #f6ee4d);
  --secondary-bg-color: var(--tg-theme-secondary-bg-color, #626060);

  --heading-font-size: 20px;
  --font-family: 'Roboto', sans-serif;
  --border-radius: 10%;

  font-family: var(--font-family);
}

</style>