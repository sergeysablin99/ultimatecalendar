<script setup>

</script>

<template>
  <div id="calendar-header">
    <div id="calendar-month-name-col">Ноябрь</div>
    <div id="calendar-controls-col">
      <div id="calendar-controls">
        <button id="calendar-prev-button" class="calendar-control-buttons" @click="$emit('prev-clicked')">&lt;</button>
        <button id="calendar-next-button" class="calendar-control-buttons" @click="$emit('next-clicked')">&gt;</button>
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
  border: 1px solid black;
  padding: 1px 4px;
  background-color: transparent;
  text-align: center;
  /* transition:*/
  /*width 2s,*/
  /*height 2s,*/
  /*background-color 2s,*/
  /*rotate 2s;*/
}
</style>