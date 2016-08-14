<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a href="{{ href }}">
        <img v-show="showSlides" src="{{ src }}" transition="expand"> 
      </a>
    </div>
    <h2>{{ title }}</h2>
    <ul class="slide-pages">
      <li @click="prev">&lt;</li>
      <li v-for="(index) in slides" @click="update($index)">
        <span :class="{'on': $index === nowIndex}">{{ $index + 1 }}</span>
      </li>
      <li @click="next">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      href: 'http:www.123.com',
      src: '',
      title: 'xxxxxxxxx',
      nowIndex: null,
      showSlides: true
    }
  },
  methods: {
    update: function (index) {
      this.showSlides = false
      this.nowIndex = index
      this.href = this.slides[index].href
      this.src = this.slides[index].src
      this.title = this.slides[index].title
      setTimeout(function () {
        this.showSlides = true
      }.bind(this), 300)
    },
    prev: function () {
      let prevIndex
      if (this.nowIndex === 0) {
        prevIndex = this.slides.length - 1
      }
      else {
        prevIndex = this.nowIndex - 1
      }
      this.update(prevIndex)
    },
    next: function () {
      let nextIndex
      if (this.nowIndex === this.slides.length - 1) {
        nextIndex = 0
      }
      else {
        nextIndex = this.nowIndex + 1
      }
      this.update(nextIndex)
    },
    clearInv: function () {
      clearInterval(this.intId)
    },
    runInv: function () {
      this.intId = setInterval(function () {
        this.next()
      }.bind(this), 3000)
    }
  },
  ready: function () {
    this.update(0);
    this.runInv();
  },
  props: {
    slides: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
/* 必需 */
.expand-transition {
  transition: all .3s ease;
  opacity: 1;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave {
  opacity: 0.5;
}
</style>
