<template>
  <div id="calendar2">
    <!-- inspired by http://colorhunt.co/c/8184 and 
    https://dribbble.com/shots/2407357-Calendar%60-->

    <div class="calendar">
      <div v-if="front" class="front">
        <div class="current-date">
          <h1>Friday 15th</h1>
          <h1>January 2016</h1>
        </div>

        <div class="current-month">
          <ul class="week-days">
            <li v-on:click="testIt">MON</li>
            <li>TUE</li>
            <li>WED</li>
            <li>THU</li>
            <li>FRI</li>
            <li>SAT</li>
            <li>SUN</li>
          </ul>
          <!--<div class="weeks">
            <div v-for="day in days" v-bind:key="day.day">
              <div v-if="day.date.getWeekOfMonth()===1" class="first">
                <span v-if="day.day<10">0{{day.day}}</span>
                <span v-else>{{day.day}}</span>
              </div>
              <div v-else-if="day.date.getWeekOfMonth()===2" class="second">
                <span>{{day.day}}</span>
              </div>
              <div v-else-if="day.date.getWeekOfMonth()===3" class="third">
                <span>{{day.day}}</span>
              </div>
              <div v-else-if="day.date.getWeekOfMonth()===4" class="forth">
                <span>{{day.day}}</span>
              </div>
              <div v-else class="fifth">
                <span>{{day.day}}</span>
              </div>
            </div>
          </div>-->
          
          <div class="weeks">
            <div class="first">
              <span class="last-month">28</span>
              <span  class="last-month">29</span>
              <span  class="last-month">30</span>
              <span class="last-month">31</span>
              <span @click="selectDay">01</span>
              <span @click="selectDay">02</span>
              <span @click="selectDay">03</span>
            </div>

            <div class="second">
              <span @click="selectDay">04</span>
              <span @click="selectDay">05</span>
              <span @click="selectDay" class="event">06</span>
              <span @click="selectDay">07</span>
              <span @click="selectDay">08</span>
              <span @click="selectDay">09</span>
              <span @click="selectDay">10</span>
            </div>

            <div class="third">
              <span @click="selectDay">11</span>
              <span @click="selectDay">12</span>
              <span @click="selectDay">13</span>
              <span @click="selectDay">14</span>
              <span @click="selectDay" class="active">15</span>
              <span @click="selectDay">16</span>
              <span @click="selectDay">17</span>
            </div>

            <div class="fourth">
              <span @click="selectDay">18</span>
              <span @click="selectDay">19</span>
              <span @click="selectDay">20</span>
              <span @click="selectDay">21</span>
              <span @click="selectDay">22</span>
              <span @click="selectDay">23</span>
              <span @click="selectDay">24</span>
            </div>

            <div class="fifth">
              <span @click="selectDay">25</span>
              <span @click="selectDay">26</span>
              <span @click="selectDay">27</span>
              <span @click="selectDay">28</span>
              <span @click="selectDay">29</span>
              <span @click="selectDay">30</span>
              <span @click="selectDay">31</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="back">
        <input placeholder="What's the event?" />
        <div class="info">
          <div class="date">
            <p class="info-date">
              Date:
              <span>Jan 15th, 2016</span>
            </p>
            <p class="info-time">
              Time:
              <span>6:35 PM</span>
            </p>
          </div>
          <div class="address">
            <p>
              Address:
              <span>129 W 81st St, New York, NY</span>
            </p>
          </div>
          <div class="observations">
            <p>
              Observations:
              <span>Be there 15 minutes earlier</span>
            </p>
          </div>
        </div>

        <div class="actions">
          <button v-on:click="save" class="save">
            Save
            <i class="ion-checkmark"></i>
          </button>
          <button v-on:click="dismiss" class="dismiss">
            Dismiss
            <i class="ion-android-close"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
