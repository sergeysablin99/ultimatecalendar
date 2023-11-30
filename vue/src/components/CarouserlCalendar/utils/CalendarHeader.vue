<script setup>
let webApp = window.Telegram.WebApp;
let s = webApp.themeParams

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
        <button id="calendar-prev-button" :disabled="!props.activeLeft" class="calendar-control-buttons"
               @click="scrollLeft">&lt;
        </button>
        <button id="calendar-next-button" :disabled="!props.activeRight" class="calendar-control-buttons"
               @click="scrollRight">&gt;
        </button>
      </div>
    </div>
  </div>
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
//border: 1px solid black; //border-radius: var(--border-radius); padding: 5px 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: var(--heading-font-size);
  color: var(--link-color);
}

#calendar-month-name-col {
  color: var(--text-color);
  font-weight: bold;
  font-size: var(--heading-font-size);
}

button:disabled {
  pointer-events: unset !important;
  cursor: default;
  color: var(--hint-color);
}
</style>