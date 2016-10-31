<template>
    <div>
      <this-dialog :is-show="isShowBuyDialog">
        购买成功！
      </this-dialog>
      <this-dialog :is-show="isShowBuyDialog">
        购买失败！
      </this-dialog>
    </div>
</template>

<script>
import ThisDialog from 'Dialog'
export default {
  data () {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
