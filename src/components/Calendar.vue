<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai



-->
<template>
  <div id="calendar">
    <div class="calendar dark">
      <div class="calendar_header">
        <h1 class="header_title">Welcome Back</h1>
        <p class="header_copy">{{person.name}}}}</p>
        <input type="date" name="todayDate" value="2019-09-22" />
      </div>
      <div class="calendar_plan">
        <div class="cl_plan">
          <div class="cl_title">Today</div>
          <div class="cl_copy">{{new Date()}}</div>
        </div>
      </div>
      <div class="calendar_events">
        <p class="ce_title">Your schedule</p>
        <div class="event_item">
          <div class="ei_Dot"></div>
          <div class="ei_Title">11:30 am</div>
          <div class="ei_Copy">Veterinary consult (fluffy)</div>
        </div>
        <div class="event_item">
          <div class="ei_Dot"></div>
          <div class="ei_Title">13:00 pm</div>
          <div class="ei_Copy">Grooming fluffy!</div>
        </div>
        <div class="event_item">
          <div class="ei_Dot dot_active"></div>
          <div class="ei_Title">14:30 am</div>
          <div class="ei_Copy">Take fluffy</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"calendar"
};
</script>

<style>
* {
  box-sizing:border-box;
}

body{
  background-color: #fafafa;
}


.light{
  background-color: #fff;
}
.dark{
  margin-left: 65px;
}

.calendar{
  position: relative;
  width:370px;
  box-shadow: 0px 0px 35px -16px rgba(0,0,0,0.75);
  font-family: 'Roboto', sans-serif;
  padding: 20px 30px;
  color:#363b41;
  display: inline-block;
}

.calendar_header{
  border-bottom: 2px solid rgba(0, 0, 0, 0.08);
}

.header_copy{
  color: #A39D9E;
  font-size:20px;
}
.calendar_plan{
  margin:20px 0 40px;
}
.cl_plan{
  width:100%;
  height: 140px;
  background-image: linear-gradient(-222deg, #4CAF50, rgb(159, 207, 161));
  box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
  padding:30px;
  color:#fff;
}
.cl_title{  
    color:#fff;
}
.cl_copy{
  font-size:20px;
  margin: 20px 0;
  display: inline-block;
}

.cl_add{
  display: inline-block;
  width: 40px;
  height:40px;
  border-radius:50%;
  background-color: #fff;
  cursor: pointer;
  margin:0 0 0 65px;
  color:#c2c2c2;
  padding: 11px 13px;
}
.calendar_events{
  color:#A39D9E;
}
.ce_title{
  font-size:14px;
}

.event_item{
  margin: 18px 0;
  padding:5px;
  cursor: pointer;
  
}
.event_item:hover{
    background-image: linear-gradient(-222deg, #4CAF50,  rgb(159, 207, 161));
    box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
    
  }
  .ei_Dot:hover{
    background-color: #fff;
  }
  .ei_Copy:hover,.ei_Title:hover{
    color:#fff;
  }

.ei_Dot,.ei_Title{
  display:inline-block;
}

.ei_Dot{
  border-radius:50%;
  width:10px;
  height: 10px;
  background-color: #A39D9E;
  box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
}
.dot_active{
  background-color: #4CAF50;
}

.ei_Title{
  margin-left:10px;
  color:#363b41;
}

.ei_Copy{
  font-size:12px;
  margin-left:27px;
}

.dark{
  background-image: linear-gradient(-222deg, #646464, #454545);
  color:#fff;
  
}
.header_title,.ei_Title,.ce_title{
  color:#fff;
}
</style>