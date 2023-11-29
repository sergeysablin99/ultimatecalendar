<script setup>
let webApp = window.Telegram.WebApp;
let s = webApp.themeParams.bg_color

// if (webApp.ThemeParams)
//   s = webApp.ThemeParams.bg_color
// else
//   s = "none"

const props = defineProps(['activeLeft', 'activeRight'])

function scrollLeft() {
  let container = document.getElementById('calendar-dates')
  let stepWidth = 4
  let elem = document.getElementsByClassName("calendar-date-item")[0]
  let style = window.getComputedStyle(elem)
  let width = parseInt(style.width, 10) +
      parseInt(style.marginLeft, 10) +
      parseInt(style.marginRight, 10) +
      parseInt(style.borderLeftWidth, 10) +
      parseInt(style.borderRightWidth, 10) +
      parseInt(style.paddingRight, 10) +
      parseInt(style.paddingLeft, 10)

  let div = container.scrollLeft % width

  container.scrollTo({top: 0, left: container.scrollLeft + -stepWidth * width - div, behavior: "smooth"})
}

function scrollRight() {
  let container = document.getElementById('calendar-dates')
  let stepWidth = 4
  let elem = document.getElementsByClassName("calendar-date-item")[0]
  let style = window.getComputedStyle(elem)
  let width = parseInt(style.width, 10) +
      parseInt(style.marginLeft, 10) +
      parseInt(style.marginRight, 10) +
      parseInt(style.borderLeftWidth, 10) +
      parseInt(style.borderRightWidth, 10) +
      parseInt(style.paddingRight, 10) +
      parseInt(style.paddingLeft, 10)

  let div = container.scrollLeft % width

  container.scrollTo({top: 0, left: container.scrollLeft + stepWidth * width - div, behavior: "smooth"})
}
</script>

<template>
  <div id="calendar-header">
    <div id="calendar-month-name-col">Ноябрь</div>
    <div id="calendar-controls-col">
      <div id="calendar-controls">
        <q-btn id="calendar-prev-button" :disable="!props.activeLeft" class="calendar-control-buttons"
               @click="scrollLeft">&lt;
        </q-btn>
        <!-- TODO style as telegram -->
        <q-btn id="calendar-next-button" :disable="!props.activeRight" class="calendar-control-buttons"
               @click="scrollRight">&gt;
        </q-btn>
      </div>
    </div>
  </div>
  <div>{{ "color: " + s }}</div>
</template>

<style scoped>

#calendar-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: max-content;
  justify-content: space-between;
  align-items: center;
  margin: 0 5px;
}

#calendar-controls {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: max-content;
  justify-content: space-between;
}

.calendar-control-buttons {
  margin: 5px 5px;
  border: 1px solid black;
  padding: 1px 4px;
  background-color: transparent;
  text-align: center;
}

#calendar-month-name-col {
  font-size: 18px;
}
</style>