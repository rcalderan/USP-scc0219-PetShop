
<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai



-->
<template>
  <div id="calendar">
    <div class="calendar dark">
      <div class="calendar_header">
        <h1 class="header_title">Welcome Back</h1>
        <p class="header_copy">{{person.name}}</p>
        <input
          id="calendar_date"
          v-on:input="changeDate"
          type="date"
          name="todayDate"
          value="2019-11-09"
        />
      </div>
      <div class="calendar_plan">
        <div class="cl_plan">
          <div class="cl_title">Today</div>
          <div class="cl_copy">{{new Date().toUTCString()}}</div>
        </div>
      </div>
      <div class="calendar_events">
        <p class="ce_title">Your schedule</p>
        <div :id="calev-s._id" v-for="s in schedules" v-bind:key="s._id" class="event_item" v-on:click="scheduleDetails">
          <div class="ei_Dot"></div>
          <div class="ei_Title">{{s.type}} - {{s.date.getHours()}}:{{s.date.getMinutes()}}</div>
          <div class="ei_Copy">{{s.description}}</div>
        </div>
      </div>
    </div>
    <div v-if="details" id="calendar_details">
        <h2>Schedule now</h2>
      

      <label>Chose a service</label>
      <select name="schedule_type">
        <option v-for="s in services" v-bind:key="s._id" :value="s.name">{{s.name}}</option>
      </select>
      <label>Chose date ans hour</label>
      <input name="schedule_date" type="datetime-local"
        value="2019-12-11T19:30"
       min="2019-01-01T00:00" max="2021-12-30T18:00">
        <label>Detail</label>
      <input
        v-model="animalInput"
        type="text"
        placeholder="let a description"
      />
      <button id="calAddbtn" v-on:click="addSchedule">add/edit</button>
      <button id="calRembtn" v-on:click="removeSchedule">remove</button>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar",
  props:{
    details:{
      type:Boolean,
      default:false
    }
  },
  data: function() {
    return {};
  },
  computed: {
    person() {
      return this.$store.state.person;
    },
    animals() {
      let userAnimals = [];
      this.$store.state.animals.forEach(element => {
        if (element.owner === this.$store.state.person._id)
          userAnimals.push(element);
      });
      return userAnimals;
    },
    services(){
      return this.$store.state.services; 

    },
    schedules() {
      return this.$store.state.schedules; 
    }
  },
  methods: {
    changeDate: function() {
      let calendardate = document.getElementById("calendar_date").value;
      let date = new Date(calendardate);
      
      let gotSchedule = [];
      this.$store.state.schedules.forEach(sch => {
        if (
          date.getFullYear() === sch.date.getFullYear() &&
          date.getDate() === sch.date.getDate() &&
          date.getMonth()+1 === sch.date.getMonth()
        ){
          gotSchedule.push(sch);
        }
      });
    },
    scheduleDetails: function(){     /* 
      let attr = event.target.getAttribute("id");
      let index = attr.indexOf("-");
      let id = attr.substr(index + 1, attr.length - index - 1);
      alert(id)
      
      let date = document.getElementsByName("schedule_date")[0].value;*/
      //let aname = document.getElementById("an-" + id).innerHTML;
      this.details=true;
    },
    addSchedule: function(){
      let all = this.$store.state.schedules;
      //let type= document.getElementsByName('schedule_type');
      let date = new Date(document.getElementsByName("schedule_date")[0].value);
      
      all.forEach(sch => {
        if(this.$store.state.person._id===sch.owner&&          
          date.getFullYear() === sch.date.getFullYear() &&
          date.getDate() === sch.date.getDate() &&
          date.getMonth()+1 === sch.date.getMonth()
        ){
          alert(sch.date.getHours())
        }
        
      });
    },
    removeSchedule: function(){

    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #fafafa;
}

.light {
  background-color: #fff;
}
.dark {
  margin-left: 65px;
}

.calendar {
  position: relative;
  width: 370px;
  box-shadow: 0px 0px 35px -16px rgba(0, 0, 0, 0.75);
  font-family: "Roboto", sans-serif;
  padding: 20px 30px;
  color: #363b41;
  display: inline-block;
}
.calendar_details{
  position: relative;
  width: 370px;
  box-shadow: 0px 0px 35px -16px rgba(0, 0, 0, 0.75);
  font-family: "Roboto", sans-serif;
  padding: 20px 30px;
  color: #363b41;
  display: inline-block;


}
.calendar_header {
  border-bottom: 2px solid rgba(0, 0, 0, 0.08);
}

.header_copy {
  color: #a39d9e;
  font-size: 20px;
}
.calendar_plan {
  margin: 20px 0 40px;
}
.cl_plan {
  width: 100%;
  height: 140px;
  background-image: linear-gradient(-222deg, #4caf50, rgb(159, 207, 161));
  box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
  padding: 30px;
  color: #fff;
}
.cl_title {
  color: #fff;
}
.cl_copy {
  font-size: 20px;
  margin: 20px 0;
  display: inline-block;
}

.cl_add {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  margin: 0 0 0 65px;
  color: #c2c2c2;
  padding: 11px 13px;
}
.calendar_events {
  color: #a39d9e;
}
.ce_title {
  font-size: 14px;
}

.event_item {
  margin: 18px 0;
  padding: 5px;
  cursor: pointer;
}
.event_item:hover {
  background-image: linear-gradient(-222deg, #4caf50, rgb(159, 207, 161));
  box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
}
.ei_Dot:hover {
  background-color: #fff;
}
.ei_Copy:hover,
.ei_Title:hover {
  color: #fff;
}

.ei_Dot,
.ei_Title {
  display: inline-block;
}

.ei_Dot {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #a39d9e;
  box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
}
.dot_active {
  background-color: #4caf50;
}

.ei_Title {
  margin-left: 10px;
  color: #363b41;
}

.ei_Copy {
  font-size: 12px;
  margin-left: 27px;
}

.dark {
  background-image: linear-gradient(-222deg, #646464, #454545);
  color: #fff;
}
.header_title,
.ei_Title,
.ce_title {
  color: #fff;
}
</style>