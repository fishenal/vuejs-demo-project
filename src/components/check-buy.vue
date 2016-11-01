<template>
    <div>
      <this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
        请检查你的支付状态！
        <div class="button" @click="checkStatus">
          支付成功
        </div>
        <div class="button" @click="checkStatus">
          支付失败
        </div>
      </this-dialog>
      <this-dialog :is-show="isShowSuccessDialog">
        购买成功！
      </this-dialog>
      <this-dialog :is-show="isShowFailDialog">
        购买失败！
      </this-dialog>
    </div>
</template>

<script>
import ThisDialog from './Dialog'
export default {
  components: {
    ThisDialog
  },
  props: {
    'isShowCheckDialog': {
      type: Boolean,
      default: true
    },
    'orderId': {
      type: String
    }
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    checkStatus () {
      this.$http.post('/api/checkOrderStatus', {
        orderId: this.orderId
      })
      .then((res) => {
        this.$emit('close-check-buy')
        this.isShowSuccessDialog = true
      }, (err) => {
        this.$emit('close-check-buy')
        this.isShowFailDialog = true
      })
    }
  }
}
</script>

<style scoped>

</style>
