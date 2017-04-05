<template>
    <div class="pagenation-component">
      <ul class="page-numbers">
        <li class="page-links"
        v-for="p in pages"
        :class="{active:current === p}"
        @click="change(p)">{{ p + 1 }}</li>
      </ul>
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
      for(let i = 0; i < Math.ceil(this.total / this.pageSize); i ++) {
        pages.push(i)
      }
      return pages
    }
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    change (p) {
      this.current = p
      this.$emit('on-change', this.current)
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
