<template>
    <div class="pagenation-component">
      <span class="page-links">&laquo;</span>
      <span class="page-links">&lt;</span>
      <ul class="page-numbers">
        <li class="page-links"
        v-for="p in pages"
        :class="{active:current === p}"
        @click="change(p)">{{ p + 1}}</li>
      </ul>
      <span class="page-links">&gt;</span>
      <span class="page-links">&raquo;</span>
    </div>
</template>

<script>
export default {
  props: {
    total: Number,
    pageSize: Number
  },
  computed: {
    pages () {
      let pages = []
      let prev = 0
      for (let i = 0; i < Math.ceil(this.total / this.pageSize); i ++) {
        let cur
        if (i === Math.ceil(this.total / this.pageSize) -1 || i === 0) {
          pages.push(i)
        }
        else if (Math.abs(this.current - i) < 3) {
          pages.push(i)
        }
        // console.log(cur - prev)
        // if (cur - prev === 0) {
        //   prev = i
        //   pages.push(cur)  
        // }
        // else if (cur - prev === 1) {
        //   prev = i
        //   pages.push(cur)
        // }
        // else if (cur - prev !== 1) {
        //   pages.push('...')
        //   pages.push(cur)
        // }
      }
      let omit=[]
      pages.forEach((num, index) => {
        if (index !== pages.length - 1 && pages[index + 1] - pages[index] !== 1) {
          omit.push(index)
          // pages.splice(index, 0, '...')
        }
        // if (cur - prev !== 1) {
        //   pages.push
        // }
      })
      omit.forEach((idx) => {
        pages.splice(idx + 1, 0, '...')
      })
      console.log(omit)
      return pages
    }
  },
  data () {
    return {
      current: 0,
      maxShow: 3
    }
  },
  methods: {
    change (p) {
      this.current = p
    }
  }
}
</script>

<style scoped>
.pagenation-component {
  display: inline-block;
  vertical-align: middle;
}
.page-links {
  display: inline-block;
  border: 1px solid #e3e3e3;
  text-align: center;
  height: 30px;
  line-height: 30px;
  width: 30px;
  background: #fff;
  cursor: pointer;
}
.page-numbers {
  display: inline-block;
}
.page-numbers li.active,
.page-links:hover {
  background: #4fc08d;
  color: #fff;
}
</style>
