<script setup>
import {inject, onBeforeUnmount} from "vue";
import _ from "core-js/internals/array-iteration";

const props = defineProps(['dateInfo'])

function zipWithIndex(list) {
  return _.map(list, function (val, key) {
    return [val, key];
  });
}

const slotsWithIndex = zipWithIndex(props.dateInfo.slots)
const morningSlots = slotsWithIndex.filter((slotWithIndex) => slotWithIndex[0] <= "12:00")
const daySlots = slotsWithIndex.filter((slotWithIndex) => slotWithIndex[0] > "12:00" && slotWithIndex[0] < "18:00")
const eveningSlots = slotsWithIndex.filter((slotWithIndex) => slotWithIndex[0] >= "18:00")

let {registration, registrationUpdate} = inject('registration')

let webApp = inject('webApp');
var MainButton = webApp.MainButton;

function slotClicked(selectedSlot) {
  MainButton.setText("Записаться")
  MainButton.show()

  registrationUpdate([props.dateInfo.date, props.dateInfo.month, props.dateInfo.year].join('.'), selectedSlot)

}

onBeforeUnmount(async () => {
  MainButton.hide()
})


</script>

<template>
  <div class="slot-section" v-if="morningSlots.length > 0">
    <div class="slot-section-header">Утро</div>
    <div class="calendar-date-item-slot-container">
      <div class="calendar-date-item-slot-item" v-for="sWi in morningSlots">
        <input :id="`slots-${sWi[1]}`" type="radio" name="slots" :value="sWi[1]" @click="slotClicked(sWi[0])">
        <label :for="`slots-${sWi[1]}`">
          {{ sWi[0] }}
        </label>
      </div>
    </div>
  </div>
  <div class="slot-section" v-if="daySlots.length > 0">
    <div class="slot-section-header">День</div>
    <div class="calendar-date-item-slot-container">
      <div class="calendar-date-item-slot-item" v-for="sWi in daySlots">
        <input :id="`slots-${sWi[1]}`" type="radio" name="slots" :value="sWi[1]" @click="slotClicked(sWi[0])">
        <label :for="`slots-${sWi[1]}`">
          {{ sWi[0] }}
        </label>
      </div>
    </div>
  </div>
  <div class="slot-section" v-if="eveningSlots.length > 0">
    <div class="slot-section-header">Вечер</div>
    <div class="calendar-date-item-slot-container">
      <div class="calendar-date-item-slot-item" v-for="sWi in eveningSlots">
        <input :id="`slots-${sWi[1]}`" type="radio" name="slots" :value="sWi[1]" @click="slotClicked(sWi[0])">
        <label :for="`slots-${sWi[1]}`">
          {{ sWi[0] }}
        </label>
      </div>
    </div>
  </div>

</template>

<style scoped>
.calendar-date-item-slot-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.calendar-date-item-slot-item {
  border: 1px solid black;
  border-radius: var(--border-radius);
  padding: 10px 10px;
//margin: 5px 5px; margin-top: 10px;
  margin-right: 10px;
  justify-content: start;
  flex-shrink: 0;
  background-color: var(--secondary-bg-color);
  color: var(--text-color)
}

.calendar-date-item-slot-item input[type=radio] {
  display: none;
}

.calendar-date-item-slot-item label {
  cursor: pointer;
}

/* Checked */
.calendar-date-item-slot-item:has(input[type=radio]:checked) {
  background: var(--button-color);
  color: var(--button-text-color);
}

.slot-section-header {
  color: var(--text-color);
  font-weight: bold;
  font-size: var(--heading-font-size);
}

.slot-section {
  margin: 10px 10px;
}

</style>