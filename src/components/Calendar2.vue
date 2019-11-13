<template>
  <div id="calendar2">
    <!-- inspired by http://colorhunt.co/c/8184 and 
    https://dribbble.com/shots/2407357-Calendar%60-->

    <div class="calendar">
      <div v-if="front" class="front">
        <div class="current-date">
          <h1 class="year">{{selectedDate.getFullYear()}}</h1>
          <h1 class="month">{{selectedDate.getMonth()+1}}</h1>
          <h1 class="day">{{selectedDate.getDate()}}</h1>
        </div>

        <div class="current-month">
          <ul class="week-days">
            <li>MON</li>
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
              <span class="last-month">27</span>
              <span class="last-month">28</span>
              <span class="last-month">29</span>
              <span class="last-month">30</span>
              <span class="last-month">31</span>
              <span @click="selectDay">01</span>
              <span @click="selectDay">02</span>
            </div>

            <div class="second">
              <span @click="selectDay">03</span>
              <span @click="selectDay">04</span>
              <span @click="selectDay">05</span>
              <span @click="selectDay" class="event">06</span>
              <span @click="selectDay">07</span>
              <span @click="selectDay">08</span>
              <span @click="selectDay">09</span>
            </div>

            <div class="third">
              <span @click="selectDay">10</span>
              <span @click="selectDay">11</span>
              <span @click="selectDay">12</span>
              <span @click="selectDay">13</span>
              <span @click="selectDay">14</span>
              <span @click="selectDay" class="active">15</span>
              <span @click="selectDay">16</span>
            </div>

            <div class="fourth">
              <span @click="selectDay">17</span>
              <span @click="selectDay">18</span>
              <span @click="selectDay">19</span>
              <span @click="selectDay">20</span>
              <span @click="selectDay">21</span>
              <span @click="selectDay">22</span>
              <span @click="selectDay">23</span>
            </div>

            <div class="fifth">
              <span @click="selectDay">24</span>
              <span @click="selectDay">25</span>
              <span @click="selectDay">26</span>
              <span @click="selectDay">27</span>
              <span @click="selectDay">28</span>
              <span @click="selectDay">29</span>
              <span @click="selectDay">30</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="back">
        <select v-on:change="changeService" id="schedule_type">
          <option v-for="s in services" v-bind:key="s._id" :value="s.name">{{s.name}}</option>
        </select>
        <div class="info">
          <div class="date">
            <p class="info-date">
              Date:
              <span>{{this.$data.selectedDate.toLocaleDateString()}}</span>
            </p>
            <p class="info-time">
              Time:
              <input id="shour" type="number" min="1" max="23" value="12" /> :
              <input id="smin" type="number" min="00" max="59" step="5" value="35" />
            </p>
          </div>
          <div class="address">
            <p>
              Price
              <span>${{price}}</span>
            </p>
          </div>
          <div class="observations">
            <p>
              Observations:
              <input
                v-model="sdescription"
                type="text"
                placeholder="let a description"
              />
            </p>
          </div>
        </div>

        <div class="actions">
          <button v-on:click="addSchedule" class="save">
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
      selectedDate: new Date(),
      sdescription: "",
      price: 120,
      front: true
    };
  },
  computed: {
    services() {
      return this.$store.state.services;
    },
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
    changeService: function() {
      let service = document.getElementById("schedule_type");

      let sName = service.options[service.selectedIndex].value;
      let allS = this.$store.state.services;
      for (let i = 0; i < allS.length; i++) {
        if (sName === allS[i].name) {
          this.$data.value = allS[i].price;
          this.$data.sdescription = allS[i].description;
        }
      }
    },
    getWeek: function() {
      this.$data.weekCursor++;
      if (this.$data.weekCursor > 7) this.$data.weekCursor = 0;
    },
    selectDay: function(event) {
      let year = parseInt(document.getElementsByClassName("year")[0].innerHTML);
      let month = parseInt(
        document.getElementsByClassName("month")[0].innerHTML
      );
      let day = parseInt(event.target.innerHTML);
      //let month = document.getElementsByClassName('month')
      this.$data.selectedDate = new Date(year, month, day);
      this.$data.front = !this.$data.front;
      //this.$data.selectedDate =
    },
    addSchedule: function() {
      try {
        let all = this.$store.state.schedules;
        let service = document.getElementById("schedule_type");
        let sName = service.options[service.selectedIndex].value;
        let shour = document.getElementById("shour").value;
        let smin = document.getElementById("smin").value;
        //
        //{ _id: 1, owner: 7,  type:"Consulta", description: "Vet Pipoca", date: new Date(2019, 11, 9, 12, 0, 0, 0) },
        //let type= document.getElementsByName('schedule_type');
        //let date = new Date(document.getElementsByName("schedule_date")[0].value);
        let date = this.$data.selectedDate;
        /*all.forEach(sch => {
        if (
          this.$store.state.person._id === sch.owner &&
          date.getFullYear() === sch.date.getFullYear() &&
          date.getDate() === sch.date.getDate() &&
          date.getMonth() + 1 === sch.date.getMonth()
        ) {
          alert(sch.date.getHours());
        }
      });*/

        all.push({
          _id: all.length + 1,
          owner: this.$store.state.person._id,
          type: sName,
          description: this.$data.sdescription,
          date: new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            shour,
            smin
          )
        });
        this.$data.front = !this.$data.front;
      } catch(error) {alert(error)}
    },
    dismiss: function() {
      this.$data.front = !this.$data.front;
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
#schedule_type {
  width: auto;
}
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
  width: 40%;
  text-align: left;
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