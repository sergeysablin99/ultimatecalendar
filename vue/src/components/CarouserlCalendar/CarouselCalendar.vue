<template>
  <div id="calendar-container">
    <div id="calendar-header-row">
      <CalendarHeader/>
    </div>
    <div id="calendar-dates-row">
      <div id="calendar-dates">
        <div class="calendar-date-item">
          <CalendarDateItemContainer>
            <template #date>1</template>
            <template #day-of-week>Пн</template>
          </CalendarDateItemContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarHeader from "@/components/CarouserlCalendar/utils/CalendarHeader.vue";
import CalendarDateItemContainer from "@/components/CarouserlCalendar/utils/CalendarDateItemContainer.vue";

export default {
  name: 'CarouselCalendar',
  components: {CalendarDateItemContainer, CalendarHeader},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#calendar-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  padding: 0% 1%;
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
  border-radius: 10%;
  margin: 5px 5px;
  padding: 5px 5px;
  /*flex-basis: 30px;*/
  justify-content: center;
  flex-shrink: 0;
}

</style>
