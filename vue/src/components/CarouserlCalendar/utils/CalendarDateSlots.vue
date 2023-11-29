<script setup>
import {onBeforeUnmount, ref} from "vue";

const props = defineProps(['slots'])
let selectedSlot = ref(null)

let webApp = window.Telegram.WebApp;
var MainButton = webApp.MainButton;


function slotClicked(num) {
  MainButton.setText("Selected slot:" + num)
  MainButton.show();
}

onBeforeUnmount(() => {
  selectedSlot.value = null
  MainButton.hide();

})
</script>

<template>
  <div class="calendar-date-item-slot-container">
    <div class="calendar-date-item-slot-item" v-for="(s, i) in slots">
      <input :id="`slots-${i}`" type="radio" name="slots" v-model="selectedSlot" :value="i" @click.end="slotClicked(i)">
      <label :for="`slots-${i}`">
        {{ s }}
      </label>
    </div>
  </div>
</template>

<style scoped>
.calendar-date-item-slot-container {
  display: flex;
  flex-direction: row;
  font-size: 18px;
}

.calendar-date-item-slot-item {
  border: 1px solid black;
  border-radius: 10%;
  margin: 5px 5px;
  padding: 5px 5px;
  justify-content: start;
  flex-shrink: 0;
}

.calendar-date-item-slot-item input[type=radio] {
  display: none;
}

.calendar-date-item-slot-item label {
  cursor: pointer;
}

/* Checked */
.calendar-date-item-slot-item:has(input[type=radio]:checked) {
  background: #ffe0a6; /* TODO telegram styles */
}

/* Hover */
.calendar-date-item-slot-item:hover {
  background-color: #000;
}
</style>