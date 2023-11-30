<script setup>

import CalendarDateItemContainer from "@/components/CarouserlCalendar/utils/CalendarDateItemContainer.vue";
import CalendarHeader from "@/components/CarouserlCalendar/utils/CalendarHeader.vue";
import {onMounted, ref} from "vue";
import CalendarDateSlots from "@/components/CarouserlCalendar/utils/CalendarDateSlots.vue";

let isActiveScrollLeft = ref(false)
let isActiveScrollRight = ref(true)
let selectedDate = ref(null)

let onscrollendexists = "onscrollend" in window
let scrollBehavior = onscrollendexists ? "scrollend" : "scroll"

let observableMonth = ref()
let d = []
for (let i = 26; i < 31; i++)
  d.push({
    weekDay: "Пн",
    date: i,
    month: "Ноябрь",
    year: 2023,
    slots: ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
      "13:00", "13:30", "14:00", "14:30", "18:00", "19:00"
    ]
  })

for (let i = 0; i < 20; i++)
  d.push({
    weekDay: "Пн",
    date: i,
    month: "Декабрь",
    year: 2023,
    slots: ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
      "13:00", "13:30", "14:00", "14:30", "18:00", "19:00"
    ]
  })


let dates = ref(d)

function refreshVisibleMonths() {
  let container = document.getElementById('calendar-dates')
  let containerStyle = window.getComputedStyle(container)
  let elem = document.getElementsByClassName("calendar-date-item")[0]
  let dateElemStyle = window.getComputedStyle(elem)
  let width = parseInt(dateElemStyle.width, 10) +
      parseInt(dateElemStyle.marginLeft, 10) +
      parseInt(dateElemStyle.marginRight, 10) +
      parseInt(dateElemStyle.borderLeftWidth, 10) +
      parseInt(dateElemStyle.borderRightWidth, 10) +
      parseInt(dateElemStyle.paddingRight, 10) +
      parseInt(dateElemStyle.paddingLeft, 10)

  let numVisibleDates = Math.floor(parseInt(containerStyle.width, 10) / width)
  let scrolledDates = Math.floor(container.scrollLeft / width)
  let visibleMonths = dates.value.slice(0).splice(scrolledDates, numVisibleDates).map(d => d.month)
  let uniqueVisibleMonths = [...new Set(visibleMonths)]
  observableMonth.value = uniqueVisibleMonths.join("-")
}

onMounted(() => refreshVisibleMonths())

function handleScroll() {
  let container = document.getElementById('calendar-dates')
  isActiveScrollLeft.value = container.scrollLeft > 0
  isActiveScrollRight.value = (container.scrollWidth - container.clientWidth - container.scrollLeft) > 0
  refreshVisibleMonths()
}

</script>

<template>
  <div id="calendar-container">
    <div id="calendar-header-row">
      <CalendarHeader :active-left="isActiveScrollLeft" :active-right="isActiveScrollRight">
        <template #observable-month>{{ observableMonth }}</template>
      </CalendarHeader>
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
  padding: 10px 10px;
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