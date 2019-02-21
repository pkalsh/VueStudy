<template>
  <div id="app">
    <!-- <transition name="slide" mode="out-in"> -->
    <transition name="page" mode="out-in"
      enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft">
      <router-view></router-view>
    </transition>
    <nav class="navigation">
        <span><router-link to="/"><i class="fas fa-tasks fa-2x" aria-hidden="true"></i></router-link></span>
        <span><router-link to="/editor"><i class="far fa-edit fa-2x" aria-hidden="true"></i></router-link></span>
        <span><router-link to="/calendar"><i class="far fa-clock fa-2x"></i></router-link></span>
      </nav>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

body {
  text-align: center;
  background-color: #f6f6f6
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 5px 10px rgba(0, 0, 0 , 0.03);
}
.navigation {
  width:100%;
  position: fixed;
  margin-bottom: 10px;
  margin-top: 10px;
  bottom: 0px;
}
/* 왜 i를 선택해야 width 조절이 될까 */
.navigation i {
  width: 32%;
}
.navigation a:visited {
  color: #000000;
}
.router-link-exact-active i {
  color: #848484;
}
</style>
