<script setup>
import {inject, onBeforeUnmount, ref} from "vue";

const props = defineProps(['dateInfo'])
let selectedSlot = ref(null)
let {registration, registrationUpdate} = inject('registration')

let webApp = inject('webApp');
var MainButton = webApp.MainButton;

function slotClicked(num) {
  MainButton.setText("Записаться")
  MainButton.show()

  registrationUpdate([props.dateInfo.date, props.dateInfo.month, props.dateInfo.year].join('.'), props.dateInfo.slots[num])

}

onBeforeUnmount(async () => {
  MainButton.hide()
})


</script>

<template>
  <div class="calendar-date-item-slot-container">
    <div class="calendar-date-item-slot-item" v-for="(s, i) in props.dateInfo.slots">
      <input :id="`slots-${i}`" type="radio" name="slots" v-model="selectedSlot" :value="i" @click="slotClicked(i)">
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
}

.calendar-date-item-slot-item {
  border: 1px solid black;
  border-radius: var(--border-radius);
  margin: 5px 5px;
  padding: 5px 5px;
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

</style>