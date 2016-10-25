<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line" v-for="formLine in formData">
        <span class="g-form-label">{{ formLine.label }}：</span>
        <div class="g-form-input">
          <input type="text" 
          v-model="formLine.model" placeholder="请输入用户名">
        </div>
      </div>
      <!-- <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <c-input type="password" :cval="formData.password.model" @get-status="getPasswordStatus" placeholder="请输入密码" :reg-map="formData.password.regMap">
        </div>
      </div> -->
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import cInput from '../components/Input'
export default {
  components: {
  },
  data () {
    return {
      formData: [
        {
          label: '用户名',
          model: '',
          regMap: {
            '@': '必须包含@'
          },
          status: false
        },
        {
          label: '密码',
          model: '',
          regMap: {
            '^\\w{1,6}$': '位数不对'    
          },
          status: false
        }
      ]
    }
  },
  methods: {
    getUsernameStatus (status) {
      this.formData['username'].status = status
    },
    getPasswordStatus (status) {
      this.formData['password'].status = status
    },
    onLogin () {
      if (this.usernameOk && this.passwordOk) {
        console.log('login')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
