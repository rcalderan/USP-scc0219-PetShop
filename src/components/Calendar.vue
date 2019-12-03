<template>
  <div id="calendar">
    <!-- inspired by http://colorhunt.co/c/8184 and 
    https://dribbble.com/shots/2407357-Calendar%60-->
    <h1>
      Your s
      chedules
    </h1>
    <div class="calendar">
      <div v-if="front" class="front">
        <div class="current-date">
          <h1 class="year">Your schedules</h1>
          <DatePicker mode="single" v-model="selectedDate" v-on:dayclick="selectDay" />
        </div>
        <button
          class="sched-but"
          v-for="v in scheduled"
          v-bind:key="v._id"
        >{{v.service+" at "+v.date}}</button>
        <v-calendar :attributes="attrs" v-on:dayclick="selectDay" />
      </div>

      <div v-else class="back">
        <select v-model="name" v-on:change="changeService" id="schedule_type">
          <option v-for="s in services" v-bind:key="s._id" :value="s.name">{{s.name}}</option>
        </select>
        <div class="info">
          <div class="date">
            <p class="info-date">
              Date:
              {{this.$data.selectedDate.toLocaleDateString()}}
            </p>
            <p class="info-time">
              Time:
              <input v-model="hour" type="number" min="1" max="23" value="12" /> :
              <input v-model="min" type="number" min="00" max="59" step="5" value="35" />
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
              <input v-model="description" type="text" placeholder="let a description" />
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
import DatePicker from "v-calendar/lib/components/date-picker.umd";

export default {
  name: "calendar",
  components: { DatePicker },
  data: function() {
    return {
      name: "",
      hour: 12,
      min: 30,
      selectedDate: new Date(),
      description: "",
      price: 120,
      front: true,
      attrs: [
        {
          dot: "red",
          dates: [new Date()]
        },

        {
          dot: "blue",
          dates: []
        },
        {
          dot: "green",
          dates: []
        }
      ]
    };
  },
  computed: {
    services() {
      return this.$store.state.services;
    },
    scheduled() {
      let userId = this.$store.state.person._id;
      let all = this.$store.state.schedules;

      let userShcedules = all.filter(item => {
        return item.owner === userId;
      });/*
      let aux = [];
      userShcedules.forEach(element => {
        aux = [...element.date];
      });
      //updateDat(aux);
      alert(aux.length);*/
      return userShcedules;
    }
  },
  methods: {
    /*
    scheduled: async function(){

      let userId = this.$store.state.person._id;
      //let dts = this.$data.attrs[0].dates;
      //let all = [];
      /*let userSchedules = this.$store.state.schedules.filter(sch => {
        return sch.owner === userId;
      });*/ /*
      let res = await this.$store.dispatch('updateSchedules')
      res = res.filter((c)=>{
        return c.owner===userId
      })
      res.forEach(el => {
        this.$data.attrs[0].dates.push(el.date)
      });*/
    /*
      this.$store.state.schedules.forEach(s => {
        if (s.owner === userId) {
          all.push(s);
          dts.push(s.date);
        }
      });
      return res;
    },*/
    changeService: function() {
      let allS = this.$store.state.services;
      for (let i = 0; i < allS.length; i++) {
        if (this.name === allS[i].name) {
          this.price = allS[i].price;
          this.description = allS[i].description;
        }
      }
    },
    selectDay: function(ev) {
      this.$data.selectedDate = ev.date;
      let userSchedules = this.$store.state.schedules.filter(it => {
        return it.owner === this.$store.state.person._id;
      });
      if (userSchedules) {
        let auxdt = {};
        userSchedules.forEach(s => {
          auxdt = new Date(s.date);
          if (
            ev.date.getFullYear() === auxdt.getFullYear() &&
            ev.date.getMonth() === auxdt.getMonth() &&
            ev.date.getDate() === auxdt.getDate()
          ) {
            this.$data.price = s.price;
            this.$data.description = s.description;
          }
          //alert(new Date(s.date))
        });
      }
      this.$data.front = !this.$data.front;
    },
    addSchedule: async function() {
      try {
        let all = this.$store.state.schedules.filter(s => {
          return s.owner === this.$store.state.person._id;
        });
        let date = this.$data.selectedDate;
        let update = false;
        let same = false;
        if (all) {
          let aux={}
          all.forEach(async s => {
            aux=new Date(s.date)
            if (
              this.$store.state.person._id === s.owner &&
              date.getFullYear() === aux.getFullYear() &&
              date.getMonth() === aux.getMonth() &&
              date.getDate() === aux.getDate()
            ) {
              same = true;
              s.description = this.$data.description;
              aux = new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                this.hour,
                this.min
              );
              s.service = this.name;
              const putResp = await this.$http
                .request()
                .put("/api/schedule/" + s._id, s);
              if (putResp.status === 200) {
                update = true;
                alert(`You updated your schedule`);
              } else {
                alert("Couldnt update");
              }
            }
          });
        }
        if (!update && !same) {
          let newSch = {
            owner: this.$store.state.person._id,
            service: this.name,
            description: this.description,
            date: new Date(
              date.getFullYear(),
              date.getMonth(),
              date.getDate(),
              this.hour,
              this.min
            )
          };
          const postResp = await this.$http
            .request()
            .post("/api/schedule/", newSch);
          if (postResp.status === 200) {
            newSch._id = postResp.data._id;
            await this.$store.dispatch("updateSchedules");
            alert(`You reserved an hour at ${newSch.date}!`);
          } else {
            alert("não pode inserir");
          }

          //now add to cart
          let cart = {
            owner: this.$store.state.person._id,
            product: 0,
            description: newSch.description,
            value: this.price
          };
          await this.$store.dispatch("updateSchedules");
          let cartRes = await this.$http.request().post("/api/cart/", cart);
          if (cartRes.status != 200) {
            alert(
              "Couldnt add this to your cart. You should pay it in your schedule visit"
            );
          }
        }
        this.$data.front = !this.$data.front;
      } catch (error) {
        alert(error.message);
      }
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

#calendar a {
  text-decoration: none;
}
.sched-but {
  padding: 5px;
  margin: 5px;
}
#calendar body,
#calendar html {
  height: 100%;
}

#calendar body {
  background: #dfebed;
  font-family: "Roboto", sans-serif;
}

#calendar .container {
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
.current-date input {
  font-size: 40px;
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
  font-size: 0.8em;
  font-weight: 300;
  padding: 30px 40px;
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