Date.prototype.getWeekOfMonth = function(exact) {
  var month = this.getMonth(),
    year = this.getFullYear(),
    firstWeekday = new Date(year, month, 1).getDay(),
    lastDateOfMonth = new Date(year, month + 1, 0).getDate(),
    offsetDate = this.getDate() + firstWeekday - 1,
    index = 1, // start index at 0 or 1, your choice
    weeksInMonth = index + Math.ceil((lastDateOfMonth + firstWeekday - 7) / 7),
    week = index + Math.floor(offsetDate / 7);
  if (exact || week < 2 + index) return week;
  return week === weeksInMonth ? index + 5 : week;
};

export default {
  name: "calendar2",
  data: function() {
    return {
        front:true
    };
  },
  computed: {
    days() {
      let today = this.$data.today;
      const year = today.getFullYear();
      const month = today.getMonth();
      const daysinmonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      let all = [];
      for (let i = 1; i <= daysinmonth; i++) {
        all.push({
          day: i,
          date: new Date(year, month, i)
        });
      }
      return all;
    }
  },
  methods: {
    getWeek: function() {
      this.$data.weekCursor++;
      if (this.$data.weekCursor > 7) this.$data.weekCursor = 0;
    },
    selectDay:function(){
        
        this.$data.front=!this.$data.front;

    },
    save: function() {
        this.$data.front=!this.$data.front;
        alert('Save Cal');
    },
    dismiss:function(){
        
        this.$data.front=!this.$data.front;
        alert("dismissed")
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 0;
}

a {
  text-decoration: none;
}

body,
html {
  height: 100%;
}

body {
  background: #dfebed;
  font-family: "Roboto", sans-serif;
}

.container {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.calendar {
  background: #2b4450;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  height: 501px;
  perspective: 1000;
  transition: 0.9s;
  transform-style: preserve-3d;
  width: 100%;
}

/* Front - Calendar */

.current-date {
  border-bottom: 1px solid rgba(73, 114, 133, 0.6);
  display: flex;
  justify-content: space-between;
  padding: 30px 40px;
}

.current-date h1 {
  color: #dfebed;
  font-size: 1.4em;
  font-weight: 300;
}

.week-days {
  color: #dfebed;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  padding: 30px 40px;
}

.days {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.weeks {
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
}

.weeks div {
  display: flex;
  font-size: 1.2em;
  font-weight: 300;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
}

.last-month {
  opacity: 0.3;
}

.weeks span {
  padding: 10px;
}

.weeks span.active {
  background: #f78536;
  border-radius: 50%;
}

.weeks span:not(.last-month):hover {
  cursor: pointer;
  font-weight: 600;
}

.event {
  position: relative;
}

.event:after {
  content: "•";
  color: #f78536;
  font-size: 1.4em;
  position: absolute;
  right: -4px;
  top: -4px;
}

/* Back - Event form */

.back {
  height: 100%;
}

.back input {
  background: none;
  border: none;
  border-bottom: 1px solid rgba(73, 114, 133, 0.6);
  color: #dfebed;
  font-size: 1.4em;
  font-weight: 300;
  padding: 30px 40px;
  width: 100%;
}

.info {
  color: #dfebed;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 1.2em;
  padding: 30px 40px;
}

.info div:not(.observations) {
  margin-bottom: 40px;
}

.info span {
  font-weight: 300;
}

.info .date {
  display: flex;
  justify-content: space-between;
}

.info .date p {
  width: 50%;
}

.info .address p {
  width: 100%;
}

.actions {
  bottom: 0;
  border-top: 1px solid rgba(73, 114, 133, 0.6);
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
}

.actions button {
  background: none;
  border: 0;
  color: #fff;
  font-weight: 600;
  letter-spacing: 3px;
  margin: 0;
  padding: 30px 0;
  text-transform: uppercase;
  width: 50%;
}

.actions button:first-of-type {
  border-right: 1px solid rgba(73, 114, 133, 0.6);
}

.actions button:hover {
  background: #497285;
  cursor: pointer;
}

.actions button:active {
  background: #5889a0;
  outline: none;
}

</style>