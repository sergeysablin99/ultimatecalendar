<script setup>

import CalendarDateItemContainer from "@/components/CarouserlCalendar/utils/CalendarDateItemContainer.vue";
import CalendarHeader from "@/components/CarouserlCalendar/utils/CalendarHeader.vue";
import {ref} from "vue";
import CalendarDateSlots from "@/components/CarouserlCalendar/utils/CalendarDateSlots.vue";

let isActiveScrollLeft = ref(false)
let isActiveScrollRight = ref(true)
let selectedDate = ref(null)

let onscrollendexists = "onscrollend" in window
let onscrollexists = "onscroll" in window
let scrollBehavior = onscrollendexists ? "scrollend" : "scroll"
let d = []
for (let i = 0; i < 100; i++)
  d.push({
    weekDay: "Пн",
    date: i,
    month: i,
    year: 2023,
    slots: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]
  })

// let dates = ref([
//   {
//     weekDay: "Пн",
//     date: 1,
//     slots: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]
//   },
//   {
//     weekDay: "Вт",
//     date: 2,
//     slots: ["11:00", "13:00", "15:00", "17:00", "18:00", "21:00"]
//   }
// ])

let dates = ref(d)

function handleScroll() {
  let container = document.getElementById('calendar-dates')
  isActiveScrollLeft.value = container.scrollLeft > 0
  isActiveScrollRight.value = (container.scrollWidth - container.clientWidth - container.scrollLeft) > 0
}

</script>

<template>
  <div id="calendar-container">
    <div id="calendar-header-row">
      <CalendarHeader :active-left="isActiveScrollLeft" :active-right="isActiveScrollRight"/>
    </div>
    <div id="calendar-dates-row">
      <div id="calendar-dates" @[scrollBehavior]="handleScroll">
        <div class="calendar-date-item" v-for="(d, i) in dates">
          <input :id="`radio-${i}`" type="radio" name="radio" v-model="selectedDate" :value="i">
          <label :for="`radio-${i}`">
            <CalendarDateItemContainer>
              <template #date>{{ d.date }}</template>
              <template #day-of-week>{{ d.weekDay }}</template>
            </CalendarDateItemContainer>
          </label>
        </div>
      </div>
    </div>
    <div id="calendar-slots-row" v-if="selectedDate !== null">
      <CalendarDateSlots :dateInfo="dates[selectedDate]" :key="selectedDate"/>
    </div>
    <div> {{ onscrollendexists }} {{ onscrollexists }} {{ scrollBehavior }}</div>
  </div>
</template>

<style scoped>
#calendar-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  padding: 0 1%;
  box-sizing: border-box;
}

#calendar-dates {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: max-content;
  justify-content: flex-start;
  overflow-x: scroll;
  flex: 0 0 auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
}

#calendar-dates::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.calendar-date-item {
  border: 1px solid black;
  border-radius: var(--border-radius);
  margin: 5px 5px;
  padding: 5px 5px;
  justify-content: center;
  flex-shrink: 0;
  background-color: var(--secondary-bg-color);
}

.calendar-date-item input[type=radio] {
  display: none;
}

.calendar-date-item label {
  cursor: pointer;
}

/* Checked */
.calendar-date-item:has(input[type=radio]:checked) {
  background: var(--button-color);
  color: var(--button-text-color);
}


</style>