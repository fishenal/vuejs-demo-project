<template>
  <div>
      <input v-if="type==='password'" type="password" v-model.trim="theVal" :placeholder="placeholder">
      <input v-if="type==='text'" type="text" v-model.trim="theVal" :placeholder="placeholder">
      <span class="error">{{ errorText }}</span>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    cval: [String, Object],
    regMap: Object,
    okStatus: Boolean,
    type: String
  },
  computed: {
    theVal () {
      return this.cval
    },
    errorText () {
      let errorText = ''
      for (let key in this.regMap) {
        let re = new RegExp(key)
        let errText = this.regMap[key]
        if(!re.test(this.theVal)) {
          errorText = errText
          break
        }
      }
      if (errorText === '') {
        this.$emit('get-status', true)
      }
      else {
        this.$emit('get-status', false)
      }
      return errorText
    }
  }
}
</script>

<style scoped>
  .error {
    color: #ed4857;
    padding-left: 15px;
    display: inline-block;
  }
</style>
