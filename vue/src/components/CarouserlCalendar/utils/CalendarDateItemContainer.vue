<script setup>

</script>

<template>
  <div class="calendar-date-item-container">
    <div class="calendar-date-item-day-of-week">
      <slot name="day-of-week"></slot>
    </div>
    <div class="calendar-date-item-date">
      <slot name="date"></slot>
    </div>
  </div>
</template>

<style scoped>

.calendar-date-item-date {
  text-align: center;
}

.calendar-date-item-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20px;
  color: var(--text-color)
}
</style>