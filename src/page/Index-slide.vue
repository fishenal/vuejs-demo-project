<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <h3>游戏类</h3>
        <ul>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
        </ul>
        <hr>
        <h3>应用类</h3>
        <ul>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
          <li>xxxxxxxx</li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides"></slide-show>  
    </div>
  </div>
</template>

<script>
import SlideShow from '../components/SlideShow'
export default {
  components: {
    SlideShow
  },
  data () {
    return {
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'http://xxx.xxx.com'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
}
.index-left-block h2 {
  background: #ed4857;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
</style>
