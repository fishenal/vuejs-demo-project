<template>
  <div>
      <input :type="type" v-model="cval" :placeholder="placeholder">
      <span class="error">{{ errorText }}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: 'string',
    placeholder: 'string',
    cval: ['string', 'object'],
    regMap: 'object',
    okStatus: 'boolean'
  },
  data () {
    return {
      errorText: null
    }
  },
  watch: {
    cval () {
      this.errorText = ''
      for (let key in this.regMap) {
        let re = new RegExp(key)
        let errorText = this.regMap[key]
        if(!re.test(this.cval)) {
          this.errorText = errorText
          break
        }
      }
      this.okStatus = this.errorText === ''
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
