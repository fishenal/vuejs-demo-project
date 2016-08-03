<template>
  <div class="container-fluid app-head">
    <h2 class="head-logo">
      <img src="./assets/logo.png">
    </h2>
    <div class="head-nav">
      <ul class="nav navbar-nav">
        <li>登录</li>
        <li class="nav-pile">|</li>
        <li>注册</li>
        <li class="nav-pile">|</li>
        <li>关于</li>
      </ul>
    </div>
  </div>
  <div class="container">
    <router-view transition="expand" transition-mode="out-in" keep-alive></router-view>  
  </div> 
  </div>
  <div class="container-fluid app-foot">
    <p>© 2016 fishenal MIT</p>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>
body {
  background: #f0f2f5;
  font-family: Microsoft YaHei, Arial;
  font-size: 14px;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
}
.head-logo {
  float: left;
}
.head-logo img {
  width: 50px;
}
.head-nav {
  float: right;
}
.head-nav li {
  cursor: pointer;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  line-height: 80px;
  background: #e3e4e8;
}
</style>
